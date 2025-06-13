import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { AIInterviewer } from '@/common/types/aiInterviewer.model';

interface AIInterviewerCardProps {
  interviewer: AIInterviewer;
  isSelected: boolean;
  onPress: (id: string) => void;
}

const AIInterviewerCard = ({
  interviewer,
  isSelected,
  onPress,
}: AIInterviewerCardProps) => {
  return (
    <TouchableOpacity onPress={() => onPress(interviewer.id)} className="mb-4">
      <View
        className="p-5 rounded-2xl items-center"
        style={{
          backgroundColor: '#FFFFFF',
          borderWidth: 2,
          borderColor: isSelected ? '#6366F1' : '#F3F4F6',
        }}
      >
        <View className="relative mb-3">
          <View className="w-20 h-20 rounded-full overflow-hidden">
            <Image
              source={{ uri: interviewer.avatar }}
              className="w-full h-full"
              resizeMode="cover"
            />
          </View>
          {/* AI Badge */}
          <View
            className="absolute rounded-full px-2 py-1"
            style={{
              backgroundColor: isSelected ? '#6366F1' : '#6366F1',
              bottom: -4,
              left: '50%',
              marginLeft: -12,
            }}
          >
            <Text className="text-white font-bold text-xs">AI</Text>
          </View>
        </View>
        <Text
          className="font-semibold text-lg mb-1"
          style={{ color: isSelected ? '#111827' : '#111827' }}
        >
          {interviewer.name}
        </Text>
        <Text
          className="text-sm text-center"
          style={{ color: isSelected ? '#6B7280' : '#6B7280' }}
        >
          {interviewer.speciality}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AIInterviewerCard;
