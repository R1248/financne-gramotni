import { useSession } from "next-auth/react";
import Head from "next/head";
import { useState } from "react";
import CharactersMenu from "~/components/charactersMenu";
import EntryPage from "~/components/entryPage";
import GameRouter from "~/components/gameRouter";
import { CharactersProvider } from "~/contexts/charactersContext";

export default function Home() {
  const [router, setRouter] = useState("characters");
  const [selectedCharacterId, setSelectedCharacterId] = useState("");
  const { data: sessionData } = useSession();
  return (
    <>
      <Head>
        <title>SCITE finance</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/scite.ico" />
      </Head>
      <main className="min-w-screen flex h-full min-h-screen flex-col justify-stretch bg-[#264474] px-10 pb-5">
        {sessionData ? (
          <CharactersProvider>
            {
              {
                characters: (
                  <CharactersMenu
                    router={router}
                    setRouter={setRouter}
                    setSelectedCharacterId={setSelectedCharacterId}
                  />
                ),
                game: (
                  <GameRouter
                    router={router}
                    setRouter={setRouter}
                    selectedCharacterId={selectedCharacterId}
                  />
                ),
              }[router]
            }
          </CharactersProvider>
        ) : (
          <EntryPage />
        )}
      </main>
    </>
  );
}
