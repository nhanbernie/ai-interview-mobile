export interface InterviewHistory {
  id: string;
  position: string;
  date: string;
  interviewer: {
    name: string;
    avatar: string;
  };
}

// mock data
export const INTERVIEW_HISTORY: InterviewHistory[] = [
  {
    id: '1',
    position: 'Front-end Developer',
    date: '10:30 - 15/12/2023',
    interviewer: {
      name: 'Prof. Alex Thompson',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
  },
  {
    id: '2',
    position: 'Front-end Engineer',
    date: '14:45 - 14/12/2023',
    interviewer: {
      name: 'Dr. Sarah Chen',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  },
  {
    id: '3',
    position: 'Front-end Developer',
    date: '09:15 - 13/12/2023',
    interviewer: {
      name: 'Prof. Michael Davis',
      avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
    },
  },
  {
    id: '4',
    position: 'Senior Front-end',
    date: '16:30 - 12/12/2023',
    interviewer: {
      name: 'Dr. Emily Wong',
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    },
  },
];
