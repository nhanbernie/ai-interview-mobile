import { View, Text, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const mockOptions = [
  {
    id: 'form',
    title: 'Phỏng vấn dựa trên form',
    description: 'Nhập thông tin để tạo câu hỏi phỏng vấn theo yêu cầu của bạn',
  },
  {
    id: 'cv',
    title: 'Phỏng vấn dựa trên CV',
    description: 'Tải CV lên để nhận câu hỏi phù hợp với kinh nghiệm của bạn',
  },
  {
    id: 'cv-jd',
    title: 'Phỏng vấn dựa trên CV & JD',
    description:
      'Tải CV và JD lên để nhận câu hỏi phù hợp với vị trí tuyển dụng',
  },
];

export default function MockInterviewScreen() {
  const navigation = useNavigation();

  const handleSelect = (optionId: string) => {
    // Điều hướng tuỳ theo id
    // navigation.navigate('SomeScreen', { option: optionId });
    console.log('Selected:', optionId);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="bg-indigo-500 px-4 pt-4 pb-6 rounded-b-3xl">
        <Text className="text-white text-lg font-bold">
          Chọn Mock Interview
        </Text>
        <Text className="text-white text-sm mt-1">
          Lựa chọn phương thức phỏng vấn phù hợp với bạn
        </Text>
      </View>

      <ScrollView contentContainerClassName="p-4">
        {mockOptions.map((option) => (
          <Pressable
            key={option.id}
            onPress={() => handleSelect(option.id)}
            className="flex-row items-start p-4 bg-white rounded-2xl shadow-sm mb-4 border border-gray-200"
          >
            <View className="w-10 h-10 rounded-xl bg-indigo-100 items-center justify-center mr-3">
              <Ionicons
                name="document-text-outline"
                size={20}
                color="#6366f1"
              />
            </View>
            <View className="flex-1">
              <Text
                className="text-base font-semibold text-gray-900"
                numberOfLines={1}
              >
                {option.title}
              </Text>
              <Text className="text-sm text-gray-500 mt-1">
                {option.description}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
