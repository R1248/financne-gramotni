type City = string;

interface Route {
  city: City;
  distance: number;
}

export const cities: Record<string, Route[]> = {
  Praha: [
    { city: "Plzeň", distance: 93 },
    { city: "Příbram", distance: 55 },
    { city: "Tábor", distance: 93 },
    { city: "Jihlava", distance: 110 },
    { city: "Kolín", distance: 67 },
    { city: "Mladá Boleslav", distance: 64 },
    { city: "Česká Lípa", distance: 95 },
    { city: "Ústí nad Labem", distance: 90 },
    { city: "Karlovy Vary", distance: 124 },
    { city: "Kladno", distance: 35 },
  ],
  Brno: [
    { city: "Pardubice", distance: 104 },
    { city: "Jihlava", distance: 89 },
    { city: "Třebíč", distance: 55 },
    { city: "Znojmo", distance: 98 },
    { city: "Prostějov", distance: 30 },
    { city: "Přerov", distance: 38 },
    { city: "Zlín", distance: 70 },
  ],
  Ostrava: [
    { city: "Olomouc", distance: 83 },
    { city: "Přerov", distance: 29 },
    { city: "Opava", distance: 38 },
    { city: "Frýdek-Místek", distance: 27 },
    { city: "Karviná", distance: 31 },
    { city: "Havířov", distance: 27 },
  ],
  Plzeň: [
    { city: "Cheb", distance: 112 },
    { city: "Karlovy Vary", distance: 60 },
    { city: "Písek", distance: 95 },
    { city: "Most", distance: 81 },
    { city: "Praha", distance: 93 },
  ],
  Liberec: [
    { city: "Česká Lípa", distance: 55 },
    { city: "Jablonec nad Nisou", distance: 23 },
    { city: "Mladá Boleslav", distance: 54 },
    { city: "Hradec Králové", distance: 92 },
  ],
  Olomouc: [
    { city: "Pardubice", distance: 101 },
    { city: "Prostějov", distance: 32 },
    { city: "Přerov", distance: 29 },
    { city: "Ostrava", distance: 83 },
    { city: "Frýdek-Místek", distance: 41 },
    { city: "Opava", distance: 60 },
  ],
  "České Budějovice": [
    { city: "Písek", distance: 60 },
    { city: "Tábor", distance: 67 },
    { city: "Jihlava", distance: 99 },
    { city: "Třebíč", distance: 76 },
  ],
  "Hradec Králové": [
    { city: "Pardubice", distance: 35 },
    { city: "Mladá Boleslav", distance: 69 },
    { city: "Liberec", distance: 92 },
  ],
  Pardubice: [
    { city: "Hradec Králové", distance: 35 },
    { city: "Kolín", distance: 74 },
    { city: "Olomouc", distance: 101 },
    { city: "Brno", distance: 104 },
  ],
  "Ústí nad Labem": [
    { city: "Praha", distance: 90 },
    { city: "Teplice", distance: 20 },
    { city: "Děčín", distance: 38 },
  ],
  Zlín: [
    { city: "Přerov", distance: 62 },
    { city: "Brno", distance: 70 },
  ],
  Havířov: [
    { city: "Frýdek-Místek", distance: 17 },
    { city: "Třinec", distance: 31 },
    { city: "Ostrava", distance: 31 },
    { city: "Karviná", distance: 24 },
  ],
  Kladno: [
    { city: "Praha", distance: 35 },
    { city: "Most", distance: 73 },
    { city: "Chomutov", distance: 74 },
  ],
  Most: [
    { city: "Kladno", distance: 73 },
    { city: "Chomutov", distance: 45 },
    { city: "Plzeň", distance: 81 },
    { city: "Teplice", distance: 31 },
  ],
  Opava: [
    { city: "Ostrava", distance: 29 },
    { city: "Olomouc", distance: 60 },
  ],
  Jihlava: [
    { city: "Znojmo", distance: 95 },
    { city: "Třebíč", distance: 50 },
    { city: "Brno", distance: 89 },
    { city: "Kolín", distance: 80 },
    { city: "Praha", distance: 110 },
    { city: "Tábor", distance: 104 },
    { city: "České Budějovice", distance: 99 },
  ],
  "Frýdek-Místek": [
    { city: "Olomouc", distance: 41 },
    { city: "Přerov", distance: 30 },
    { city: "Ostrava", distance: 27 },
    { city: "Havířov", distance: 17 },
    { city: "Třinec", distance: 25 },
  ],
  Teplice: [
    { city: "Ústí nad Labem", distance: 20 },
    { city: "Most", distance: 31 },
  ],
  Karviná: [
    { city: "Ostrava", distance: 31 },
    { city: "Havířov", distance: 24 },
    { city: "Třinec", distance: 36 },
  ],
  "Karlovy Vary": [
    { city: "Plzeň", distance: 60 },
    { city: "Cheb", distance: 45 },
    { city: "Praha", distance: 124 },
    { city: "Chomutov", distance: 70 },
  ],
  Chomutov: [
    { city: "Most", distance: 45 },
    { city: "Kladno", distance: 74 },
    { city: "Karlovy Vary", distance: 70 },
  ],
  Děčín: [
    { city: "Ústí nad Labem", distance: 38 },
    { city: "Česká Lípa", distance: 74 },
  ],
  "Mladá Boleslav": [
    { city: "Liberec", distance: 54 },
    { city: "Česká Lípa", distance: 60 },
    { city: "Hradec Králové", distance: 69 },
    { city: "Kolín", distance: 64 },
    { city: "Praha", distance: 64 },
  ],
  "Jablonec nad Nisou": [{ city: "Liberec", distance: 23 }],
  Prostějov: [
    { city: "Olomouc", distance: 60 },
    { city: "Brno", distance: 30 },
  ],
  Přerov: [
    { city: "Olomouc", distance: 29 },
    { city: "Brno", distance: 38 },
    { city: "Zlín", distance: 62 },
    { city: "Ostrava", distance: 40 },
    { city: "Frýdek-Místek", distance: 30 },
  ],
  "Česká Lípa": [
    { city: "Liberec", distance: 55 },
    { city: "Děčín", distance: 74 },
    { city: "Mladá Boleslav", distance: 60 },
    { city: "Praha", distance: 95 },
  ],
  Třebíč: [
    { city: "Brno", distance: 55 },
    { city: "Jihlava", distance: 50 },
    { city: "České Budějovice", distance: 80 },
  ],
  Tábor: [
    { city: "Praha", distance: 93 },
    { city: "Jihlava", distance: 104 },
    { city: "České Budějovice", distance: 67 },
    { city: "Písek", distance: 60 },
  ],
  Třinec: [
    { city: "Karviná", distance: 36 },
    { city: "Havířov", distance: 25 },
    { city: "Frýdek-Místek", distance: 30 },
  ],
  Znojmo: [
    { city: "Jihlava", distance: 95 },
    { city: "Brno", distance: 98 },
  ],
  Kolín: [
    { city: "Pardubice", distance: 74 },
    { city: "Mladá Boleslav", distance: 64 },
    { city: "Praha", distance: 67 },
    { city: "Jihlava", distance: 80 },
  ],
  Příbram: [
    { city: "Praha", distance: 55 },
    { city: "Písek", distance: 60 },
  ],
  Cheb: [
    { city: "Karlovy Vary", distance: 45 },
    { city: "Plzeň", distance: 112 },
  ],
  Písek: [
    { city: "České Budějovice", distance: 60 },
    { city: "Tábor", distance: 60 },
    { city: "Příbram", distance: 60 },
    { city: "Plzeň", distance: 95 },
  ],
};
