import { AIInterviewer } from '../types/aiInterviewer.model';

/**
 * Mock data for AI Interviewers
 * TODO: Replace with actual API endpoints
 *
 * API Endpoints to implement:
 * - GET /api/ai-interviewers - Get all AI interviewers
 * - GET /api/ai-interviewers?gender={gender} - Get by gender filter
 * - GET /api/ai-interviewers/{id} - Get specific interviewer
 * - POST /api/interview-sessions - Start new interview session
 */

export const AI_INTERVIEWERS_MOCK_DATA: AIInterviewer[] = [
  {
    id: '1',
    name: 'Alex AI',
    speciality: 'Chuyên gia Công nghệ',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    rating: 4.9,
    totalInterviews: 1234,
    gender: 'male',
  },
  {
    id: '2',
    name: 'Maria AI',
    speciality: 'Chuyên gia Marketing',
    avatar:
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    rating: 4.8,
    totalInterviews: 987,
    gender: 'female',
  },
  {
    id: '3',
    name: 'David AI',
    speciality: 'Chuyên gia Tài chính',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rating: 4.7,
    totalInterviews: 856,
    gender: 'male',
  },
  {
    id: '4',
    name: 'Sophie AI',
    speciality: 'Chuyên gia Nhân sự',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    rating: 4.9,
    totalInterviews: 743,
    gender: 'female',
  },
  {
    id: '5',
    name: 'John AI',
    speciality: 'Chuyên gia Kỹ thuật',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    rating: 4.6,
    totalInterviews: 567,
    gender: 'male',
  },
  {
    id: '6',
    name: 'Emma AI',
    speciality: 'Chuyên gia Kinh doanh',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
    rating: 4.8,
    totalInterviews: 892,
    gender: 'female',
  },
];

/**
 * Configuration for API integration
 * TODO: Move to environment variables
 */
export const AI_INTERVIEWER_API_CONFIG = {
  baseUrl: process.env.EXPO_PUBLIC_API_URL || 'https://api.ai-interviewer.com',
  endpoints: {
    getAll: '/ai-interviewers',
    getByGender: '/ai-interviewers?gender=',
    getById: '/ai-interviewers/',
    startSession: '/interview-sessions',
  },
  timeout: 10000, // 10 seconds
};
