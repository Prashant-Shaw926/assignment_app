// Shared TypeScript Interfaces

export interface Program {
  id: number;
  university: string;
  country: string;
  flag: string;         // emoji flag e.g. "🇨🇦"
  description: string;
  fullDescription: string;
  tuition: {
    amount: number;
    currency: string;
    period: 'year' | 'semester';
  };
  duration: string;     // e.g. "4 Years"
  intake: string[];     // e.g. ["September", "January"]
  ranking: string;      // e.g. "#1 in Canada"
}

// Navigation Param List 

export type RootStackParamList = {
  Home: undefined;
  Detail: { program: Program };
};
