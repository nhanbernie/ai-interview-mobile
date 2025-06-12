import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const InterviewCard = () => {
  return (
    <View className="rounded-3xl overflow-hidden w-full mb-6">
      <LinearGradient
        colors={['#6366F1', '#4F46E5']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ padding: 30, alignItems: 'center' }}
      >
        <View className="bg-white/10 p-4 rounded-full mb-4">
          <Ionicons name="mic-outline" size={32} color="white" />
        </View>

        <Text className="text-white text-2xl font-semibold mb-3 text-center">
          Bắt đầu phỏng vấn ngay
        </Text>

        <Text className="text-white/70 text-xl text-center mb-5">
          Thực hành với AI để cải thiện kỹ năng
        </Text>

        <TouchableOpacity
          activeOpacity={0.7}
          className="bg-white px-5 py-4 rounded-full flex-row items-center"
        >
          <Text className="text-blue-600 font-medium mr-1">Bắt đầu</Text>
          <Ionicons name="chevron-forward" size={18} color="#2563eb" />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default InterviewCard;
