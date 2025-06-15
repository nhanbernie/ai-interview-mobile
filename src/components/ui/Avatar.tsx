import { View, Image, TouchableOpacity } from 'react-native';

interface AvatarProps {
  size?: number;
  className?: string;
  imageUrl?: string;
  onPress?: () => void;
  borderColor?: string;
}

const Avatar = ({
  size = 40,
  className = '',
  imageUrl = 'https://randomuser.me/api/portraits/men/36.jpg',
  onPress,
  borderColor = '#E5E7EB',
}: AvatarProps) => {
  const content = (
    <View
      className={`rounded-full overflow-hidden items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
        borderWidth: 2,
        borderColor: borderColor,
      }}
    >
      <Image
        source={{ uri: imageUrl }}
        className="w-full h-full"
        resizeMode="cover"
      />
    </View>
  );

  if (onPress) {
    return <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>;
  }

  return content;
};

export default Avatar;
