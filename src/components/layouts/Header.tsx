import { DrawerActions, useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Typography, Avatar } from '@/components/ui';
import { UserProfileModal } from '@/components/modal';

const Header = () => {
  const navigation = useNavigation();
  const [isProfileModalVisible, setProfileModalVisible] = useState(false);

  // Mock user data
  const userData = {
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
    stats: {
      interviews: 24,
      totalTime: '48h',
      days: 7,
    },
  };

  const toggleDrawer = () => {
    const parent = navigation.getParent();

    if (parent) {
      navigation.dispatch(DrawerActions.toggleDrawer());
    } else {
      console.warn('Drawer is not available on this screen.');
    }
  };

  const handleLogout = () => {
    console.log('User logged out');
    // Implement logout logic
    setProfileModalVisible(false);
  };

  const handleSettings = () => {
    console.log('Navigate to settings');
    // Navigate to settings screen
    setProfileModalVisible(false);
  };

  return (
    <View
      className="flex-row items-center justify-between px-5 py-4 bg-white"
      style={{
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
      }}
    >
      {/* Left side - Menu and App name */}
      <View className="flex-row items-center flex-1">
        <TouchableOpacity
          onPress={toggleDrawer}
          className="w-10 h-10 mr-4 items-center justify-center rounded-lg bg-white active:bg-gray-50"
          style={{
            borderWidth: 1,
            borderColor: '#F3F4F6',
          }}
        >
          <Ionicons name="menu" size={20} color="#374151" />
        </TouchableOpacity>

        <View className="flex-1">
          <Typography
            variant="h3"
            className="text-gray-900 font-semibold text-lg"
          >
            AI Interview Pro
          </Typography>
        </View>
      </View>
      {/* Right side - Avatar */}
      <View className="flex-row items-center">
        <Avatar
          size={36}
          imageUrl={userData.avatar}
          onPress={() => setProfileModalVisible(true)}
          borderColor="#E5E7EB"
        />
      </View>
      {/* User Profile Modal */}
      <UserProfileModal
        visible={isProfileModalVisible}
        onClose={() => setProfileModalVisible(false)}
        onLogout={handleLogout}
        onSettings={handleSettings}
        userData={userData}
      />
    </View>
  );
};

export default Header;
