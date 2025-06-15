import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Typography } from '@/components/ui';
import Avatar from '@/components/ui/Avatar';
import { useFeatureNavigation } from '@/hooks/useFeatureNavigation';
import { FEATURES } from '@/constants/features';

const additionalMenuItems = [
  {
    id: 'home',
    title: 'Trang chủ',
    icon: 'home-outline',
    type: 'home' as const,
  },
];

const settingsItems = [
  {
    id: 'settings',
    title: 'Cài đặt',
    icon: 'settings-outline',
  },
  {
    id: 'help',
    title: 'Trợ giúp',
    icon: 'help-circle-outline',
  },
  {
    id: 'logout',
    title: 'Đăng xuất',
    icon: 'log-out-outline',
  },
];

export default function CustomDrawerContent(
  props: DrawerContentComponentProps
) {
  const { navigateToFeature } = useFeatureNavigation();
  return (
    <View className="flex-1 bg-white">
      {/* Safe Area for Header */}
      <SafeAreaView style={{ backgroundColor: '#FFFFFF' }} edges={['top']}>
        <View className="px-4 pt-2 pb-4 bg-white">
          <View className="bg-white rounded-2xl p-4 border border-gray-100">
            <View className="flex-row items-center">
              <Avatar size={48} />
              <View className="ml-3 flex-1">
                <Typography
                  variant="h3"
                  className="text-gray-900 font-semibold text-lg"
                >
                  John Doe
                </Typography>
                <Typography
                  variant="small"
                  className="text-gray-500 text-sm mt-0.5"
                >
                  john.doe@email.com
                </Typography>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
      {/* Content Area with Footer at Bottom */}
      <View className="flex-1">
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={{
            paddingTop: 0,
            flexGrow: 1,
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* Main Menu Items */}
          <View className="px-1 pt-2">
            <Typography
              variant="small"
              className="text-gray-500 uppercase tracking-wide font-medium text-xs px-3 mb-2"
            >
              MENU CHÍNH
            </Typography>

            {/* Home */}
            {additionalMenuItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                className="flex-row items-center px-3 py-3 mx-1 rounded-xl mb-1 active:bg-gray-50"
                onPress={() => {
                  props.navigation.closeDrawer();
                  props.navigation.navigate('(main)' as never);
                }}
              >
                <View className="w-8 h-8 rounded-full bg-gray-100 items-center justify-center mr-3">
                  <Ionicons name={item.icon as any} size={18} color="#6B7280" />
                </View>
                <Typography
                  variant="body"
                  className="text-gray-700 font-medium text-base flex-1"
                >
                  {item.title}
                </Typography>
              </TouchableOpacity>
            ))}

            {/* Features */}
            {FEATURES.map((feature) => (
              <TouchableOpacity
                key={feature.id}
                className="flex-row items-center px-3 py-3 mx-1 rounded-xl mb-1 active:bg-gray-50"
                onPress={() => {
                  props.navigation.closeDrawer();
                  navigateToFeature(feature);
                }}
              >
                <View className="w-8 h-8 rounded-full bg-gray-100 items-center justify-center mr-3">
                  <Ionicons
                    name={feature.icon as any}
                    size={18}
                    color="#6B7280"
                  />
                </View>
                <Typography
                  variant="body"
                  className="text-gray-700 font-medium text-base flex-1"
                >
                  {feature.title}
                </Typography>
              </TouchableOpacity>
            ))}
          </View>

          {/* Divider */}
          <View className="mx-3 my-3 h-px bg-gray-200" />

          {/* Settings Section */}
          <View className="px-1 flex-1">
            <Typography
              variant="small"
              className="text-gray-500 uppercase tracking-wide font-medium text-xs px-3 mb-2"
            >
              CÀI ĐẶT
            </Typography>

            {settingsItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                className="flex-row items-center px-3 py-3 mx-1 rounded-xl mb-1 active:bg-gray-50"
              >
                <View className="w-8 h-8 rounded-full bg-gray-100 items-center justify-center mr-3">
                  <Ionicons name={item.icon as any} size={18} color="#6B7280" />
                </View>
                <Typography
                  variant="body"
                  className={`font-medium text-base flex-1 ${
                    item.id === 'logout' ? 'text-red-500' : 'text-gray-700'
                  }`}
                >
                  {item.title}
                </Typography>
              </TouchableOpacity>
            ))}
          </View>
        </DrawerContentScrollView>

        {/* Footer - Always at Bottom */}
        <View className="px-3 py-4 border-t border-gray-100">
          <View className="bg-gray-50 rounded-xl p-3">
            <Typography
              variant="small"
              className="text-gray-600 text-center text-xs"
            >
              AI Interview Pro v1.0.0
            </Typography>
            <Typography
              variant="small"
              className="text-gray-500 text-center text-xs mt-1"
            >
              © 2025 All rights reserved
            </Typography>
          </View>
        </View>
      </View>
    </View>
  );
}
