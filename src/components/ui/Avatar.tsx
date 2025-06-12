import React from 'react';
import { View, Image } from 'react-native';

interface AvatarProps {
  size?: number;
  className?: string;
}

const Avatar = ({ size = 40, className = '' }: AvatarProps) => {
  return (
    <View
      className={`rounded-full overflow-hidden bg-blue-100 items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        // source={require('@/assets/images/icon.png')}
        className="w-full h-full"
        resizeMode="cover"
      />
    </View>
  );
};

export default Avatar;
