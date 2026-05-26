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
    author: 'Tobias Törnblom',
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

För att xP&A ska fungera i praktiken behövs tre saker: en gemensam datagrund (ofta ett datavarulager eller en lakehouse-arkitektur, t.ex. i Azure, SQL eller Snowflake), integrationer mellan affärssystem, CRM, HR-system och planeringsverktyg, samt ett gränssnitt där olika roller kan arbeta med planer och prognoser – exempelvis Power BI kombinerat med ett dedikerat planeringsverktyg.

Mycket av det vi redan bygger åt våra kunder – tvärfunktionella datamodeller, automatiserade flöden och flexibla rapporter i Power BI – är just de byggstenar som xP&A vilar på. Vi följer utvecklingen nära och ser stor potential i hur konceptet kan stärka datadrivna organisationer.

## Första steget mot xP&A

Du behöver inte byta hela systemlandskapet för att börja. De flesta organisationer kommer långt genom att först samla data från ekonomi och sälj i en gemensam modell, automatisera prognoser och successivt bjuda in fler avdelningar i planeringen. Det är ett evolutionärt steg snarare än ett revolutionärt – och det är där vi gärna kommer in.

## Vill ni vara med i samtalet?

Jag heter Tobias Törnblom och hjälper gärna er att utforska hur xP&A kan se ut i just er organisation. Hör av dig så pratar vi om var ni står idag och vart ni vill.

[**Kontakta oss →**](/kontakt)`,
    image: '/images/artiklar/xp&a_analys.jpg',
    imageAlt: 'xP&A – Extended Planning & Analysis',
    gradient: 'radial-gradient(ellipse 90% 80% at 70% 30%, #3a2a5a 0%, #1e1535 55%, #080510 100%)',
    gridLines: false,
  },
  {
    nr: 121,
    slug: '121-skalbar-bi-losning',
    category: 'Strategi',
    tags: ['BI-arkitektur', 'Skalbarhet', 'Power BI', 'CSRD'],
    date: '2026.05.26',
    readTime: '5 min',
    author: 'Alexander Öhberg',
    title: 'Skalbar BI-lösning: Vad det betyder – och hur ni vet att er plattform håller',
    body: 'Begreppen "skalbar" och "robust" används flitigt när det pratas om Business Intelligence. Men vad betyder det egentligen i praktiken – och hur vet ni om er nuvarande BI-lösning faktiskt klarar att växa med verksamheten?',
    fullText: `> **Begreppen "skalbar" och "robust" används flitigt när det pratas om Business Intelligence. Men vad betyder det egentligen i praktiken – och hur vet ni om er nuvarande BI-lösning faktiskt klarar att växa med verksamheten? Den här guiden förklarar vad skalbarhet innebär, varför det är avgörande, och ger fem konkreta testfrågor ni kan ställa till er egen plattform redan idag.**

## Vad är en skalbar BI-lösning?

En skalbar BI-lösning är en lösning som kan hantera **ökad belastning, mer data, fler användare och fler behov – utan att behöva byggas om från grunden**.

Enkelt uttryckt: en skalbar lösning fungerar lika bra när organisationen är liten som när den har växt. Den följer med verksamheten i stället för att hindra den.

För ett konkret BI-system innebär skalbarhet att:
- Ni kan koppla på fler datakällor utan att hela datamodellen måste göras om
- Ni kan utöka antalet rapporter och dashboards utan att prestandan rasar
- Ni kan lägga till nya KPI:er och affärsområden på ett kontrollerat sätt
- Ni kan ändra logik och beräkningar utan att "allting går sönder"
- Systemet hanterar ökade datavolymer utan att bli långsamt

När en BI-lösning inte är skalbar leder det ofta till teknisk skuld, långa utvecklingstider, dubbelt arbete och låg datakvalitet – kostnader som sällan syns i den initiala investeringen, men som blir tydliga inom ett par år.

## Varför skalbarhet är affärskritiskt inom Business Intelligence

Business Intelligence är en disciplin som ständigt behöver anpassa sig. Nya verksamhetsområden, nya processer, nya mål, nya datakällor, nya lagkrav och nya användare – allt detta påverkar BI-plattformen löpande.

Ett BI-system som inte är byggt för skalbarhet riskerar att bli:
- Långsamt och svårt att underhålla
- Känsligt för fel vid varje förändring
- Dyrt att vidareutveckla
- Helt beroende av enskilda nyckelpersoner

