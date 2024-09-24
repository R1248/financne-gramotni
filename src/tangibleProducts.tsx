//náklady doplnit
//vnitřní hodnota nemovitosti, člověk si sám vybere, za kolik prodá, podle toho, jak moc se liší od vnitřní hodnoty trvá, než si někdo koupí
//ai fotky

// Efektivita (kwh/m^2) A=50, B=85, C=120, D=155, E=190, F=220, G=250
// cena za energii 4 Kč/kWh
// cena energie = Plocha * Efektivita * 4

export const realEstateOffers = [
  {
    locality: "Praha 1",
    price: 14760000,
    intrinsicValue: 15200000,
    rent: 27500,
    yearBuilt: 1969,
    rooms: 3,
    area: 95,
    type: "Flat",
    features: ["balcony"],
    localityBonus: 10,
    energyEfficiency: "F",
    description:
      "Starší byt ve třetím patře v centru prahy s výhledem na Vltavu.",
  },
  {
    locality: "Praha 1",
    price: 41500000,
    intrinsicValue: 42100000,
    rent: 71500,
    yearBuilt: 2019,
    rooms: 6,
    area: 245,
    type: "Flat",
    features: ["balcony", "garage"],
    localityBonus: 10,
    energyEfficiency: "A",
    description: "Moderní luxusní byt s výhledem na historické centrum Prahy",
  },
  {
    locality: "Praha 2",
    price: 9500000,
    intrinsicValue: 9650000,
    rent: 19000,
    yearBuilt: 1946,
    rooms: 2,
    area: 68,
    type: "Flat",
    features: [],
    localityBonus: 10,
    energyEfficiency: "G",
    description: "Starší byt v centru Prahy s výhledem na park Folimanka.",
  },
  {
    locality: "Praha 5",
    price: 1150000,
    intrinsicValue: 11000000,
    rent: 23000,
    yearBuilt: 2005,
    rooms: 2,
    area: 75,
    type: "Flat",
    features: ["balcony"],
    localityBonus: 10,
    energyEfficiency: "C",
    description:
      "Byt s balkonem v klidné části Prahy 5, blízko parku Ladronka s dobře dostupnou MHD.",
  },
  {
    locality: "Praha 8",
    price: 7500000,
    intrinsicValue: 6700000,
    rent: 16000,
    yearBuilt: 1984,
    rooms: 1,
    area: 45,
    type: "Flat",
    features: ["balcony"],
    localityBonus: 10,
    energyEfficiency: "E",
    description:
      "Menší byt ve čtvrtém patře v širším centru Prahy s dobrou dostupností MHD.",
  },
  {
    locality: "Praha 9",
    price: 12450000,
    intrinsicValue: 12600000,
    rent: 25000,
    yearBuilt: 1996,
    rooms: 3,
    area: 87,
    type: "Flat",
    features: ["garage"],
    localityBonus: 9,
    energyEfficiency: "D",
    description:
      "Byt s garáží v klidné části Prahy 9, blízko parku Podviní a zeleně.",
  },

  {
    locality: "Brno - Přízřenice",
    price: 39000000,
    intrinsicValue: 46000000,
    rent: 54000,
    yearBuilt: 2010,
    rooms: 7,
    area: 480,
    type: "House",
    gardenArea: 2300,
    features: ["garage", "garden", "pool"],
    localityBonus: 8,
    energyEfficiency: "B",
    description:
      "Moderní dvoupodlažní dům s bazénem, garáží a zahradou v Brně-Přízřenicích.",
  },
  {
    locality: "Brno - Líšeň",
    price: 17000000,
    intrinsicValue: 13500000,
    rent: 17000,
    yearBuilt: 1975,
    rooms: 4,
    area: 105,
    type: "House",
    gardenArea: 450,
    features: ["garage", "garden"],
    localityBonus: 8,
    energyEfficiency: "D",
    description: "Rodinný dům s garáží a zahradou v klidné části Brna-Líšně.",
  },
  {
    locality: "Brno - Královo Pole",
    price: 10590000,
    intrinsicValue: 11220000,
    rent: 19000,
    yearBuilt: 2022,
    rooms: 3,
    area: 93,
    type: "Flat",
    features: [],
    localityBonus: 9,
    energyEfficiency: "A",
    description:
      "Novostaavba bytu v Brně-Králově Poli v pátém patře bytového domu s výhledem na park",
  },
  {
    locality: "Brno - střed",
    price: 8900000,
    intrinsicValue: 8700000,
    rent: 18000,
    yearBuilt: 1985,
    rooms: 2,
    area: 72,
    type: "Flat",
    features: ["balcony"],
    localityBonus: 9,
    energyEfficiency: "C",
    description:
      "Byt s balkonem v centru Brna s balkonem ve druhém patře v historickém centru Brna.",
  },

  {
    locality: "Ostrava",
    price: 4520000,
    intrinsicValue: 4100000,
    rent: 14000,
    yearBuilt: 1974,
    rooms: 3,
    area: 68,
    type: "Flat",
    features: [],
    localityBonus: 6,
    energyEfficiency: "D",
    description:
      "Byt v Ostravě ve třetím patře v panelovém domě s rozumnou dostupností do centra.",
  },
  {
    locality: "Ostrava",
    price: 2650000,
    intrinsicValue: 2800000,
    rent: 10500,
    yearBuilt: 1982,
    rooms: 2,
    area: 54,
    type: "Flat",
    features: ["balcony"],
    localityBonus: 5,
    energyEfficiency: "E",
    description:
      "Byt v Ostravě v klidné části Poruby, s balkonem a blízkostí zeleně.",
  },
  {
    locality: "Ostrava",
    price: 4920000,
    intrinsicValue: 4900000,
    rent: 14500,
    yearBuilt: 1999,
    rooms: 3,
    area: 85,
    type: "Flat",
    features: ["garage"],
    localityBonus: 6,
    energyEfficiency: "C",
    description: "Prostorný byt v Ostravě-Jihu s garáží a výhledem na město.",
  },

  {
    locality: "Plzeň",
    price: 7250000,
    intrinsicValue: 7400000,
    rent: 14000,
    yearBuilt: 1989,
    rooms: 3,
    area: 82,
    type: "Flat",
    features: ["balcony"],
    localityBonus: 7,
    energyEfficiency: "C",
    description:
      "Třípokojový byt s balkonem v širším centru Plzně, blízko Boleveckého rybníka.",
  },
  {
    locality: "Plzeň",
    price: 10450000,
    intrinsicValue: 10900000,
    rent: 18000,
    yearBuilt: 2005,
    rooms: 5,
    area: 150,
    type: "House",
    gardenArea: 650,
    features: ["garage", "garden"],
    localityBonus: 7,
    energyEfficiency: "B",
    description:
      "Moderní rodinný dům s garáží a zahradou v okrajové části Plzně.",
  },
  {
    locality: "Liberec",
    price: 6000000,
    intrinsicValue: 5800000,
    rent: 11500,
    yearBuilt: 1980,
    rooms: 2,
    area: 60,
    type: "Flat",
    features: [],
    localityBonus: 5,
    energyEfficiency: "D",
    description: "Byt v panelovém domě v klidné části Liberce, blízko Ještědu.",
  },
  {
    locality: "Liberec",
    price: 12900000,
    intrinsicValue: 13450000,
    rent: 19000,
    yearBuilt: 2015,
    rooms: 4,
    area: 180,
    type: "House",
    gardenArea: 800,
    features: ["garage", "garden"],
    localityBonus: 6,
    energyEfficiency: "A",
    description:
      "Rodinný dům s velkou zahradou a garáží v rezidenční čtvrti Liberce.",
  },
  {
    locality: "Olomouc",
    price: 5500000,
    intrinsicValue: 5300000,
    rent: 11000,
    yearBuilt: 1995,
    rooms: 2,
    area: 58,
    type: "Flat",
    features: ["balcony"],
    localityBonus: 6,
    energyEfficiency: "C",
    description: "Byt s balkonem v širším centru Olomouce, blízko parku.",
  },
  {
    locality: "Olomouc",
    price: 8700000,
    intrinsicValue: 8800000,
    rent: 17500,
    yearBuilt: 2008,
    rooms: 4,
    area: 125,
    type: "House",
    gardenArea: 400,
    features: ["garage", "garden"],
    localityBonus: 6,
    energyEfficiency: "B",
    description: "Rodinný dům s garáží a zahradou v klidné části Olomouce.",
  },
  {
    locality: "Hradec Králové",
    price: 7900000,
    intrinsicValue: 8050000,
    rent: 14500,
    yearBuilt: 1990,
    rooms: 3,
    area: 90,
    type: "Flat",
    features: ["balcony"],
    localityBonus: 7,
    energyEfficiency: "C",
    description:
      "Byt s balkonem a výhledem na řeku v klidné části Hradce Králové.",
  },
  {
    locality: "České Budějovice",
    price: 6800000,
    intrinsicValue: 6900000,
    rent: 14000,
    yearBuilt: 2000,
    rooms: 3,
    area: 85,
    type: "Flat",
    features: ["balcony"],
    localityBonus: 4,
    energyEfficiency: "C",
    description: "Prostorný byt s balkonem v klidné části Českých Budějovic.",
  },
  {
    locality: "Pardubice",
    price: 7200000,
    intrinsicValue: 7300000,
    rent: 15500,
    yearBuilt: 2010,
    rooms: 4,
    area: 100,
    type: "Flat",
    features: ["balcony", "garage"],
    localityBonus: 6,
    energyEfficiency: "B",
    description: "Moderní byt s garáží a balkonem v centru Pardubic.",
  },
  {
    locality: "Ústí nad Labem",
    price: 3800000,
    intrinsicValue: 3650000,
    rent: 9000,
    yearBuilt: 1978,
    rooms: 2,
    area: 55,
    type: "Flat",
    features: ["balcony"],
    localityBonus: 3,
    energyEfficiency: "E",
    description: "Byt s balkonem v panelovém domě s výhledem na centrum města.",
  },
  {
    locality: "Zlín",
    price: 5200000,
    intrinsicValue: 5350000,
    rent: 11000,
    yearBuilt: 1995,
    rooms: 3,
    area: 75,
    type: "Flat",
    features: ["garage"],
    localityBonus: 5,
    energyEfficiency: "C",
    description:
      "Prostorný byt v klidné části Zlína, s garáží a dobrou dostupností MHD.",
  },
  {
    locality: "Havířov",
    price: 2900000,
    intrinsicValue: 2800000,
    rent: 8000,
    yearBuilt: 1985,
    rooms: 2,
    area: 48,
    type: "Flat",
    features: ["balcony"],
    localityBonus: 2,
    energyEfficiency: "D",
    description: "Malý byt v centru Havířova, s výhledem na městský park.",
  },
  {
    locality: "Kladno",
    price: 4600000,
    intrinsicValue: 4500000,
    rent: 10000,
    yearBuilt: 1990,
    rooms: 3,
    area: 68,
    type: "Flat",
    features: ["balcony"],
    localityBonus: 4,
    energyEfficiency: "C",
    description:
      "Byt s balkonem v klidné části Kladna, blízko přírody a sportovního areálu.",
  },
  {
    locality: "Most",
    price: 3200000,
    intrinsicValue: 3100000,
    rent: 8500,
    yearBuilt: 1980,
    rooms: 3,
    area: 70,
    type: "Flat",
    features: [],
    localityBonus: 2,
    energyEfficiency: "D",
    description:
      "Prostorný byt v panelovém domě v Mostě, s dobrou dostupností do centra.",
  },
  {
    locality: "Opava",
    price: 4500000,
    intrinsicValue: 4400000,
    rent: 9500,
    yearBuilt: 1992,
    rooms: 3,
    area: 68,
    type: "Flat",
    features: ["balcony"],
    localityBonus: 4,
    energyEfficiency: "C",
    description:
      "Byt s balkonem v širším centru Opavy, blízko školy a obchodů.",
  },
  {
    locality: "Jihlava",
    price: 4200000,
    intrinsicValue: 4300000,
    rent: 9500,
    yearBuilt: 1987,
    rooms: 3,
    area: 65,
    type: "Flat",
    features: ["balcony"],
    localityBonus: 3,
    energyEfficiency: "C",
    description: "Byt s balkonem v centru Jihlavy, blízko parku a obchodu.",
  },
  {
    locality: "Frýdek-Místek",
    price: 3850000,
    intrinsicValue: 3700000,
    rent: 9000,
    yearBuilt: 1984,
    rooms: 2,
    area: 60,
    type: "Flat",
    features: [],
    localityBonus: 4,
    energyEfficiency: "D",
    description:
      "Byt v centru Frýdku-Místku, s blízkou dostupností do obchodních center.",
  },
  {
    locality: "Teplice",
    price: 3100000,
    intrinsicValue: 3000000,
    rent: 8000,
    yearBuilt: 1979,
    rooms: 2,
    area: 58,
    type: "Flat",
    features: ["balcony"],
    localityBonus: 3,
    energyEfficiency: "E",
    description:
      "Byt s balkonem v klidné části Teplic, s výhledem na okolní hory.",
  },
  {
    locality: "Karviná",
    price: 2800000,
    intrinsicValue: 2750000,
    rent: 7500,
    yearBuilt: 1982,
    rooms: 2,
    area: 50,
    type: "Flat",
    features: ["balcony"],
    localityBonus: 2,
    energyEfficiency: "D",
    description:
      "Byt v panelovém domě v Karviné, blízko školy a obchodního centra.",
  },
  {
    locality: "Karlovy Vary",
    price: 5100000,
    intrinsicValue: 5200000,
    rent: 12000,
    yearBuilt: 1990,
    rooms: 3,
    area: 72,
    type: "Flat",
    features: ["balcony"],
    localityBonus: 5,
    energyEfficiency: "C",
    description:
      "Prostorný byt v Karlových Varech, s výhledem na lázeňskou část města.",
  },
  {
    locality: "Chomutov",
    price: 3300000,
    intrinsicValue: 3200000,
    rent: 8500,
    yearBuilt: 1985,
    rooms: 3,
    area: 64,
    type: "Flat",
    features: [],
    localityBonus: 3,
    energyEfficiency: "D",
    description:
      "Byt v Chomutově v klidné části města, blízko parku a nákupního centra.",
  },
  {
    locality: "Děčín",
    price: 3600000,
    intrinsicValue: 3500000,
    rent: 9000,
    yearBuilt: 1980,
    rooms: 2,
    area: 62,
    type: "Flat",
    features: ["balcony"],
    localityBonus: 3,
    energyEfficiency: "D",
    description:
      "Byt s balkonem v Děčíně, s dobrou dostupností do centra a přírody.",
  },
  {
    locality: "Mladá Boleslav",
    price: 5200000,
    intrinsicValue: 5100000,
    rent: 11500,
    yearBuilt: 1995,
    rooms: 3,
    area: 68,
    type: "Flat",
    features: [],
    localityBonus: 5,
    energyEfficiency: "C",
    description:
      "Byt v centru Mladé Boleslavi, s blízkou dostupností do průmyslové zóny.",
  },
  {
    locality: "Jablonec nad Nisou",
    price: 3900000,
    intrinsicValue: 3800000,
    rent: 9000,
    yearBuilt: 1990,
    rooms: 2,
    area: 60,
    type: "Flat",
    features: ["balcony"],
    localityBonus: 3,
    energyEfficiency: "D",
    description:
      "Byt s balkonem v klidné části Jablonce nad Nisou, blízko lesa.",
  },
  {
    locality: "Prostějov",
    price: 4000000,
    intrinsicValue: 3900000,
    rent: 9500,
    yearBuilt: 1985,
    rooms: 3,
    area: 66,
    type: "Flat",
    features: [],
    localityBonus: 4,
    energyEfficiency: "C",
    description:
      "Byt v Prostějově s dobrou dostupností do centra a blízkostí přírody.",
  },
  {
    locality: "Přerov",
    price: 3750000,
    intrinsicValue: 3650000,
    rent: 9000,
    yearBuilt: 1980,
    rooms: 2,
    area: 58,
    type: "Flat",
    features: ["balcony"],
    localityBonus: 3,
    energyEfficiency: "D",
    description: "Byt v Přerově s balkonem a výhledem na městský park.",
  },
  {
    locality: "Česká Lípa",
    price: 3500000,
    intrinsicValue: 3400000,
    rent: 8500,
    yearBuilt: 1980,
    rooms: 2,
    area: 60,
    type: "Flat",
    features: ["balcony"],
    localityBonus: 3,
    energyEfficiency: "D",
    description:
      "Byt v České Lípě, blízko školy a obchodního centra, s výhledem na město.",
  },
  {
    locality: "Třebíč",
    price: 3600000,
    intrinsicValue: 3500000,
    rent: 8800,
    yearBuilt: 1982,
    rooms: 2,
    area: 60,
    type: "Flat",
    features: ["balcony"],
    localityBonus: 3,
    energyEfficiency: "D",
    description:
      "Byt s balkonem v klidné části Třebíče, s blízkostí ke školám a obchodům.",
  },
  {
    locality: "Tábor",
    price: 3700000,
    intrinsicValue: 3600000,
    rent: 9200,
    yearBuilt: 1987,
    rooms: 3,
    area: 70,
    type: "Flat",
    features: ["balcony"],
    localityBonus: 4,
    energyEfficiency: "C",
    description:
      "Byt s balkonem v centru Tábora, blízko historických památek a parku.",
  },
  {
    locality: "Třinec",
    price: 3400000,
    intrinsicValue: 3300000,
    rent: 8500,
    yearBuilt: 1985,
    rooms: 2,
    area: 55,
    type: "Flat",
    features: ["balcony"],
    localityBonus: 3,
    energyEfficiency: "D",
    description:
      "Byt s balkonem v Třinci, v klidné lokalitě s dobrou dostupností do centra.",
  },
  {
    locality: "Znojmo",
    price: 4200000,
    intrinsicValue: 4100000,
    rent: 9500,
    yearBuilt: 1990,
    rooms: 3,
    area: 70,
    type: "Flat",
    features: ["balcony"],
    localityBonus: 4,
    energyEfficiency: "C",
    description:
      "Byt s balkonem v Znojmě, s krásným výhledem na město a blízkou dostupností do historických částí.",
  },
  {
    locality: "Kolín",
    price: 4000000,
    intrinsicValue: 3900000,
    rent: 9000,
    yearBuilt: 1985,
    rooms: 3,
    area: 65,
    type: "Flat",
    features: ["balcony"],
    localityBonus: 4,
    energyEfficiency: "C",
    description:
      "Byt s balkonem v Kolíně, blízko centra a obchodních center, v klidné části města.",
  },
  {
    locality: "Příbram",
    price: 3500000,
    intrinsicValue: 3400000,
    rent: 8500,
    yearBuilt: 1983,
    rooms: 2,
    area: 55,
    type: "Flat",
    features: ["balcony"],
    localityBonus: 3,
    energyEfficiency: "D",
    description:
      "Byt v Příbrami, s balkonem a výhledem na okolní přírodu, v klidné lokalitě.",
  },
  {
    locality: "Cheb",
    price: 3000000,
    intrinsicValue: 2900000,
    rent: 8000,
    yearBuilt: 1980,
    rooms: 2,
    area: 50,
    type: "Flat",
    features: ["balcony"],
    localityBonus: 2,
    energyEfficiency: "D",
    description:
      "Byt v Chebu v panelovém domě, s balkonem a blízkým přístupem k přírodě a historickému centru.",
  },
  {
    locality: "Písek",
    price: 3700000,
    intrinsicValue: 3600000,
    rent: 9000,
    yearBuilt: 1986,
    rooms: 3,
    area: 65,
    type: "Flat",
    features: ["balcony"],
    localityBonus: 4,
    energyEfficiency: "C",
    description:
      "Byt s balkonem v Písku, s dobrou dostupností do centra a blízkostí k přírodě.",
  },
];

