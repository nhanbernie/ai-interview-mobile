import { View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Typography from './Typography';
import { HistoryItem } from '@/constants/history';
import { useNavigation } from '@react-navigation/native';

interface HistoryCardProps {
  item: HistoryItem;
  onPress?: () => void;
}

const HistoryCard = ({ item, onPress }: HistoryCardProps) => {
  const navigation = useNavigation();
  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      // @ts-ignore - Type error with navigation can be ignored here
      navigation.navigate('history');
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      className="bg-white rounded-2xl p-4 flex-row justify-between items-center border border-[#E5E7EB]"
    >
      {/* Left: Role & Company */}
      <View className="flex-1">
        <Typography
          variant="h3"
          className="text-xl font-semibold text-gray-900 mb-1"
        >
          {item.role}
        </Typography>
        <Typography variant="body" className="text-base text-gray-500 mb-2">
          {item.company}
        </Typography>
        <Typography variant="small" className="text-gray-400">
          {item.date}
        </Typography>
      </View>

      {/* Center: Rating */}
      <View className="">
        <View className="flex-row items-center mb-3">
          <Ionicons name="star" size={16} color="#F59E0B" />
          <Typography variant="h3" className="ml-1 text-gray-900">
            {item.rating}
          </Typography>
        </View>

        {/* Right: Date & Arrow */}
        <View className="flex-row justify-end">
          <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
        </View>
      </View>
    </Pressable>
  );
};

export default HistoryCard;