Skalbarhet är därför inte en "lyx" eller en teknisk detalj. Det är en förutsättning för att BI ska kunna fungera som en långsiktig investering snarare än en återkommande kostnad.

## Är er BI-lösning skalbar? Fem testfrågor

Här är fem praktiska frågor ni kan ställa internt för att avgöra om er BI-plattform är byggd för framtiden:

### 1. Kan ni lägga till nya datakällor utan att hela modellen måste göras om?

En skalbar datamodell har tydliga lager och strukturer (exempelvis enligt medallion-arkitektur) som klarar expansion utan att kärnan rubbas.

### 2. Kräver varje liten ändring stora manuella insatser?

Om en mindre justering av en KPI eller ett mätetal får oväntade bieffekter på flera ställen är lösningen inte skalbar – den är skör.

### 3. Finns dokumentation, standarder och tydliga KPI-definitioner?

Utan detta blir BI-systemet personberoende. När en nyckelperson slutar tar förståelsen för logiken med sig ut genom dörren.

### 4. Har ni en etablerad datamodell och governance-struktur?

Skalbarhet bygger på ordning och kontroll – inte på Excel-logik, spontana lösningar eller dolda beräkningar i enskilda rapporter.

### 5. Klarar lösningen att datavolymerna dubblas eller tiodubblas?

En väl byggd BI-arkitektur ska hantera betydligt större dataset utan att prestandan blir lidande.

Om svaret är "nej" eller "vet inte" på flera av dessa frågor finns det troligen en skalbarhetsskuld att hantera – och det är bättre att upptäcka den nu än efter nästa stora datakälla eller regelförändring.

## Hur skalbarhet ser ut i praktiken – tre exempel

### Från en rapport till ett helt BI-ekosystem

Ett företag börjar ofta med ett konkret rapporteringsbehov. Är grunden rätt byggd kan de successivt koppla på fler avdelningar, fler KPI:er och fler rapporter utan att modellen faller isär. Det som började som en rapport växer organiskt till ett ekosystem som hela verksamheten lutar sig mot.

### När verksamheten växer snabbt – men BI hänger med

En skalbar lösning gör att när faktureringen fördubblas, kundbasen växer eller distributionsnätet expanderar, fortsätter systemet leverera korrekta insikter utan flaskhalsar. Ledningen kan fortsätta fatta beslut på samma datadrivna grund även genom en tillväxtfas.

### När nya lagkrav träder i kraft – CSRD, ESG och hållbarhetsdata

Regulatoriska förändringar är en av de tydligaste skalbarhetstesterna. En skalbar BI-plattform kan ta emot nya datatyper, nya klassificeringar och nya rapporteringskrav – som CSRD, EU-taxonomin eller GHG-protokollet – utan att kräva en total ombyggnad.

## Vad en skalbar lösning ger er på lång sikt

En skalbar BI-lösning är sällan den billigaste att bygga – men den är nästan alltid den billigaste att äga. Den ger:
- **Stabilitet** – rapporter och dashboards går att lita på varje dag
- **Lägre långsiktiga kostnader** – mindre tid läggs på att laga, mer på att utveckla
- **Bättre datakvalitet** – strukturen i sig motverkar inkonsekvenser
- **Snabbare utveckling** – nya behov kan mötas utan att börja om
- **Mindre personberoende** – kunskapen ligger i systemet, inte hos individer
- **Hög beredskap för nya krav** – regulatoriska eller affärsmässiga

Det är därför BI-projekt som saknar skalbarhet ofta blir betydligt dyrare över tid: de måste göras om. Och varje omgörning kostar inte bara pengar, utan också förlorad tid och förlorat förtroende för datan.

## Sammanfattning: Skalbarhet är framtidssäkring

Att förstå vad en "skalbar BI-lösning" faktiskt betyder är en avgörande del av varje organisations BI-strategi. Det handlar inte om en teknisk detalj djupt nere i arkitekturen – det handlar om att bygga en datamiljö som klarar av att växa med verksamheten, inte emot den.

Skalbarhet är inte en egenskap man enkelt lägger till i efterhand. Den byggs in från början, eller byggs om dyrt senare.

