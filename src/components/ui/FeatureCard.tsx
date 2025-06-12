import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feature } from '@/common/constants/features';

interface FeatureCardProps {
  feature: Feature;
  onPress?: () => void;
}

const FeatureCard = ({ feature, onPress }: FeatureCardProps) => {
  return (
    <TouchableOpacity
      className="w-[48%] bg-[#e9eaec60] rounded-xl p-4 mb-4"
      onPress={onPress}
    >
      <View
        className={`w-12 h-12 rounded-full ${feature.iconBgColor} items-center justify-center mb-3`}
      >
        <Ionicons name={feature.icon} size={24} color="#fff" />
      </View>
      <Text className="text-2xl font-medium mb-1">{feature.title}</Text>
      <Text className="text-xl text-[#4B5563]">{feature.description}</Text>
    </TouchableOpacity>
  );
};

export default FeatureCard;
