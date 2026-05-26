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
    tags: ['xP&A', 'Planering', 'FP&A', 'Power BI'],
    date: '2025.11.15',
    readTime: '3 min',
    author: 'Alexander Öhberg',
    title: 'xP&A – nästa steg efter FP&A för datadriven planering och styrning',
    body: 'xP&A, Extended Planning & Analysis, kopplar ihop ekonomi, sälj, HR och produktion i en gemensam planeringsprocess. Så här tar svenska företag första steget.',
    fullText: `På Kugghuset hjälper vi organisationer att fatta bättre beslut genom att skapa tydlighet i data. Just nu ser vi en tydlig trend växa fram inom planering och analys: xP&A, eller Extended Planning & Analysis. Det är ett sätt att gå från statiska årsbudgetar till en levande, kontinuerlig planering som speglar verksamheten i realtid – och vi tror att det är en av de viktigaste utvecklingarna för ekonomifunktionen de kommande åren.

## Vad är xP&A?

xP&A tar vid där traditionell budgetering och FP&A (Financial Planning & Analysis) slutar. Istället för att ekonomifunktionen ensam driver planeringen, kopplas data och prognoser från hela verksamheten samman – försäljning, HR, produktion, marknad och IT arbetar i samma modell. Resultatet är en sammanhängande och flexibel planeringsprocess som hela organisationen kan bidra till, och som CFO:n kan styra utifrån.

## Skillnaden mellan FP&A och xP&A

FP&A fokuserar i grunden på den finansiella planeringen: budget, prognos, månadsuppföljning och rapportering. xP&A breddar perspektivet och knyter ihop den finansiella planeringen med operativa planer från andra avdelningar. När säljprognosen uppdateras i CRM:et, justeras automatiskt produktionsplanen, bemanningsbehovet och likviditetsprognosen. Det är samma logik som FP&A – men med fler datakällor, snabbare cykler och bredare ägarskap.

## Varför växer intresset för xP&A?

- **Snabbare och mer träffsäkra beslutsunderlag** – när data från sälj, HR och produktion ligger i samma modell behöver man inte vänta på månadsbokslutet för att se vart verksamheten är på väg.
- **Datadriven samverkan över avdelningsgränser** – alla planerar mot samma siffror, vilket minskar friktion och tolkningsutrymme mellan avdelningar.
- **Förmåga att agera proaktivt genom scenarioplanering** – det blir möjligt att simulera "tänk om"-scenarier på minuter istället för veckor.
- **Effektivare processer och mer tid för analys** – mindre tid läggs på att samla in och stämma av data, mer tid på att förstå vad den säger.

## Vad krävs tekniskt?

För att xP&A ska fungera i praktiken behövs tre saker: en gemensam datagrund (ofta ett datavarulager eller en lakehouse-arkitektur, t.ex. i Microsoft Fabric), integrationer mellan affärssystem, CRM, HR-system och planeringsverktyg, samt ett gränssnitt där olika roller kan arbeta med planer och prognoser – exempelvis Power BI kombinerat med ett dedikerat planeringsverktyg.

Mycket av det vi redan bygger åt våra kunder – tvärfunktionella datamodeller, automatiserade flöden och flexibla rapporter i Power BI – är just de byggstenar som xP&A vilar på. Vi följer utvecklingen nära och ser stor potential i hur konceptet kan stärka datadrivna organisationer.

## Första steget mot xP&A

Du behöver inte byta hela systemlandskapet för att börja. De flesta organisationer kommer långt genom att först samla data från ekonomi och sälj i en gemensam modell, automatisera prognoser och successivt bjuda in fler avdelningar i planeringen. Det är ett evolutionärt steg snarare än ett revolutionärt – och det är där vi gärna kommer in.

## Vill ni vara med i samtalet?

Jag heter Alexander Öhberg och hjälper gärna er att utforska hur xP&A kan se ut i just er organisation. Boka en kostnadsfri BI-timme så pratar vi om var ni står idag och vart ni vill.

[**Boka en gratis BI-timme →**](/en-timme-gratis-bikonsultation)`,
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
