import { Ionicons } from '@expo/vector-icons';

export type FeatureType =
  | 'mock-interview'
  | 'ai-chat'
  | 'interviews'
  | 'history';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconBgColor: string;
  type: FeatureType;
}

export const FEATURES: Feature[] = [
  {
    id: 'mock-interview',
    title: 'Mock Interview',
    description: 'Thực hành với AI',
    icon: 'mic',
    iconBgColor: 'bg-purple-500',
    type: 'mock-interview',
  },
  {
    id: 'ai-chat',
    title: 'AI Chat',
    description: 'Tư vấn trực tiếp',
    icon: 'chatbubbles',
    iconBgColor: 'bg-green-500',
    type: 'ai-chat',
  },
  {
    id: 'interviews',
    title: 'AI Resume Analyzer',
    description: 'Đánh giá hồ sơ',
    icon: 'document-text',
    iconBgColor: 'bg-orange-500',
    type: 'interviews',
  },
  {
    id: 'history',
    title: 'AI Roadmap',
    description: 'Lộ trình phát triển',
    icon: 'map',
    iconBgColor: 'bg-blue-500',
    type: 'history',
  },
];
