export const ProsperitaCreditProducts = {
  currentAccount: [
    {
      name: "Běžný účet",
      type: "currentAccount",
      interest: 0,
      description:
        "Běžný účet od Prosperita Credit nabízí bezplatné vedení účtu a jako bonus vám vrátíme 1% z Vašich plateb kartou zpět na účet.",
    },
  ],
  savingAccounts: [
    {
      name: "Spořící účet",
      type: "savingAccount",
      interest: 0.02,
      description:
        "Zhodnoťte své peníze na spořícím účtu od Prosperita Credit s atraktivním úrokem 2%.",
    },
  ],
  buildingSavings: [
    {
      name: "Stavební spoření",
      type: "buildingSavings",
      interest: 0.02,
      description:
        "Stavební spoření od Prosperita Credit vám nabízí garantovaný úrok 2% a státní podporu 5% z vkladu až do výše 20 000 Kč ročně.",
    },
  ],
  pensionSavings: [
    {
      name: "Penzijní spoření Stabilita plus",
      type: "pensionSavings",
      interest: 0.01,
      description:
        "Penzijní spoření Stabilita plus od Prosperita Credit vám nabízí zhodnocení přibližně 1 % bez zbytečných rizik a státní podporu 20% z vkladu až do výše 1 700 Kč měsíčně",
    },
    {
      name: "Penzijní spoření Vyvážený výnos",
      type: "pensionSavings",
      interest: 0.015,
      description:
        "Vyvážený výnos od Prosperita Credit vám nabízí zhodnocení kolem 1,5% a státní podporu 20% z vkladu až do výše 1 700 Kč měsíčně.",
    },
    {
      name: "Penzijní spoření Dynamický růst",
      type: "pensionSavings",
      interest: 0.025,
      description:
        "Spoření Dynamický růst kombinuje středně riziková aktiva s potenciálem růstu. Průměrné zhodnocení 2,5% a státní podpora 20% z vkladu až do výše 1 700 Kč měsíčně.",
    },
    {
      name: "Penzijní spoření Progresivní růst",
      type: "pensionSavings",
      interest: 0.04,
      description:
        "Spoření Progresivní růst je určeno pro dosažení maximálního zhodnocení. Přibližné zhodnocení 4% a státní podpora 20% z vkladu až do výše 1 700 Kč měsíčně.",
    },
  ],
  termDeposits: [
    {
      name: "Termínovaný vklad",
      type: "termDeposit",
      minimumDeposit: 5000,
      interest: [0.023, 0.026, 0.029, 0.032, 0.035],
      duration: [3, 6, 12, 24, 60],
      description:
        "Sjednejte si termínovaný vklad od Prosperita Credit a získejte atraktivní úrok až do 3,5% podle délky vkladu a zvýhodněnou sazbou do 1 500 000 Kč.",
    },
  ],
  investmentFunds: [
    {
      name: "Prosperita peněžní trh",
      type: "fund",
      interest: 0.026,
      volatility: 0.008,
      description:
        "Konzervativní fond se stabilními výnosy a vysokou odolností vůči výkyvům na trhu.",
    },
    {
      name: "Prosperita peněžní trh + dluhopisy",
      type: "fund",
      interest: 0.033,
      volatility: -0.024,
      description:
        "Konzervativní smíšený fond s odolností vůči výkyvům na trhu a rozumnou valatilitou.",
    },
    {
      name: "Prosperita dluhopisy",
      type: "fund",
      interest: 0.045,
      volatility: -0.033,
      description:
        "Volatilnější dluhopisový fond ideální ke kompenzaci tržních výkyvů akciových fondů.",
    },
    {
      name: "Prosperita dluhopisy + akcie",
      type: "fund",
      interest: 0.052,
      volatility: 0.017,
      description:
        "Smíšený fond s vysokým potenciálem růstu a střední volatilitou. Kombinace dluhopisů a konzerativních akcií.",
    },
    {
      name: "Prosperita akcie s reinvesticí dividend",
      type: "fund",
      interest: 0.057,
      volatility: 0.031,
      description:
        "Fond stabilních dividendových akcií s reinvesticí dividend a střední volatilitou.",
    },
  ],
};
export const SoldiusBankProducts = {
  currentAccount: [
    {
      name: "Běžný účet",
      type: "currentAccount",
      interest: 0,
      description:
        "Běžný účet je základním kamenem vašich financí. Sjednejte si ho již dnes u Soldius Bank.",
    },
  ],
  savingAccounts: [
    {
      name: "Spořící účet standard",
      type: "savingAccount",
      interest: 0.014,
      description:
        "S účtem standard u nás získáte úrok 1,4% až do výše 500 000 Kč.",
    },
    {
      name: "Spořící účet plus",
      type: "savingAccount",
      interest: 0.016,
      description:
        "S účtem plus u nás získáte úrok 1,6% až do výše 1 500 000 Kč za 100 Kč měsíčně.",
    },
  ],
  buildingSavings: [
    {
      name: "Stavební spoření",
      type: "buildingSavings",
      interest: 0.017,
      description:
        "Stavební spoření u nás vám nabízí garantovaný úrok 1,7% a státní podporu 5% z vkladu až do výše 20 000 Kč ročně.",
    },
  ],
  pensionSavings: [
    {
      name: "Penzijní spoření Stabilita",
      type: "pensionSavings",
      interest: 0.022,
      description:
        "Penzijní spoření Stabilita vám nabízí zhodnocení přibližně 2,2 % penzijním fondem stabilních aktiv a státní podporu 20% z vkladu až do výše 1 700 Kč měsíčně",
    },
    {
      name: "Penzijní spoření Růst",
      type: "pensionSavings",
      interest: 0.033,
      description:
        "Penzijní spoření Růst vám nabízí zhodnocení kolem 3,3% penzijním fondem smíšených aktiv a státní podporu 20% z vkladu až do výše 1 700 Kč měsíčně.",
    },
  ],
  termDeposits: [
    {
      name: "Termínovaný vklad",
      type: "termDeposit",
      minimumDeposit: 50000,
      interest: [0.02, 0.023, 0.026, 0.03, 0.034],
      duration: [3, 6, 12, 24, 60],
      description:
        "Sjednejte si termínovaný vklad od Soldius Bank a získejte atraktivní úrok až do 3,4% podle délky vkladu se zvýhodněnou sazbou až do 20 000 000 Kč.",
    },
  ],
  investmentFunds: [
    {
      name: "Soldius peněžní trh",
      type: "fund",
      interest: 0.027,
      volatility: -0.012,
      description:
        "Fond s nízkou volatilitou a stabilními výnosy vhodný pro konzervativní investory založený na instrumentech peněžního trhu",
    },
    {
      name: "Soldius peněžní trh + dluhopisy",
      type: "fund",
      interest: 0.031,
      volatility: -0.012,
      description:
        "Fond s nízkou volatilitou a stabilními výnosy vhodný pro konzervativní investory založený na instrumentech peněžního trhu a dluhopisech",
    },
    {
      name: "Soldius dividendoví králové s výplatou dividendy",
      type: "fund",
      interest: 0.035,
      volatility: -0.042,
      description:
        "Dividendový fond s výplatou dividendy a rozumnou volatilitou",
    },
    {
      name: "Soldius three buckets",
      type: "fund",
      interest: 0.047,
      volatility: 0.021,
      description:
        "Fond s třemi investičními strategiemi v jednom fondu - akcie, dluhopisy a peněžní trh  ve steném poměru",
    },
    {
      name: "Soldius korporátní dluhopisy",
      type: "fund",
      interest: 0.054,
      volatility: 0.031,
      description:
        "Fond soustředěný na dluhopisy stabilních korporací s nízkou volatilitou",
    },
    {
      name: "Soldius akcie s reinvesticí dividend",
      type: "fund",
      interest: 0.059,
      volatility: 0.071,
      description:
        "Akcie stabilních dividendových společností s reinvesticí dividend a střední volatilitou",
    },
    {
      name: "Soldius růstové akcie a dluhopisy",
      type: "fund",
      interest: 0.063,
      volatility: 0.087,
      description:
        "Akcie růstových firem a dluhopisy v jednom fondu v poměru 60:40",
    },
    {
      name: "Soldius S&P",
      type: "fund",
      interest: 0.071,
      volatility: 0.154,
      description: "Akcie největších amerických společností v indexu S&P 500",
    },
  ],
};
export const QuantumAGProducts = {
  currentAccount: [
    {
      name: "Běžný účet",
      type: "currentAccount",
      interest: 0.01,
      description:
        "Quantum A. G. nabízí mimořádný úrok 1% na běžném účtu až do 250 000 Kč.",
    },
  ],
  savingAccounts: [
    {
      name: "Spořící účet",
      type: "savingAccount",
      interest: 0.026,
      description:
        "U nás vaše peníze nezahálejí, zhodnotíme je s úrokem 2,6% na spořícím účtu.",
    },
  ],
  buildingSavings: [],
  pensionSavings: [
    {
      name: "Penzijní spoření Quantum stability",
      type: "pensionSavings",
      interest: 0.03,
      description:
        "Penzijní spoření Quantum stability nabízí zhodnocení přibližně 3 % investicí do kombinace dluhopisů a akcií a státní podporu 20% z vkladu až do výše 1 700 Kč měsíčně",
    },
    {
      name: "Penzijní spoření Quantum growth",
      type: "pensionSavings",
      interest: 0.045,
      description:
        "Penzijní spoření Quantum growth nabízí zhodnocení kolem 4,5% investicí do akcií a státní podporu 20% z vkladu až do výše 1 700 Kč měsíčně.",
    },
  ],
  termDeposits: [
    {
      name: "Termínovaný vklad",
      minimumDeposit: 5000,
      interest: [0.029, 0.032, 0.035, 0.038],
      duration: [3, 6, 12, 24],
      description:
        "S termínovaným vkladem od Quantum A. G. získáte atraktivní úrok až do 3,8% podle délky vkladu a zvýhodněnou sazbou do 2 000 000 Kč.",
    },
  ],
  investmentFunds: [
    {
      name: "Quantum dluhopisy",
      type: "fund",
      interest: 0.03,
      volatility: -0.012,
      description:
        "Dluhopisový fond s kombinací nízce a středně rizikových dluhopisů",
    },
    {
      name: "Quantum dluhopisy + akcie",
      type: "fund",
      interest: 0.042,
      volatility: 0.047,
      description:
        "Kombinace nízkorizikových a středněrizikových dluhopisů a akcií spojené ve vyváženém fondu",
    },
    {
      name: "Quantum dluhopisy korporát I",
      type: "fund",
      interest: 0.053,
      volatility: -0.031,
      description: "Dluhopisový fond stabilních hráčů na trhu",
    },
    {
      name: "Quantum dluhopisy korporát II",
      type: "fund",
      interest: 0.064,
      volatility: 0.054,
      description:
        "Dluhopisový fond kombinující dluhopisy stabilních společností a high yield dluhopisů",
    },
    {
      name: "Quantum akcie (Evropa)",
      type: "fund",
      interest: 0.056,
      volatility: 0.092,
      description:
        "Akciový fond kopírující index EUROPE 600 hlaavních evropských trhů",
    },
    {
      name: "Quantum akcie (Svět)",
      type: "fund",
      interest: 0.058,
      volatility: 0.13,
      description:
        "Akciový fond kopírující index MSCI World hlavních světoých trhů",
    },
    {
      name: "Quantum akcie (Dividendoví králové)",
      type: "fund",
      interest: 0.058,
      volatility: -0.094,
      description:
        "Akcie stabilních vysoce dividendových společností s reinvesticí dividend",
    },
    {
      name: "Quantum akcie (Akcie a korporátní dluhopisy)",
      type: "fund",
      interest: 0.062,
      volatility: 0.142,
      description:
        "Kombinace akcií a dluhopisů růstových firem v jednom fondu v poměru 60:40",
    },
    {
      name: "Quantum akcie (S&P 500)",
      type: "fund",
      interest: 0.074,
      volatility: 0.154,
      description:
        "Indexový fond kopírující index S&P 500 největších amerických společností",
    },
  ],
};
export const BankaNovumProducts = {
  currentAccount: [
    {
      name: "Běžný účet",
      type: "currentAccount",
      interest: 0,
      description:
        "Sjednejte si účet u Banky Novum a my vám dáme 500 Kč na vyzkoušení účtu.",
    },
  ],
  savingAccounts: [
    {
      name: "Spořící účet",
      type: "savingAccount",
      interest: 0.01,
      description:
        "Založte si spořící účet u Banky Novum se základním úrokem 1% s mo6nost9 získání bonusového úroku 0,75% za využití běžného účtu pro pravidelné příjmy.",
    },
  ],
  buildingSavings: [
    {
      name: "Stavební spoření",
      type: "buildingSavings",
      interest: 0.019,
      description:
        "Stavební spoření u Banky Novum vám nabízí garantovaný úrok 1,9% a státní podporu 5% z vkladu až do výše 20 000 Kč ročně. Za založení vám dáme 2 000 Kč do začátku.",
    },
  ],
  pensionSavings: [
    {
      name: "Penzijní spoření Garant",
      type: "pensionSavings",
      interest: 0.005,
      description:
        "Penzijní spoření Garant nabízí zhodnocení přibližně 0,5 % se 100% garancí a státní podporu 20% z vkladu až do výše 1 700 Kč měsíčně",
    },
    {
      name: "Penzijní spoření Stabilita",
      type: "pensionSavings",
      interest: 0.015,
      description:
        "Penzijní spoření Stabilita nabízí zhodnocení kolem 1,5% investicí do aktiv peněžního trhu a státní podporu 20% z vkladu až do výše 1 700 Kč měsíčně.",
    },
    {
      name: "Penzijní spoření Vyvážený růst",
      type: "pensionSavings",
      interest: 0.03,
      description:
        "S penzií spořením Vyvážený růst získáte zhodnocení kolem 3% díky dluhopisovému fondu a státní podporu 20% z vkladu až do výše 1 700 Kč měsíčně.",
    },
  ],
  termDeposits: [
    {
      name: "Termínovaný vklad",
      type: "termDeposit",
      minimumDeposit: 10000,
      interest: [0.026, 0.028, 0.03, 0.031, 0.032, 0.033],
      duration: [3, 6, 12, 24, 60, 120],
      description:
        "Termínovaný vklad od banky Novum zajišťuje úrok až 3.3% dle délky vkladu do maximální částky 5 000 000 Kč",
    },
  ],
  investmentFunds: [
    {
      name: "Novum peněžní trh",
      type: "fund",
      interest: 0.028,
      volatility: -0.007,
      description:
        "Fond aktiv finančního trhu s velmi nízkou volatilitou a stabilními výnosy.",
    },
    {
      name: "Novum peněžní trh + dluhopisy",
      type: "fund",
      interest: 0.035,
      volatility: -0.016,
      description:
        "Fond kombinující nízce rizikové instrumenty peněžního trhu s dluhopisy vhodný na zajištění vůči krizím.",
    },
    {
      name: "Novum dluhopisy (ČR)",
      type: "fund",
      interest: 0.041,
      volatility: -0.011,
      description:
        "Fond zaměřený na státní dluhopisy a dluhopisy největších bank v ČR",
    },
    {
      name: "Novum nemovitostní fond Praha",
      type: "fund",
      interest: 0.05,
      volatility: 0.072,
      description:
        "Nemovitostní fond zaměřený na výstavbu a pronájem investičních nemovitostí v Praze",
    },
    {
      name: "Novum akcie + dluhopisy",
      type: "fund",
      interest: 0.053,
      volatility: 0.102,
      description:
        "Fond kombinující akcie a dluhopisy v poměru 50:50 s potenciálem růstu",
    },
  ],
};
