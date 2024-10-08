const cities = [
  "Praha",
  "Brno",
  "Ostrava",
  "Plzeň",
  "Liberec",
  "Olomouc",
  "České Budějovice",
  "Hradec Králové",
  "Pardubice",
  "Ústí nad Labem",
  "Zlín",
  "Havířov",
  "Kladno",
  "Most",
  "Opava",
  "Jihlava",
  "Frýdek-Místek",
  "Teplice",
  "Karviná",
  "Karlovy Vary",
  "Chomutov",
  "Děčín",
  "Mladá Boleslav",
  "Jablonec nad Nisou",
  "Prostějov",
  "Přerov",
  "Česká Lípa",
  "Třebíč",
  "Tábor",
  "Třinec",
  "Znojmo",
  "Kolín",
  "Příbram",
  "Cheb",
  "Písek",
];

export const companies = [
  {
    name: "Soldius bank",
    field: "Finance",
    jobOpportunities: [
      {
        position: "Bankovní poradce",
        salary: 42000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Firemní bankéř",
        salary: 75000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Pracovník zákaznického servisu",
        salary: 32000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Poradce pro hypoteční úvěry",
        salary: 51000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Specialista na spotřebitelské úvěry",
        salary: 47000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Poradce pro investiční produkty",
        salary: 65000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Portfolio manažer",
        salary: 87000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.3)),
      },
      {
        position: "Investiční analytik",
        salary: 66000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Správce aktiv",
        salary: 74000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.3)),
      },
      {
        position: "Fondový manažer",
        salary: 96000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.3)),
      },
      {
        position: "Private Equity manažer",
        salary: 140000,
        education: "Finance",
        cities: ["Praha", "Brno"],
      },
      {
        position: "Hedge Fund manažer",
        salary: 153000,
        education: "Finance",
        cities: ["Praha", "Brno"],
      },
      {
        position: "Wealth Manager / Správce majetku",
        salary: 83000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Manažer rizik",
        salary: 87000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Analytik rizik",
        salary: 52000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Compliance Officer",
        salary: 61000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Manažer pro řízení úvěrových rizik",
        salary: 83000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.5)),
      },
      {
        position: "Kontrolor vnitřního auditu",
        salary: 66000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Úvěrový analytik",
        salary: 57000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Úvěrový manažer",
        salary: 74000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Manažer pro schvalování úvěrů",
        salary: 79000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Specialista na restrukturalizaci úvěrů",
        salary: 66000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Finanční analytik",
        salary: 74000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Manažer finančního plánování",
        salary: 96000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.3)),
      },
      {
        position: "Finanční kontrolor",
        salary: 83000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.5)),
      },
      {
        position: "Specialista na daně",
        salary: 61000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Pokladník",
        salary: 74000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Specialista na likviditu",
        salary: 87000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.3)),
      },
      {
        position: "Manažer cash flow",
        salary: 83000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.3)),
      },
      {
        position: "Trader / Obchodník",
        salary: 87000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.3)),
      },
      {
        position: "Broker",
        salary: 84000,
        education: "Finance",
        cities: ["Praha", "Brno", "Plzeň"],
      },
      {
        position: "Derivátový obchodník",
        salary: 130000,
        education: "Finance",
        cities: ["Praha", "Brno"],
      },
      {
        position: "Analytik kapitálových trhů",
        salary: 74000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.5)),
      },
      {
        position: "Dealer s cennými papíry",
        salary: 66000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Účetní",
        salary: 52000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Daňový účetní",
        salary: 61000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Finanční manažer",
        salary: 96000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.5)),
      },
      {
        position: "Hlavní účetní",
        salary: 66000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Kontrolor nákladů",
        salary: 61000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Pojistný matematik",
        salary: 87000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Pojistný makléř",
        salary: 66000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Pojišťovací poradce",
        salary: 52000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Specialista na underwriting",
        salary: 61000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Manažer rizik v pojišťovnictví",
        salary: 96000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.3)),
      },
      {
        position: "Manažer bankovní pobočky",
        salary: 71000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Generální ředitel (CEO)",
        salary: 370000,
        education: "Finance",
        cities: ["Praha"],
      },
      {
        position: "Finanční ředitel (CFO)",
        salary: 250000,
        education: "Finance",
        cities: ["Praha"],
      },
      {
        position: "Ředitel rizik (CRO)",
        salary: 208000,
        education: "Finance",
        cities: ["Praha"],
      },
      {
        position: "Ředitel pro investice (CIO)",
        salary: 208000,
        education: "Finance",
        cities: ["Praha"],
      },
      {
        position: "Ředitel provozu (COO)",
        salary: 220000,
        education: "Finance",
        cities: ["Praha"],
      },
      {
        position: "Manažer pro vztahy s firemními klienty",
        salary: 87000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.3)),
      },
      {
        position: "Specialista na fúze a akvizice",
        salary: 115000,
        education: "Finance",
        cities: ["Praha", "Brno", "Ostrava"],
      },
      {
        position: "Korporátní poradce",
        salary: 96000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.3)),
      },
      {
        position: "Manažer pro strukturované financování",
        salary: 110000,
        education: "Finance",
        cities: ["Praha", "Brno"],
      },
    ],
  },
  {
    name: "Banka Novum",
    field: "Finance",
    jobOpportunities: [
      {
        position: "Bankovní poradce",
        salary: 38000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Firemní bankéř",
        salary: 70000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Pracovník zákaznického servisu",
        salary: 30000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Poradce pro hypoteční úvěry",
        salary: 47000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Specialista na spotřebitelské úvěry",
        salary: 45000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Poradce pro investiční produkty",
        salary: 60000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Portfolio manažer",
        salary: 82000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.3)),
      },
      {
        position: "Investiční analytik",
        salary: 62000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Správce aktiv",
        salary: 70000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.3)),
      },
      {
        position: "Fondový manažer",
        salary: 90000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.3)),
      },
      {
        position: "Private Equity manažer",
        salary: 125000,
        education: "Finance",
        cities: ["Praha", "Brno"],
      },
      {
        position: "Hedge Fund manažer",
        salary: 140000,
        education: "Finance",
        cities: ["Praha", "Brno"],
      },
      {
        position: "Wealth Manager / Správce majetku",
        salary: 78000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Manažer rizik",
        salary: 81000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Analytik rizik",
        salary: 50000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Compliance Officer",
        salary: 58000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Manažer pro řízení úvěrových rizik",
        salary: 78000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.5)),
      },
      {
        position: "Kontrolor vnitřního auditu",
        salary: 63000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Úvěrový analytik",
        salary: 54000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Úvěrový manažer",
        salary: 70000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Manažer pro schvalování úvěrů",
        salary: 74000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Specialista na restrukturalizaci úvěrů",
        salary: 62000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Finanční analytik",
        salary: 69000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Manažer finančního plánování",
        salary: 90000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.3)),
      },
      {
        position: "Finanční kontrolor",
        salary: 78000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.5)),
      },
      {
        position: "Specialista na daně",
        salary: 58000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Pokladník",
        salary: 70000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Specialista na likviditu",
        salary: 82000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.3)),
      },
      {
        position: "Manažer cash flow",
        salary: 78000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.3)),
      },
      {
        position: "Trader / Obchodník",
        salary: 82000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.3)),
      },
      {
        position: "Broker",
        salary: 80000,
        education: "Finance",
        cities: ["Praha", "Brno", "Plzeň"],
      },
      {
        position: "Derivátový obchodník",
        salary: 120000,
        education: "Finance",
        cities: ["Praha", "Brno"],
      },
      {
        position: "Analytik kapitálových trhů",
        salary: 69000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.5)),
      },
      {
        position: "Dealer s cennými papíry",
        salary: 62000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Účetní",
        salary: 50000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Daňový účetní",
        salary: 58000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Finanční manažer",
        salary: 90000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.5)),
      },
      {
        position: "Hlavní účetní",
        salary: 62000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Kontrolor nákladů",
        salary: 58000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Pojistný matematik",
        salary: 82000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Pojistný makléř",
        salary: 62000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Pojišťovací poradce",
        salary: 50000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Specialista na underwriting",
        salary: 58000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Manažer rizik v pojišťovnictví",
        salary: 90000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.3)),
      },
      {
        position: "Manažer bankovní pobočky",
        salary: 67000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Generální ředitel (CEO)",
        salary: 320000,
        education: "Finance",
        cities: ["Praha"],
      },
      {
        position: "Finanční ředitel (CFO)",
        salary: 250000,
        education: "Finance",
        cities: ["Praha"],
      },
    ],
  },
  {
    name: "Prosperita Credit",
    field: "Finance",
    jobOpportunities: [
      {
        position: "Bankovní poradce",
        salary: 34000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Firemní bankéř",
        salary: 65000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.6)),
      },
      {
        position: "Pracovník zákaznického servisu",
        salary: 28000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Poradce pro hypoteční úvěry",
        salary: 42000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Specialista na spotřebitelské úvěry",
        salary: 40000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Poradce pro investiční produkty",
        salary: 50000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Portfolio manažer",
        salary: 68000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.4)),
      },
      {
        position: "Investiční analytik",
        salary: 55000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.5)),
      },
      {
        position: "Manažer rizik",
        salary: 85000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.6)),
      },
      {
        position: "Analytik rizik",
        salary: 55000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Compliance Officer",
        salary: 50000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.6)),
      },
      {
        position: "Úvěrový analytik",
        salary: 48000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Úvěrový manažer",
        salary: 60000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.6)),
      },
      {
        position: "Manažer pro řízení úvěrových rizik",
        salary: 75000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.5)),
      },
      {
        position: "Finanční analytik",
        salary: 60000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.6)),
      },
      {
        position: "Pojistný matematik",
        salary: 78000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.6)),
      },
      {
        position: "Účetní",
        salary: 45000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Specialista na daně",
        salary: 52000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Pokladník",
        salary: 55000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.5)),
      },
      {
        position: "Specialista na likviditu",
        salary: 70000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.4)),
      },
      {
        position: "Manažer bankovní pobočky",
        salary: 60000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Generální ředitel (CEO)",
        salary: 280000,
        education: "Finance",
        cities: ["Praha"],
      },
      {
        position: "Finanční ředitel (CFO)",
        salary: 200000,
        education: "Finance",
        cities: ["Praha"],
      },
    ],
  },
  {
    name: "Quantum AG",
    field: "Finance",
    jobOpportunities: [
      {
        position: "Bankovní poradce",
        salary: 38000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Pracovník zákaznického servisu",
        salary: 28000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Poradce pro investiční produkty",
        salary: 70000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.7)),
      },
      {
        position: "Portfolio manažer",
        salary: 95000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.3)),
      },
      {
        position: "Investiční analytik",
        salary: 80000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.5)),
      },
      {
        position: "Správce aktiv",
        salary: 72000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.3)),
      },
      {
        position: "Fondový manažer",
        salary: 100000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.3)),
      },
      {
        position: "Private Equity manažer",
        salary: 142000,
        education: "Finance",
        cities: ["Praha", "Brno"],
      },
      {
        position: "Hedge Fund manažer",
        salary: 163000,
        education: "Finance",
        cities: ["Praha", "Brno"],
      },
      {
        position: "Wealth Manager / Správce majetku",
        salary: 80000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.3)),
      },
      {
        position: "Manažer rizik",
        salary: 89000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.5)),
      },
      {
        position: "Analytik rizik",
        salary: 55000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.5)),
      },
      {
        position: "Manažer pro řízení úvěrových rizik",
        salary: 80000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.5)),
      },
      {
        position: "Finanční analytik",
        salary: 72000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.5)),
      },
      {
        position: "Manažer finančního plánování",
        salary: 84000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.3)),
      },
      {
        position: "Specialista na likviditu",
        salary: 89000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.3)),
      },
      {
        position: "Trader / Obchodník",
        salary: 91000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.3)),
      },
      {
        position: "Derivátový obchodník",
        salary: 142000,
        education: "Finance",
        cities: ["Praha", "Brno"],
      },
      {
        position: "Analytik kapitálových trhů",
        salary: 84000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.5)),
      },
      {
        position: "Účetní",
        salary: 45000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Finanční manažer",
        salary: 85000,
        education: "Finance",
        cities: cities.slice(0, Math.floor(cities.length * 0.5)),
      },
      {
        position: "Hlavní účetní",
        salary: 58000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Manažer bankovní pobočky",
        salary: 62000,
        education: "Finance",
        cities: cities,
      },
      {
        position: "Generální ředitel (CEO)",
        salary: 240000,
        education: "Finance",
        cities: ["Praha"],
      },
      {
        position: "Finanční ředitel (CFO)",
        salary: 218000,
        education: "Finance",
        cities: ["Praha"],
      },
      {
        position: "Ředitel rizik (CRO)",
        salary: 198000,
        education: "Finance",
        cities: ["Praha"],
      },
      {
        position: "Ředitel pro investice (CIO)",
        salary: 230000,
        education: "Finance",
        cities: ["Praha"],
      },
      {
        position: "Ředitel provozu (COO)",
        salary: 200000,
        education: "Finance",
        cities: ["Praha"],
      },
    ],
  },
  /*{ name: "Vireon Labs", field: "IT" },
  { name: "CodeX", field: "IT" },
  { name: "CyberNest", field: "IT" },
  { name: "Econometrica", field: "IT" },*/
];

