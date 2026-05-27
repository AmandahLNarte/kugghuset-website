export interface TeamMember {
  name: string;
  slug: string;
  profilePath: string;
  roleSv: string;
  roleEn: string;
  skills: string[];
  photo: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: 'Konrad Leffler',
    slug: 'konrad-datatrollkarlen',
    profilePath: '/konrad-datatrollkarlen',
    roleSv: 'Grundare & senior datatrollkarl inom BI & AI',
    roleEn: 'Founder & Senior BI & AI Expert',
    skills: ['Power BI', 'DAX', 'Datamodellering', 'SQL/T-SQL', 'Koncernredovisning', 'React', 'TypeScript', 'FastAPI', 'Supabase', 'Claude SDK', 'Multi-tenant SaaS', 'ETL/ELT', 'Python', 'Datatrollkarl'],
    photo: '/images/team-konrad.webp',
    bio: 'Konrad grundade Kugghuset 2013 med övertygelsen att svenska bolag förtjänar affärssystem som faktiskt speglar verkligheten. Med 15+ år som finansiell domänexpert och full-stack systemarkitekt har han genomfört 200+ uppdrag för allt från snabbväxande SaaS-bolag till börsnoterade koncerner. Hans referensuppdrag inkluderar ett realtids-koncernredovisningssystem för Humana (60 juridiska enheter, 5 Mdr SEK), en subscription billing-motor för Formpipe och en ESG-dataplattform för Sagax. De senaste åren har han kompletterat sin finansiella djupexpertis med AI-native fullstackutveckling — React 19, FastAPI, Supabase och Anthropic Claude SDK — och bygger nu Toolora, ett modernt ERP/CRM för hantverksbranschen. Konrad löser problem i gränslandet mellan ekonomiavdelningen och IT: den typen av system som kräver att man förstår både kontoplan och datamodell.',
  },
  {
    name: 'Tobias Törnblom',
    slug: 'tobias-tornblom',
    profilePath: '/team/tobias-tornblom',
    roleSv: 'Dataanalytiker & AI-driven fullstackutvecklare',
    roleEn: 'Data Analyst & AI-driven Full-stack Developer',
    skills: ['Python', 'SQL', 'TypeScript', 'React', 'Supabase', 'Claude API', 'Power BI', 'Agentisk AI', 'SaaS-arkitektur', 'Datatrollkarl'],
    photo: '/images/team-tobias.webp',
    bio: 'Tobias specialiserar sig på fastighetssystem och AI-driven SaaS-utveckling. Han hjälper bolag som driver mötesplatser, coworking och fastigheter att ta ut mer värde ur sina befintliga system — och bygger när det behövs kompletta SaaS-lösningar från grunden. Med Python, SQL och React som primära verktyg kombinerar han dataextrahering, automatisering och agentisk AI för att skapa lösningar som faktiskt används i driften.',
  },
  {
    name: 'Alexander Öhberg',
    slug: 'alexander-ohberg',
    profilePath: '/team/alexander-ohberg',
    roleSv: 'BI-analytiker & AI-konsult',
    roleEn: 'BI Analyst & AI Consultant',
    skills: ['SQL', 'Power BI', 'Datamodellering', 'DAX', 'Datatrollkarl', 'BI-konsult'],
    photo: '/images/team-alexander.webp',
    bio: 'Alexander specialiserar sig på skärningspunkten mellan traditionell BI och modern AI. Han hjälper företag att bygga datamodeller i Power BI och integrera AI-driven analys i befintliga rapporteringsmiljöer.',
  },
  {
    name: 'Evgenia Nordholm',
    slug: 'evgenia-nordholm',
    profilePath: '/team/evgenia-nordholm',
    roleSv: 'BI-utvecklare & dataanalytiker',
    roleEn: 'BI Developer & Data Analyst',
    skills: ['Power BI', 'DAX', 'T-SQL', 'Python', 'ETL/ELT', 'Microsoft Fabric', 'Snowflake', 'API-integration', 'Datamodellering', 'Datakvalitetsdesign'],
    photo: '/images/team-evgenia.webp',
    bio: 'Evgenia utvecklar BI-lösningar genom hela kedjan — från SQL och ETL till datamodeller, Power BI och API-integrationer. Med en bakgrund inom verksamhetskoordinering och en magisterexamen i Management ser hon till att en rapport har värde först när användarna litar på siffrorna. Hon är van att översätta mellan verksamhetens behov och tekniska lösningar, och har bland annat byggt API-baserade integrationer mot Agda PS, Microsoft Fabric-pipelines och interaktiva HR-rapporter som används dagligen av ledning och chefer.',
  },
  {
    name: 'Daniel Brooks',
    slug: 'daniel-brooks',
    profilePath: '/team/daniel-brooks',
    roleSv: 'Stabschef & strategisk operatör',
    roleEn: 'Chief of Staff & Strategic Operator',
    skills: ['Gruppdynamik & facilitation', 'AI-native arbetsflöden', 'Governance design', 'Kunskapshantering', 'Claude Code', 'Konfliktmedling', 'Sociokrati', 'Antifragil professionalitet'],
    photo: '/images/team-daniel.webp',
    bio: 'Daniel är Kugghusets Chief of Staff — en strategisk operatör för team under press. Han leder mötena som håller ett litet konsultteam funktionellt, designar system som ser till att strategi överlever gapet mellan beslut och genomförande, och bär det relationella och emotionella när det behövs som mest. Hans starkaste kompetens är gruppdynamik och facilitation: att styra möten i flera riktningar simultant, balansera relationer mot resultat och integrera individuellt syfte i kollektivt arbete — en förmåga han kallar antifragil professionalitet. Med bakgrund från danska armén (underrättelsetjänst i Kosovo, Irak och Afghanistan), ett kandidatexamen i fysik från Niels Bohrs Institut och 14 år av community governance på The Borderland (80→5 000+ deltagare, 5M SEK participatory budget per år) kombinerar han strukturtänkande med djup mänsklig förståelse. AI-native sedan dag ett: han arbetar med Claude Code och multi-LLM-strategier som en naturlig del av sin operativa verktygslåda.',
  },
  {
    name: 'Amandah Andersson',
    slug: 'amandah-andersson',
    profilePath: '/team/amandah-andersson',
    roleSv: 'CFO & kommunikation',
    roleEn: 'CFO & Communication',
    skills: ['Finansiell styrning', 'Budgetarbete', 'Visuell kommunikation', 'Kreativ ledning', 'Varumärkesbyggande', 'AI & kreativt skapande'],
    photo: '/images/team-amandah.webp',
    bio: 'Som CFO på Kugghuset ansvarar Amandah för bolagets ekonomiska styrning — budgetarbete, finansiella översikter och löpande uppföljning av bolagets ekonomiska ställning. Med erfarenhet av att ha grundat och drivit 6+ egna varumärken och företag vet hon vad ekonomisk kontroll betyder i praktiken. Parallellt ansvarar hon för Kugghusets kommunikation, och tar med sig ett konstnärligt öga från sin bakgrund som illustratör, art director och kreativ ledare med utbildning från Beckmans designhögskola och Konstfack — för att göra komplex data begriplig och användbar.',
  },
];
