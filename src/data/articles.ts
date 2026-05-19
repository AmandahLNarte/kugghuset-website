export interface Article {
  nr: number;
  slug: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  author: string;
  title: string;
  body: string;
  fullText: string;
  image?: string;
  imageAlt?: string;
  gradient: string;
  gridLines: boolean;
}

export const articles: Article[] = [
  {
    nr: 119,
    slug: '119-xpna-extended-planning-analysis',
    category: 'Strategi',
    tags: ['xP&A', 'Planering'],
    date: '2025.11.15',
    readTime: '4 min',
    author: 'Alexander Öhberg',
    title: 'xP&A, eller Extended Planning & Analysis – nästa steg för planering och styrning?',
    body: 'xP&A tar vid där traditionell budgetering och FP&A slutar. Istället för att ekonomifunktionen ensam driver planeringen, integreras data och prognoser från hela verksamheten – försäljning, HR, produktion, marknad och IT.',
    fullText: `På Kugghuset AB hjälper vi organisationer att fatta bättre beslut genom att skapa tydlighet i data. Nu ser vi en tydlig trend växa fram inom planering och analys – xP&A, eller Extended Planning & Analysis.

xP&A tar vid där traditionell budgetering och FP&A slutar. Istället för att ekonomifunktionen ensam driver planeringen, integreras data och prognoser från hela verksamheten – försäljning, HR, produktion, marknad och IT. Resultatet blir en sammanhängande och flexibel planeringsprocess som hela organisationen kan arbeta med.

Det handlar om att gå från statiska årsbudgetar till en levande, kontinuerlig planering som speglar verkligheten i realtid.

Varför växer intresset för xP&A?
- Snabbare och mer träffsäkra beslutsunderlag
- Datadriven samverkan över avdelningsgränser
- Förmåga att agera proaktivt genom scenarioplanering
- Effektivare processer och mer tid för analys

Vi på Kugghuset har ännu inte genomfört xP&A-projekt – men vi är nyfikna på utvecklingen och ser stor potential i hur konceptet kan stärka datadrivna organisationer.

Vi vill lära mer, dela insikter och utforska hur svenska företag kan ta sina första steg mot mer adaptiv planering och styrning.

Jag heter Alexander Öhberg 🧙🏻‍♂️ och vill ni vara med i samtalet? Hör gärna av er – vi är redo att utforska framtiden för planering tillsammans.`,
    image: '/images/artiklar/xp&a_analys.jpg',
    imageAlt: 'xP&A – Extended Planning & Analysis',
    gradient: 'radial-gradient(ellipse 90% 80% at 70% 30%, #3a2a5a 0%, #1e1535 55%, #080510 100%)',
    gridLines: false,
  },
  {
    nr: 118,
    slug: '118-historisk-orderstock',
    category: 'Analys',
    tags: ['SQL Server', 'Power BI'],
    date: '2025.02.27',
    readTime: '5 min',
    author: 'Elis Lindström',
    title: 'Att återskapa historisk orderstock – en ekonomisk detektivhistoria',
    body: 'Att få fram rapporter över historisk orderstock kan vara en rejäl utmaning. De flesta operativa system sparar bara den aktuella statusen, vilket innebär att äldre orderdata kan gå upp i rök om det inte finns en arkiveringslösning eller någon form av loggning av förändringar.',
    fullText: `Att få fram rapporter över historisk orderstock kan vara en rejäl utmaning. De flesta operativa system sparar bara den aktuella statusen, vilket innebär att äldre orderdata kan gå upp i rök om det inte finns en arkiveringslösning eller någon form av loggning av förändringar. Finns inget av detta på plats? Då har vi en utmaning att lösa.

Det var precis den sitsen UPN befann sig i. Dessutom hade datahanteringen och rapporteringsstrukturen förändrats över tid, vilket gjorde det ännu knepigare att hitta en konsekvent och hållbar lösning.

Först var vi osäkra på om det ens var möjligt att rekonstruera en historisk orderstock baserat på befintliga data. Vi utvärderade en arkiveringsmetod via SQL Server, men den gav oss inte tillgång till tidigare historiska orderstockar.

Det var som att lösa ett pussel där bitarna var utspridda, delvis gömda och ibland saknades helt. Vi dök djupt ner i kundens SQL Server och stötte på en labyrint av rådata, fragmenterade parametrar och logiker som inte alltid hängde ihop. Genom att kombinera avancerad dataanalys med kreativ problemlösning lyckades vi inte bara kartlägga och validera historiska ordrar – vi byggde en robust metod som nu gör det möjligt att med precision visa aktiva ordrar vid vald tidpunkt. Det krävdes både teknisk fingertoppskänsla och en envis beslutsamhet att inte ge upp förrän varje detalj satt på plats.

Med lite datamagi genererade vi snyggt strukturerade historiska orderstock-tabeller och laddade in dem i företagets datalager.

Sedan fick Power BI ta vid och visualisera siffrorna i interaktiva rapporter – precis det ekonomichefen Johan Englund efterfrågade.

Resultatet? En flexibel och kraftfull metod för att analysera historisk orderstock, identifiera trender och optimera verksamheten.

SQL Server (trots sitt något daterade gränssnitt) och Power BI är en kraftfull duo i jakten på den förlorade orderstocken.

Abrakadabra!

/Elis`,
    image: '/images/artiklar/historisk_orderstock.jpg',
    imageAlt: 'Historisk orderstock – SQL Server och Power BI',
    gradient: 'radial-gradient(ellipse 70% 80% at 30% 55%, #4C7BC0 0%, #1a3a7a 45%, #060c1e 100%)',
    gridLines: false,
  },
];
