import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import {
  WelcomeHeader,
  InterviewCard,
  FeatureCard,
  Typography,
  HistoryCard,
} from '@/components/ui';
import { FEATURES } from '@/common/constants/features';
import { HISTORY_ITEMS } from '@/common/constants/history';
import Header from '@/layouts/Header';
import { FlatList } from 'react-native-gesture-handler';
import { useFeatureNavigation } from '@/hooks/useFeatureNavigation';

export default function HomeScreen() {
  const { navigateToFeature } = useFeatureNavigation();
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      <Header />

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <WelcomeHeader name="Tô Thiện Nhân" />

        <InterviewCard />

        <View className="mt-6">
          <Typography variant="h2" className="mb-4">
            Tính năng chính
          </Typography>
          <View className="flex-row flex-wrap justify-between">
            {FEATURES.map((feature) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                onPress={() => navigateToFeature(feature)}
              />
            ))}
          </View>
        </View>

        <View className="mt-6">
          <Typography variant="h2" className="mb-4">
            Lịch sử phỏng vấn
          </Typography>
          <FlatList
            data={HISTORY_ITEMS}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className="mb-4">
                <HistoryCard
                  item={item}
                  onPress={() => router.push('/history')}
                />
              </View>
            )}
            ListEmptyComponent={
              <Typography variant="body" className="text-center text-gray-500">
                Chưa có lịch sử phỏng vấn
              </Typography>
            }
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
