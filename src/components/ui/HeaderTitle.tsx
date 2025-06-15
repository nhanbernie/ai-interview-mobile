import { View, Pressable } from 'react-native';
import Typography from '@/components/ui/Typography';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

interface HeaderTitleProps {
  title?: string;
  subTitle?: string;
  showBackButton?: boolean;
}

const HeaderTitle = ({
  title,
  subTitle,
  showBackButton = true,
}: HeaderTitleProps) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    // Use router if available (for Expo Router), otherwise use navigation
    if (router) {
      router.back();
    } else if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View className="relative mt-6">
      {showBackButton && (
        <Pressable
          onPress={handleGoBack}
          className="absolute left-5 top-0 z-10"
        >
          <Ionicons name="chevron-back" size={24} color="white" />
        </Pressable>
      )}

      <View className="items-center px-10">
        <Typography
          variant="h2"
          className="text-white font-bold text-center mb-3"
        >
          {title}
        </Typography>
        {subTitle && (
          <Typography
            variant="h3"
            className="text-white text-center mt-1 opacity-80"
          >
            {subTitle}
          </Typography>
        )}
      </View>
    </View>
  );
};

export default HeaderTitle;