[**Boka en genomgång →**](/kontakt)`,
    image: '/images/artiklar/skalbar-bi-losning.webp',
    imageAlt: 'Skalbar BI-lösning – Kugghuset',
    gradient: 'radial-gradient(ellipse 85% 75% at 65% 25%, #0d3352 0%, #071a2e 55%, #020810 100%)',
    gridLines: false,
  },
  {
    nr: 120,
    slug: '120-data-literacy',
    category: 'Strategi',
    tags: ['Data Literacy', 'Beslutsfattande', 'CSRD', 'KPI'],
    date: '2026.01.15',
    readTime: '6 min',
    author: 'Alexander Öhberg',
    title: 'Data Literacy: Den tysta förmågan som avgör om er data skapar värde',
    body: 'Era system genererar mer data än någonsin. Ändå upplever de flesta ledningsgrupper att besluten varken blivit snabbare eller säkrare. Förklaringen är sällan teknisk – den handlar om Data Literacy, organisationens gemensamma förmåga att förstå och använda data.',
    fullText: `Era system genererar mer data än någonsin. Ändå upplever de flesta ledningsgrupper att besluten varken blivit snabbare eller säkrare. Förklaringen är sällan teknisk – den handlar om Data Literacy, organisationens gemensamma förmåga att förstå och använda data.

> **I den här artikeln:** Vad Data Literacy faktiskt innebär, varför det är affärskritiskt för ledningen, hur ni känner igen om förmågan saknas i er organisation – och konkreta första steg för att stärka den.

De flesta organisationer befinner sig idag i ett tillstånd där data finns i överflöd. Affärssystem, CRM, ekonomisystem, produktionssystem och hållbarhetsrapportering producerar kontinuerligt enorma mängder information. Trots det fastnar ledningsmöten ofta i diskussioner om vilken siffra som är korrekt – snarare än vad siffrorna faktiskt betyder för affären.

Det är inte ett teknikproblem. Det är ett förståelseproblem. Och det har ett namn: bristande **Data Literacy**, eller dataläskunnighet.

## Vad är Data Literacy?

Data Literacy kan beskrivas som organisationens gemensamma förmåga att läsa, förstå, analysera och kommunicera data på ett sätt som faktiskt stödjer beslut och styrning.

Det handlar inte om teknisk kompetens eller avancerad statistik. Det handlar om förståelse – att veta vad siffror representerar, hur de hänger ihop och vilka slutsatser som faktiskt går att dra av dem.

Ett enkelt sätt att skilja nivåerna åt:
- **Att ha data** – siffror finns lagrade någonstans i organisationen.
- **Att se data** – rapporter och dashboards är tillgängliga.
- **Att förstå data** – ni kan tolka den korrekt, ifrågasätta den och faktiskt använda den i beslut.

Det är först i det tredje steget som data börjar skapa värde. Och det steget är inte en individuell färdighet – det är en organisatorisk förmåga som byggs genom struktur, gemensamma definitioner och ett gemensamt språk.

## Varför Data Literacy är affärskritiskt för ledningen

### Bättre och mer konsekventa beslut

När dataläskunnigheten är låg fattas beslut ofta på magkänsla, erfarenhet eller utifrån den person som råkar ha tolkningsföreträde i rummet. Resultatet blir inkonsekventa beslut som är svåra att följa upp.

Organisationer med hög Data Literacy har istället ett gemensamt ramverk för hur siffror tolkas. Diskussionerna kan då fokusera på konsekvenser och åtgärder – inte på vilken version av sanningen som är rätt.

### Ökad effektivitet och produktivitet

Bristande dataförståelse skapar dolda kostnader. Manuella avstämningar, dubbelkontroller och återkommande ad hoc-frågor till analytikerteamet stjäl tid från både ledning och verksamhet.

När förståelsen ökar minskar behovet av manuellt stöd. Beslutsfattare kan tolka och använda informationen själva – vilket frigör analytikerresurser till verkligt värdeskapande arbete.

### Regelefterlevnad och transparens (CSRD, ESG)

CSRD och de ökande kraven på ESG-rapportering ställer höga krav på spårbarhet, konsekvens och transparens. Utan tillräcklig förståelse för hur data hänger ihop riskerar organisationer att rapportera felaktigt – eller helt enkelt inte kunna stå för det som rapporteras.

Data Literacy är därför inte längre en "nice to have". Det är en förutsättning för att möta regulatoriska krav på ett revisionssäkert sätt.

## Signaler på att Data Literacy saknas

