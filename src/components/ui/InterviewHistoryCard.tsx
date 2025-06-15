import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from '@/components/ui';

interface InterviewHistory {
  id: string;
  position: string;
  date: string;
  interviewer: {
    name: string;
    avatar: string;
  };
}

interface InterviewHistoryCardProps {
  item: InterviewHistory;
  onContinue: (id: string) => void;
}

const InterviewHistoryCard: React.FC<InterviewHistoryCardProps> = ({
  item,
  onContinue,
}) => {
  return (
    <View className="bg-white rounded-xl border border-[#E5E7EB] mb-4 overflow-hidden">
      <View className="p-4">
        <View className="mb-2">
          <Text className="text-gray-900 font-semibold text-lg">
            {item.position}
          </Text>
          <Text className="text-[#6B7280] text-sm">{item.date}</Text>
        </View>
        <View className="flex-row items-center mt-2">
          <View className="mr-2">
            <Avatar
              size={32}
              imageUrl={item.interviewer.avatar}
              borderColor="#E5E7EB"
            />
          </View>
          <Text className="text-gray-700">{item.interviewer.name}</Text>
        </View>
        <TouchableOpacity
          onPress={() => onContinue(item.id)}
          className="bg-indigo-600 py-4 items-center rounded-xl mt-4"
        >
          <Text className="text-white font-medium text-base">
            Tiếp tục cuộc trò chuyện
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InterviewHistoryCard;
