import { View, Pressable } from 'react-native';
import Typography from '@/components/ui/Typography';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface HeaderTitleProps {
  title?: string;
  subTitle?: string;
}

const HeaderTitle = ({ title, subTitle }: HeaderTitleProps) => {
  const navigation = useNavigation();

  return (
    <View className="relative mt-6">
      <Pressable
        onPress={() => navigation.goBack()}
        className="absolute left-5 top-0 z-10"
      >
        <Ionicons name="chevron-back" size={24} color="white" />
      </Pressable>

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
