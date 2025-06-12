import { View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { InterviewOption, HeaderTitle } from '@/components/ui';
import { INTERVIEW_OPTIONS } from '@/constants/mockInterview';

export default function MockInterviewScreen() {
  const insets = useSafeAreaInsets();

  const handleOptionPress = (route: string) => {
    router.push(route as any);
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View
        className="bg-indigo-600 pb-16 h-50 rounded-b-3xl justify-center"
        style={{ paddingTop: insets.top }}
      >
        <HeaderTitle
          title="Chọn Mock Interview"
          subTitle="Lựa chọn phương thức phỏng vấn phù hợp với bạn"
        />
      </View>

      {/* Content */}
      <ScrollView
        scrollEnabled={false}
        contentContainerStyle={{ paddingHorizontal: 25, paddingTop: 15 }}
        className="-mt-10"
      >
        {INTERVIEW_OPTIONS.map((option) => (
          <InterviewOption
            key={option.id}
            icon={option.icon}
            title={option.title}
            description={option.description}
            onPress={() => handleOptionPress(option.route)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
