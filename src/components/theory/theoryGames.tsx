import { type FC, useContext, useState } from "react";
import { TiArrowBack } from "react-icons/ti";
import { CharacterContext } from "~/contexts/charactersContext";
import { Questions } from "~/questions";
import { api } from "~/utils/api";

type QuizProps = {
  setTheoryRouter: (router: string) => void;
  name: string;
};

export const Quiz: FC<QuizProps> = ({ setTheoryRouter, name }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [resultScreen, setResultScreen] = useState(false);
  const { mutate: transaction } = api.characters.transaction.useMutation();
  const utils = api.useUtils();

  const characterId = useContext(CharacterContext).id;

  let questions: {
    question: string;
    options: string[];
    answer: string;
  }[] = [];

  switch (name) {
    case "Základy financí":
      questions = Questions.basics;
      break;
    case "Finanční gramotnost":
      questions = Questions.financeLiteracy;
      break;
    case "Budgeting":
      questions = Questions.budgeting;
      break;
    case "Finanční matematika":
      questions = Questions.financeMaths;
      break;
    case "Finanční trhy":
      questions = Questions.financeMarkets;
      break;
    case "Spořící účet":
      questions = Questions.savingAccount;
      break;
    case "Stavební spoření":
      questions = Questions.buildingSaving;
      break;
    case "Penzijní spoření":
      questions = Questions.pensionSaving;
      break;
    case "Termínované vklady":
      questions = Questions.termDeposit;
      break;
    case "Fondy":
      questions = Questions.investmentFunds;
      break;
    default:
      questions = [];
  }

  const answerHandler = (answer: string) => {
    setSelectedOption(answer);

    if (answer === questions[questionIndex]?.answer) {
      setCorrectAnswers((prev) => prev + 1);
      setScore((prev) => prev + 500); // Assuming 500 is earned per correct answer
    } else {
      setWrongAnswers((prev) => prev + 1);
    }

    setTimeout(() => {
      if (questionIndex < questions.length - 1) {
        setQuestionIndex((prev) => prev + 1);
        setSelectedOption(null);
      } else {
        transaction(
          { sum: score, characterId },
          {
            onSuccess: () => {
              void utils.characters.getSelectedCharacter.invalidate();
            },
          },
        );
        setResultScreen(true);
      }
    }, 1000); // Delay to show correct/wrong answer before moving to the next question
  };

  if (resultScreen) {
    return (
      <div className="relative h-full w-full py-10 pl-10 pr-28">
        <button
          className="absolute right-7 top-7 z-30 rounded border border-solid border-black p-1"
          onClick={() => setTheoryRouter("menu")}
        >
          <TiArrowBack className="text-4xl" />
        </button>
        <div className="flex h-full w-full flex-col overflow-hidden rounded-lg border border-solid border-black">
          <div className="bg-black p-1 text-center text-sm text-white">
            {name}
          </div>
          <div className="mt-2 w-full px-10 text-center">
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-bold">Quiz Completed!</h2>
              <p>Correct Answers: {correctAnswers}</p>
              <p>Wrong Answers: {wrongAnswers}</p>
              <p>Total Money Earned: {score} CZK</p>
              <button
                className="mt-4 rounded border border-solid border-black p-2"
                onClick={() => setTheoryRouter("menu")}
              >
                Return to Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative h-full w-full py-10 pl-10 pr-28">
        <button
          className="absolute right-7 top-7 z-30 rounded border border-solid border-black p-1"
          onClick={() => setTheoryRouter("menu")}
        >
          <TiArrowBack className="text-4xl" />
        </button>
        <div className="flex h-full w-full flex-col overflow-hidden rounded-lg border border-solid border-black">
          <div className="bg-black p-1 text-center text-sm text-white">
            {name}
          </div>
          <div className="mt-2 w-full px-10 text-center">
            {questionIndex < questions.length ? (
              <>
                <p className="p-2 text-lg">
                  {questions[questionIndex]?.question}
                </p>
                <div className="flex flex-col">
                  {questions[questionIndex]?.options.map((option, index) => (
                    <button
                      key={index}
                      className={`my-2 rounded border border-solid border-black p-2 ${
                        selectedOption
                          ? option === questions[questionIndex]?.answer
                            ? "bg-blue-500 text-white"
                            : selectedOption === option
                              ? "bg-red-500 text-white"
                              : "bg-gray-200"
                          : "hover:bg-gray-200"
                      }`}
                      onClick={() => !selectedOption && answerHandler(option)} // Disable buttons after selection
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center">
                <h2 className="text-xl font-bold">Quiz Completed!</h2>
                <p>Correct Answers: {correctAnswers}</p>
                <p>Wrong Answers: {wrongAnswers}</p>
                <p>Total Money Earned: {score} CZK</p>
                <button
                  className="mt-4 rounded border border-solid border-black p-2"
                  onClick={() => setTheoryRouter("menu")}
                >
                  Return to Menu
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
};