Hur vet ni om er organisation har en lucka? Symptomen är ofta tydliga när man väl letar:
- Olika avdelningar rapporterar olika siffror för samma fråga
- Beslut skjuts upp på grund av osäkerhet kring datan
- Ledningsrapporter används mer som informationsmaterial än som beslutsunderlag
- Investeringar i BI- och rapporteringsverktyg ger begränsat affärsvärde
- Diskussioner i ledningsgruppen fastnar i detaljer istället för riktning

Känner ni igen er i flera punkter är det troligen inte ett tekniskt problem ni ska lösa – utan ett strukturellt.

## De fyra dimensionerna av Data Literacy

För att kunna bygga förmågan systematiskt hjälper det att dela in den i fyra dimensioner:
- **Förståelse för data** – hur data skapas, samlas in och struktureras i era system.
- **Tolkning och analys** – förmågan att dra rimliga slutsatser och se samband.
- **Kommunikation** – att kunna förmedla insikter på ett begripligt och relevant sätt för olika mottagare.
- **Deltagande och ansvar** – att aktivt använda data i beslut och ta ansvar för konsekvenserna.

Tillsammans bildar dimensionerna en helhet där data blir ett verktyg för gemensamt lärande – inte en specialistdisciplin som ligger hos några få.

## Vanliga hinder och missuppfattningar

De organisationer som inte lyckas fastnar ofta i samma fällor:
- **Övertro på teknik.** Nya verktyg löser sällan ett förståelseproblem. Resultatet blir oftast fler rapporter och fortsatt låg användning.
- **Otydliga KPI:er och begrepp.** När centrala mätetal saknar gemensam definition betyder samma siffra olika saker beroende på vem som tolkar den.
- **Avsaknad av gemensamt språk.** Data presenteras ofta i ett format som passar specialister – inte beslutsfattare. Det skapar distans.
- **Oklara roller och ansvar.** Om ingen äger definitioner, kvalitet och tolkning faller dataläskunnigheten mellan stolarna.

## Så ser en dataläskunnig organisation ut i praktiken

Den dataläskunniga organisationen kännetecknas inte av komplexitet utan av tydlighet. I praktiken syns det i vardagliga beteenden:
- Gemensamma definitioner används konsekvent över hela organisationen
- Data är kopplad till beslut och tydligt ansvar
- Medarbetare vet vilka siffror som är relevanta för just deras roll
- Beslut dokumenteras tillsammans med vilken data som låg till grund
- Ledningen efterfrågar analys och resonemang – inte bara siffror

Det sista är avgörande. Ledningen sätter tonen. När en VD eller CFO konsekvent frågar "vad säger datan?" och "vad baseras den slutsatsen på?" sprider sig beteendet snabbt nedåt i organisationen.

## Första stegen mot ökad Data Literacy

Att stärka dataläskunnigheten kräver inte ett omfattande transformationsprogram. Det kräver struktur, fokus och kontinuitet. Konkreta startpunkter som ger snabb effekt:
- **Definiera och dokumentera era centrala KPI:er** – ett gemensamt begreppsregister är förvånansvärt verkningsfullt.
- **Begränsa antalet mätetal** till de som faktiskt används i beslut.
- **Anpassa presentationen** efter mottagare – en CFO och en produktionschef behöver inte se samma vy.
- **Tydliggör ägarskap** för datakvalitet och tolkning av varje nyckeltal.
- **Följ upp hur data används** i faktiska beslut – inte bara att den produceras.

Små förbättringar i förståelse ger ofta stora effekter i beslutsförmåga.

## Sammanfattning: Data Literacy är en konkurrensfördel

Data Literacy är inte ett BI-projekt och inte ett utbildningsinitiativ. Det är en grundläggande organisatorisk förmåga som avgör om er data överhuvudtaget kan skapa värde.

Organisationer som utvecklar den fattar snabbare, tryggare och mer konsekventa beslut än sina konkurrenter. De minskar personberoendet, ökar transparensen och bygger förutsättningar för långsiktigt affärsvärde – i en allt mer komplex regulatorisk verklighet.

Frågan är inte längre om er organisation har data. Frågan är om ni förstår den.

[**Kontakta oss →**](/kontakt)`,
    image: '/images/artiklar/data-literacy.webp',
    imageAlt: 'Data Literacy – Kugghuset',
    gradient: 'radial-gradient(ellipse 80% 70% at 20% 40%, #1a4060 0%, #0d2030 50%, #050f18 100%)',
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