export const FinanceWorkOpportunities = [
  {
    position: "Bankovní poradce",
    salary: 39000,
    education: "Finance",
  },
  {
    position: "Firemní bankéř",
    salary: 70000,
    education: "Finance",
  },
  {
    position: "Pracovník zákaznického servisu",
    salary: 30000,
    education: "Finance",
  },
  {
    position: "Poradce pro hypoteční úvěry",
    salary: 48000,
    education: "Finance",
  },
  {
    position: "Specialista na spotřebitelské úvěry",
    salary: 44000,
    education: "Finance",
  },
  {
    position: "Poradce pro investiční produkty",
    salary: 61000,
    education: "Finance",
  },

  // Řízení investic a finančních aktiv
  { position: "Portfolio manažer", salary: 87000, education: "Finance" },
  { position: "Investiční analytik", salary: 66000, education: "Finance" },
  { position: "Správce aktiv", salary: 74000, education: "Finance" },
  { position: "Fondový manažer", salary: 96000, education: "Finance" },
  { position: "Private Equity manažer", salary: 140000, education: "Finance" },
  { position: "Hedge Fund manažer", salary: 153000, education: "Finance" },
  {
    position: "Wealth Manager / Správce majetku",
    salary: 83000,
    education: "Finance",
  },

  // Risk management a kontrola
  { position: "Manažer rizik", salary: 87000, education: "Finance" },
  { position: "Analytik rizik", salary: 52000, education: "Finance" },
  { position: "Compliance Officer", salary: 61000, education: "Finance" },
  {
    position: "Manažer pro řízení úvěrových rizik",
    salary: 83000,
    education: "Finance",
  },
  {
    position: "Kontrolor vnitřního auditu",
    salary: 66000,
    education: "Finance",
  },

  // Úvěrové operace a řízení
  { position: "Úvěrový analytik", salary: 57000, education: "Finance" },
  { position: "Úvěrový manažer", salary: 74000, education: "Finance" },
  {
    position: "Manažer pro schvalování úvěrů",
    salary: 79000,
    education: "Finance",
  },
  {
    position: "Specialista na restrukturalizaci úvěrů",
    salary: 66000,
    education: "Finance",
  },

  // Finanční plánování a analýza
  { position: "Finanční analytik", salary: 74000, education: "Finance" },
  {
    position: "Manažer finančního plánování",
    salary: 96000,
    education: "Finance",
  },
  { position: "Finanční kontrolor", salary: 83000, education: "Finance" },
  { position: "Specialista na daně", salary: 61000, education: "Finance" },

  // Pokladna a likvidita
  { position: "Pokladník", salary: 74000, education: "Finance" },
  { position: "Specialista na likviditu", salary: 87000, education: "Finance" },
  { position: "Manažer cash flow", salary: 83000, education: "Finance" },

  // Kapitalové trhy a obchodování
  { position: "Trader / Obchodník", salary: 87000, education: "Finance" },
  { position: "Broker", salary: 74000, education: "Finance" },
  { position: "Derivátový obchodník", salary: 130000, education: "Finance" },
  {
    position: "Analytik kapitálových trhů",
    salary: 74000,
    education: "Finance",
  },
  { position: "Dealer s cennými papíry", salary: 66000, education: "Finance" },

  // Účetnictví a finance
  { position: "Účetní", salary: 52000, education: "Finance" },
  { position: "Daňový účetní", salary: 61000, education: "Finance" },
  { position: "Finanční manažer", salary: 96000, education: "Finance" },
  { position: "Hlavní účetní", salary: 66000, education: "Finance" },
  { position: "Kontrolor nákladů", salary: 61000, education: "Finance" },

  // Pojišťovnictví
  { position: "Pojistný matematik", salary: 87000, education: "Finance" },
  { position: "Pojistný makléř", salary: 66000, education: "Finance" },
  { position: "Pojišťovací poradce", salary: 52000, education: "Finance" },
  {
    position: "Specialista na underwriting",
    salary: 61000,
    education: "Finance",
  },
  {
    position: "Manažer rizik v pojišťovnictví",
    salary: 96000,
    education: "Finance",
  },

  // Vyšší management a strategické role
  { position: "Generální ředitel (CEO)", salary: 370000, education: "Finance" },
  { position: "Finanční ředitel (CFO)", salary: 250000, education: "Finance" },
  { position: "Ředitel rizik (CRO)", salary: 208000, education: "Finance" },
  {
    position: "Ředitel pro investice (CIO)",
    salary: 208000,
    education: "Finance",
  },
  { position: "Ředitel provozu (COO)", salary: 220000, education: "Finance" },

  // Korporátní bankovnictví
  {
    position: "Manažer pro vztahy s firemními klienty",
    salary: 87000,
    education: "Finance",
  },
  {
    position: "Specialista na fúze a akvizice",
    salary: 115000,
    education: "Finance",
  },
  { position: "Korporátní poradce", salary: 96000, education: "Finance" },
  {
    position: "Manažer pro strukturované financování",
    salary: 110000,
    education: "Finance",
  },
];

