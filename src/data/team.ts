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
    roleSv: 'Grundare & Senior BI & AI-expert',
    roleEn: 'Founder & Senior BI & AI Expert',
    skills: ['Power BI', 'BI-konsult', 'Business Intelligence', 'Datamodellering', 'DAX', 'SQL', 'Python', 'ETL', 'Datatrollkarl'],
    photo: '/images/team-konrad.jpg',
    bio: 'Konrad grundade Kugghuset 2013 med visionen att göra avancerad business intelligence tillgänglig för svenska bolag. Med över 15 års erfarenhet av Power BI, datamodellering och affärssystem har han lett hundratals BI-projekt för ekonomichefer och controllers. Han är känd för att kombinera teknisk precision med djup affärsförståelse.',
  },
  {
    name: 'Elis Lindström',
    slug: 'elis-lindstrom',
    profilePath: '/team/elis-lindstrom',
    roleSv: 'BI & AI-expert',
    roleEn: 'BI & AI Expert',
    skills: ['SQL', 'DAX', 'ETL', 'BI-konsult', 'Power BI', 'Business Intelligence', 'Datatrollkarl'],
    photo: '/images/team-elis.jpg',
    bio: 'Elis är en av Kugghusets mest erfarna BI-experter med djup kompetens inom SQL, DAX och ETL-processer. Han bygger robusta datamodeller och Power BI-lösningar som håller över tid och kan underhållas utan löpande konsultstöd.',
  },
  {
    name: 'Tobias Törnblom',
    slug: 'tobias-tornblom',
    profilePath: '/team/tobias-tornblom',
    roleSv: 'Dataanalytiker & fullstackutvecklare',
    roleEn: 'Data Analyst & Full-stack Developer',
    skills: ['Python', 'Business Intelligence', 'Power BI', 'Datatrollkarl'],
    photo: '/images/team-tobias.jpg',
    bio: 'Tobias kombinerar dataanalys med fullstackutveckling och binder samman backend-system med interaktiva BI-lösningar i Power BI. Med Python som primärt verktyg automatiserar han dataflöden och bygger skalbara Business Intelligence-miljöer.',
  },
  {
    name: 'Alexander Öhberg',
    slug: 'alexander-ohberg',
    profilePath: '/team/alexander-ohberg',
    roleSv: 'BI-analytiker & AI-konsult',
    roleEn: 'BI Analyst & AI Consultant',
    skills: ['SQL', 'Power BI', 'Datamodellering', 'DAX', 'Datatrollkarl', 'BI-konsult'],
    photo: '/images/team-alexander.jpg',
    bio: 'Alexander specialiserar sig på skärningspunkten mellan traditionell BI och modern AI. Han hjälper företag att bygga datamodeller i Power BI och integrera AI-driven analys i befintliga rapporteringsmiljöer.',
  },
  {
    name: 'Daniel Brooks',
    slug: 'daniel-brooks',
    profilePath: '/team/daniel-brooks',
    roleSv: 'Strategisk rådgivare & AI-konsult',
    roleEn: 'Strategic Advisor & AI Consultant',
    skills: ['AI-powered Workflows', 'Knowledge Management', 'Governance Development', 'Meeting Facilitation', 'AI Zen', 'Business Intelligence'],
    photo: '/images/team-daniel.jpg',
    bio: 'Daniel är Kugghusets strateg med fokus på AI-drivna arbetsflöden och kunskapshantering. Han hjälper organisationer att implementera AI på ett strukturerat sätt — från governance och processdesign till konkreta verktyg som sparar tid och skapar värde.',
  },
  {
    name: 'Evgenia Nordholm',
    slug: 'evgenia-nordholm',
    profilePath: '/team/evgenia-nordholm',
    roleSv: 'BI & AI-expert',
    roleEn: 'BI & AI Expert',
    skills: ['Power BI', 'BI-konsult', 'Business Intelligence', 'Datamodellering', 'DAX', 'SQL', 'Python', 'ETL'],
    photo: '/images/team-evgenia.jpg',
    bio: 'Evgenia är en erfaren BI-expert med bred kompetens från datamodellering till Power BI-rapportering. Hon kombinerar teknisk noggrannhet med förmågan att kommunicera komplexa datastrukturer på ett begripligt sätt för beställare utan teknisk bakgrund.',
  },
  {
    name: 'Amandah LNarte',
    slug: 'amandah-lnarte',
    profilePath: '/team/amandah-lnarte',
    roleSv: 'Ekonomi & kommunikation',
    roleEn: 'Finance & Communication',
    skills: ['Creative Director', 'Creative AI', 'Business Intelligence'],
    photo: '/images/team-amandah.jpg',
    bio: 'Amandah ansvarar för Kugghusets ekonomi och kommunikation och säkerställer att företagets erbjudanden når rätt målgrupper. Med bakgrund inom kreativ AI och Business Intelligence binder hon samman affärsutveckling med digital närvaro.',
  },
];
