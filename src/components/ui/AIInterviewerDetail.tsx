import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AIInterviewer } from '@/common/types/aiInterviewer.model';

interface AIInterviewerDetailProps {
  interviewer: AIInterviewer;
}

const AIInterviewerDetail = ({ interviewer }: AIInterviewerDetailProps) => {
  return (
    <View className="mt-6 p-4 bg-white rounded-2xl">
      <View className="flex-row items-center mb-3">
        <View className="w-16 h-16 rounded-full mr-4 overflow-hidden">
          <Image
            source={{ uri: interviewer.avatar }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
        <View className="flex-1">
          <Text className="text-gray-900 font-semibold text-lg">
            {interviewer.name}
          </Text>
          <Text className="text-gray-600 text-sm">
            {interviewer.speciality}
          </Text>
          <View className="flex-row items-center mt-1">
            <View className="flex-row items-center mr-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Ionicons
                  key={star}
                  name="star"
                  size={12}
                  color={
                    star <= Math.floor(interviewer.rating)
                      ? '#F59E0B'
                      : '#D1D5DB'
                  }
                />
              ))}
              <Text className="text-gray-600 text-xs ml-1">
                {interviewer.rating}
              </Text>
            </View>
            <Text className="text-gray-500 text-xs">
              {interviewer.totalInterviews.toLocaleString()} lượt phỏng vấn
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AIInterviewerDetail;