export const ProgrammingWorkOpportunities = [
  // Web development
  { position: "Frontend Developer", salary: 88000, education: "IT" },
  { position: "Backend Developer", salary: 97000, education: "IT" },
  { position: "Fullstack Developer", salary: 108000, education: "IT" },
  { position: "Web Developer", salary: 85000, education: "IT" },

  // Mobile development
  { position: "Android Developer", salary: 88000, education: "IT" },
  { position: "iOS Developer", salary: 92000, education: "IT" },
  {
    position: "Cross-platform Mobile Developer",
    salary: 105000,
    education: "IT",
  },

  // Game development
  { position: "Game Developer", salary: 112000, education: "IT" },
  { position: "Game Designer", salary: 85000, education: "IT" },
  { position: "Unity Developer", salary: 91000, education: "IT" },

  // Data and AI
  { position: "Data Scientist", salary: 127000, education: "IT" },
  { position: "Data Engineer", salary: 121000, education: "IT" },
  { position: "Machine Learning Engineer", salary: 131000, education: "IT" },
  { position: "AI Specialist", salary: 145000, education: "IT" },

  // Cybersecurity
  { position: "Cybersecurity Specialist", salary: 112000, education: "IT" },
  { position: "Penetration Tester", salary: 102000, education: "IT" },
  { position: "Security Analyst", salary: 92000, education: "IT" },

  // DevOps and infrastructure
  { position: "DevOps Engineer", salary: 115000, education: "IT" },
  { position: "Cloud Engineer", salary: 131000, education: "IT" },
  { position: "System Administrator", salary: 80000, education: "IT" },

  // Specialized programming roles
  { position: "Embedded Systems Developer", salary: 102000, education: "IT" },
  { position: "Blockchain Developer", salary: 135000, education: "IT" },
  { position: "AR/VR Developer", salary: 121000, education: "IT" },

  // Management and higher-level roles
  { position: "Tech Lead", salary: 140000, education: "IT" },
  { position: "Product Manager", salary: 153000, education: "IT" },
  { position: "Software Architect", salary: 148000, education: "IT" },
  {
    position: "CTO (Chief Technology Officer)",
    salary: 280000,
    education: "IT",
  },
  {
    position: "CEO (Chief Executive Officer)",
    salary: 370000,
    education: "IT",
  },
];
