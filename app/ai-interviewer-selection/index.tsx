import React from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import {
  HeaderTitle,
  AIInterviewerCard,
  AIInterviewerDetail,
  GenderSelector,
  Loading,
} from '@/components/ui';
import FormActions from '@/components/form/FormActions';
import { useAIInterviewerSelection } from '@/hooks/useAIInterviewerSelection';

export default function AIInterviewerSelectionScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const {
    interviewers,
    selectedInterviewer,
    selectedGender,
    isLoading,
    isStartingInterview,
    error,
    setSelectedGender,
    setSelectedInterviewerId,
    startInterview,
  } = useAIInterviewerSelection();
  const handleStartInterview = async () => {
    try {
      const result = await startInterview();
      if (result) {
        router.push(`/interview-call/${result.sessionId}` as any);
      }
    } catch (err) {
      Alert.alert('Lỗi', 'Không thể bắt đầu phỏng vấn. Vui lòng thử lại.', [
        { text: 'OK' },
      ]);
    }
  };

  const handleCancel = () => {
    router.back();
  };

  React.useEffect(() => {
    if (error) {
      Alert.alert('Lỗi', error, [{ text: 'OK' }]);
    }
  }, [error]);

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View
        className="bg-indigo-600 pb-16 h-50 rounded-b-3xl justify-center"
        style={{ paddingTop: insets.top }}
      >
        <HeaderTitle
          title="Chọn AI Phỏng Vấn"
          subTitle="Hãy chọn AI phù hợp với bạn"
        />
      </View>

      {/* Content Container with overlap */}
      <ScrollView
        className="flex-1 -mt-10"
        contentContainerStyle={{
          paddingHorizontal: 25,
          paddingTop: 15,
          paddingBottom: 120,
        }}
        showsVerticalScrollIndicator={false}
      >
        <GenderSelector
          selectedGender={selectedGender}
          onGenderChange={setSelectedGender}
        />

        {isLoading && (
          <View className="py-10">
            <Loading size="large" />
          </View>
        )}

        {!isLoading && (
          <View className="flex-row flex-wrap justify-between mt-4">
            {interviewers.map((interviewer) => (
              <View key={interviewer.id} className="w-[48%]">
                <AIInterviewerCard
                  interviewer={interviewer}
                  isSelected={selectedInterviewer?.id === interviewer.id}
                  onPress={setSelectedInterviewerId}
                />
              </View>
            ))}
          </View>
        )}

        {/* Selected Interviewer Detail */}
        {selectedInterviewer && !isLoading && (
          <AIInterviewerDetail interviewer={selectedInterviewer} />
        )}
      </ScrollView>

      <FormActions
        primaryText="Bắt đầu Phỏng vấn"
        secondaryText="Hủy"
        onPrimaryPress={handleStartInterview}
        onSecondaryPress={handleCancel}
        isPrimaryEnabled={!!selectedInterviewer && !isStartingInterview}
        isPrimaryLoading={isStartingInterview}
      />
    </View>
  );
}