export const carOffers = [
  {
    make: "Škoda",
    model: "Octavia",
    price: 450000, // CZK
    year: 2018,
    mileage: 85000, // in kilometers
    isNew: false,
    maxVelocity: 210, // in km/h
    fuelConsumption: 5.5, // liters per 100 km
    enginePower: 110, // in kW
    fuelType: "Diesel",
    transmission: "Manual",
    features: ["Air conditioning", "Bluetooth", "Parking sensors"],
  },
  {
    make: "Volkswagen",
    model: "Golf",
    price: 380000, // CZK
    year: 2017,
    mileage: 92000, // in kilometers
    isNew: false,
    maxVelocity: 220, // in km/h
    fuelConsumption: 6.0, // liters per 100 km
    enginePower: 96, // in kW
    fuelType: "Petrol",
    transmission: "Automatic",
    features: ["Cruise control", "Heated seats", "Touchscreen"],
  },
  {
    make: "BMW",
    model: "320i",
    price: 950000, // CZK
    year: 2020,
    mileage: 30000, // in kilometers
    isNew: false,
    maxVelocity: 235, // in km/h
    fuelConsumption: 6.4, // liters per 100 km
    enginePower: 135, // in kW
    fuelType: "Petrol",
    transmission: "Automatic",
    features: ["Leather interior", "Navigation", "Parking sensors"],
  },
  {
    make: "Audi",
    model: "A6",
    price: 1200000, // CZK
    year: 2021,
    isNew: true,
    maxVelocity: 250, // in km/h
    fuelConsumption: 5.8, // liters per 100 km
    enginePower: 150, // in kW
    fuelType: "Diesel",
    transmission: "Automatic",
    features: ["All-wheel drive", "Adaptive cruise control", "Sunroof"],
  },
  {
    make: "Škoda",
    model: "Superb",
    price: 750000, // CZK
    year: 2019,
    mileage: 50000, // in kilometers
    isNew: false,
    maxVelocity: 240, // in km/h
    fuelConsumption: 6.0, // liters per 100 km
    enginePower: 140, // in kW
    fuelType: "Petrol",
    transmission: "Automatic",
    features: ["Heated seats", "Parking sensors", "Apple CarPlay"],
  },
  {
    make: "Hyundai",
    model: "Tucson",
    price: 520000, // CZK
    year: 2018,
    mileage: 78000, // in kilometers
    isNew: false,
    maxVelocity: 195, // in km/h
    fuelConsumption: 7.2, // liters per 100 km
    enginePower: 85, // in kW
    fuelType: "Petrol",
    transmission: "Manual",
    features: ["4x4", "Air conditioning", "Rear camera"],
  },
  {
    make: "Ford",
    model: "Focus",
    price: 350000, // CZK
    year: 2017,
    mileage: 95000, // in kilometers
    isNew: false,
    maxVelocity: 205, // in km/h
    fuelConsumption: 5.9, // liters per 100 km
    enginePower: 92, // in kW
    fuelType: "Diesel",
    transmission: "Manual",
    features: ["Bluetooth", "Heated seats", "Parking sensors"],
  },
  {
    make: "Tesla",
    model: "Model 3",
    price: 1400000, // CZK
    year: 2022,
    isNew: true,
    maxVelocity: 261, // in km/h
    fuelConsumption: 0, // electric, kWh/km
    enginePower: 283, // in kW
    fuelType: "Electric",
    transmission: "Automatic",
    features: ["Autopilot", "Panoramic roof", "Navigation"],
  },
  {
    make: "Mercedes-Benz",
    model: "E-Class",
    price: 1150000, // CZK
    year: 2020,
    mileage: 25000, // in kilometers
    isNew: false,
    maxVelocity: 240, // in km/h
    fuelConsumption: 5.5, // liters per 100 km
    enginePower: 150, // in kW
    fuelType: "Diesel",
    transmission: "Automatic",
    features: ["Leather interior", "Sunroof", "All-wheel drive"],
  },
  {
    make: "Škoda",
    model: "Kodiaq",
    price: 850000, // CZK
    year: 2021,
    mileage: 30000, // in kilometers
    isNew: false,
    maxVelocity: 210, // in km/h
    fuelConsumption: 6.5, // liters per 100 km
    enginePower: 132, // in kW
    fuelType: "Diesel",
    transmission: "Automatic",
    features: ["4x4", "Heated seats", "Parking sensors"],
  },
  {
    make: "Peugeot",
    model: "3008",
    price: 480000, // CZK
    year: 2019,
    mileage: 67000, // in kilometers
    isNew: false,
    maxVelocity: 200, // in km/h
    fuelConsumption: 6.2, // liters per 100 km
    enginePower: 96, // in kW
    fuelType: "Petrol",
    transmission: "Automatic",
    features: ["Cruise control", "Rear camera", "Bluetooth"],
  },
  {
    make: "Honda",
    model: "Civic",
    price: 420000, // CZK
    year: 2018,
    mileage: 84000, // in kilometers
    isNew: false,
    maxVelocity: 210, // in km/h
    fuelConsumption: 5.8, // liters per 100 km
    enginePower: 95, // in kW
    fuelType: "Petrol",
    transmission: "Manual",
    features: ["Air conditioning", "Touchscreen", "Cruise control"],
  },
  {
    make: "Toyota",
    model: "Corolla",
    price: 460000, // CZK
    year: 2019,
    mileage: 55000, // in kilometers
    isNew: false,
    maxVelocity: 180, // in km/h
    fuelConsumption: 4.8, // liters per 100 km
    enginePower: 85, // in kW
    fuelType: "Hybrid",
    transmission: "Automatic",
    features: ["Rear camera", "Lane assist", "Navigation"],
  },
  {
    make: "Kia",
    model: "Sportage",
    price: 600000, // CZK
    year: 2020,
    mileage: 35000, // in kilometers
    isNew: false,
    maxVelocity: 195, // in km/h
    fuelConsumption: 6.7, // liters per 100 km
    enginePower: 100, // in kW
    fuelType: "Diesel",
    transmission: "Automatic",
    features: ["4x4", "Parking sensors", "Heated seats"],
  },
  {
    make: "Volkswagen",
    model: "Tiguan",
    price: 850000, // CZK
    year: 2021,
    mileage: 25000, // in kilometers
    isNew: false,
    maxVelocity: 210, // in km/h
    fuelConsumption: 6.4, // liters per 100 km
    enginePower: 125, // in kW
    fuelType: "Diesel",
    transmission: "Automatic",
    features: ["All-wheel drive", "Adaptive cruise control", "Panoramic roof"],
  },
];
