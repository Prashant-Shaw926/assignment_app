// Types

export interface Program {
  id: number;
  university: string;
  country: string;
  flag: string;
  description: string;
  fullDescription: string;
  tuition: {
    amount: number;
    currency: string;
    period: 'year' | 'semester';
  };
  duration: string;
  intake: string[];
  ranking: string;
}

// Static JSON Data for Programs

export const programs: Program[] = [
  {
    id: 1,
    university: 'University of Toronto',
    country: 'Canada',
    flag: '🇨🇦',
    description: 'One of the top-ranked universities in the world, known for research and innovation.',
    fullDescription:
      'The University of Toronto is a globally top-ranked public research university in Toronto, Ontario, Canada. Founded in 1827, it is one of the world\'s most prestigious institutions offering over 700 undergraduate and 200 graduate programs.',
    tuition: { amount: 28000, currency: 'CAD', period: 'year' },
    duration: '4 Years',
    intake: ['September', 'January'],
    ranking: '#1 in Canada',
  },
  {
    id: 2,
    university: 'University of Oxford',
    country: 'United Kingdom',
    flag: '🇬🇧',
    description: 'The oldest university in the English-speaking world with unmatched academic prestige.',
    fullDescription:
      'The University of Oxford is a collegiate research university in Oxford, England. With teaching dating back to 1096, it is one of the most celebrated institutions globally.',
    tuition: { amount: 26770, currency: 'GBP', period: 'year' },
    duration: '3 Years',
    intake: ['October'],
    ranking: '#1 in the UK',
  },
  {
    id: 3,
    university: 'Technical University of Munich',
    country: 'Germany',
    flag: '🇩🇪',
    description: "Germany's premier technical university with strong engineering and science programs.",
    fullDescription:
      'TUM is a leading European university known for engineering and science, with strong industry ties.',
    tuition: { amount: 150, currency: 'EUR', period: 'semester' },
    duration: '2-4 Years',
    intake: ['October', 'April'],
    ranking: '#1 in Germany',
  },
  {
    id: 4,
    university: 'National University of Singapore',
    country: 'Singapore',
    flag: '🇸🇬',
    description: "Asia's top university, blending Eastern and Western academic traditions.",
    fullDescription:
      'NUS is a global research university emphasizing innovation and interdisciplinary learning.',
    tuition: { amount: 17550, currency: 'SGD', period: 'year' },
    duration: '3-4 Years',
    intake: ['August'],
    ranking: '#1 in Asia',
  },
  {
    id: 5,
    university: 'University of Melbourne',
    country: 'Australia',
    flag: '🇦🇺',
    description: "Australia's leading university with a rich tradition of excellence.",
    fullDescription:
      'The University of Melbourne is known for its strong academic reputation and vibrant student life.',
    tuition: { amount: 38000, currency: 'AUD', period: 'year' },
    duration: '3 Years',
    intake: ['March', 'July'],
    ranking: '#1 in Australia',
  },
];