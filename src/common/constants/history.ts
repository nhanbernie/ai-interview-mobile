export interface HistoryItem {
  id: string;
  role: string;
  company: string;
  rating: number;
  date: string;
}
// MOCK DÂT
export const HISTORY_ITEMS: HistoryItem[] = [
  {
    id: '1',
    role: 'Frontend Developer',
    company: 'Tech Company',
    rating: 4.5,
    date: '25 Th1 2024',
  },
  {
    id: '2',
    role: 'UX Designer',
    company: 'Design Studio',
    rating: 4.8,
    date: '24 Th1 2024',
  },
  {
    id: '3',
    role: 'Product Manager',
    company: 'Startup',
    rating: 4.2,
    date: '23 Th1 2024',
  },
];
