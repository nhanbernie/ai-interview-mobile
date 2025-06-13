export interface AIInterviewer {
  id: string;
  name: string;
  speciality: string;
  avatar: string;
  rating: number;
  totalInterviews: number;
  gender: 'male' | 'female';
}

export type GenderType = 'male' | 'female';
