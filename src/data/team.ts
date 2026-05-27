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
    skills: ['Power BI', 'BI-konsult', 'Business Intelligence', 'Datamodellering', 'DAX', 'SQL', 'Python', 'ETL', 'AI-expert', 'Datatrollkarl'],
    photo: '/images/team-konrad.webp',
    bio: 'Konrad grundade Kugghuset 2013 med visionen att göra avancerad business intelligence tillgänglig för svenska bolag. Med över 15 års erfarenhet av Power BI, datamodellering och affärssystem har han lett hundratals BI-projekt för ekonomichefer och controllers. Han är känd för att kombinera teknisk precision med djup affärsförståelse.',
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
    roleSv: 'BI & AI-expert',
    roleEn: 'BI & AI Expert',
    skills: ['Power BI', 'BI-konsult', 'Business Intelligence', 'Datamodellering', 'DAX', 'SQL', 'Python', 'ETL'],
    photo: '/images/team-evgenia.webp',
    bio: 'Evgenia är en erfaren BI-expert med bred kompetens från datamodellering till Power BI-rapportering. Hon kombinerar teknisk noggrannhet med förmågan att kommunicera komplexa datastrukturer på ett begripligt sätt för beställare utan teknisk bakgrund.',
  },
  {
    name: 'Daniel Brooks',
    slug: 'daniel-brooks',
    profilePath: '/team/daniel-brooks',
    roleSv: 'Strategisk rådgivare & AI-konsult',
    roleEn: 'Strategic Advisor & AI Consultant',
    skills: ['AI-powered Workflows', 'Knowledge Management', 'Governance Development', 'Meeting Facilitation', 'AI Zen', 'Business Intelligence'],
    photo: '/images/team-daniel.webp',
    bio: 'Daniel är Kugghusets strateg med fokus på AI-drivna arbetsflöden och kunskapshantering. Han hjälper organisationer att implementera AI på ett strukturerat sätt — från governance och processdesign till konkreta verktyg som sparar tid och skapar värde.',
  },
  {
    name: 'Amandah Andersson',
    slug: 'amandah-andersson',
    profilePath: '/team/amandah-andersson',
    roleSv: 'CFO & kommunikation',
    roleEn: 'CFO & Communication',
    skills: ['Finance', 'Creative Direction', 'Marketing', 'Visual Communication', 'Brand Strategy', 'Creative AI'],
    photo: '/images/team-amandah.webp',
    bio: 'Amandah ansvarar för Kugghusets ekonomi och kommunikation. Med bakgrund inom design och företagande binder hon samman affärsutveckling med digital närvaro.',
  },
];
