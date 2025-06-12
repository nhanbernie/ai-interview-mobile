import { View, TouchableOpacity } from 'react-native';
import { Typography } from '@/components/ui';
import { Ionicons } from '@expo/vector-icons';

interface InterviewOptionProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
  onPress?: () => void;
}

const InterviewOption = ({
  icon,
  title,
  description,
  onPress,
}: InterviewOptionProps) => (
  <TouchableOpacity
    className="flex-row items-start bg-white p-6 rounded-2xl shadow-md mb-7"
    onPress={onPress}
    activeOpacity={0.9}
  >
    <View className="bg-indigo-100 p-4 rounded-xl">
      <Ionicons name={icon} size={24} color="#6366F1" />
    </View>
    <View className="ml-4 flex-1">
      <Typography variant="h3" className="font-semibold text-gray-900 mb-2">
        {title}
      </Typography>
      <Typography variant="body" className="text-gray-600 leading-5">
        {description}
      </Typography>
    </View>
  </TouchableOpacity>
);

export default InterviewOption;
