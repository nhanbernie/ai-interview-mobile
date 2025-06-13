import React from 'react';
import { View, ActivityIndicator } from 'react-native';

interface LoadingProps {
  size?: 'small' | 'large';
  color?: string;
}

const Loading = ({ size = 'large', color = '#6366F1' }: LoadingProps) => {
  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loading;
