import { router } from 'expo-router';
import { Feature } from '@/common/constants/features';

export const useFeatureNavigation = () => {
  const navigateToFeature = (feature: Feature) => {
    const routes = {
      'ai-chat': () => router.push(`/chat/${feature.id}`),
      'mock-interview': () => router.push('/mock-interview'),
      interviews: () => router.push('/interviews'),
      history: () => router.push('/chat/history'),
    };

    const navigateAction = routes[feature.type];
    if (navigateAction) {
      navigateAction();
    }
  };

  return { navigateToFeature };
};
