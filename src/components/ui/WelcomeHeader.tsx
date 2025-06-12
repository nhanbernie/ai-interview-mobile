import { View, Text } from 'react-native';

interface WelcomeHeaderProps {
  name: string;
}

const WelcomeHeader = ({ name }: WelcomeHeaderProps) => {
  return (
    <View className="my-6">
      <Text className="mb-1 text-4xl">Chào mừng trở lại,</Text>
      <Text className="font-bold text-4xl">{name}</Text>
    </View>
  );
};

export default WelcomeHeader;
