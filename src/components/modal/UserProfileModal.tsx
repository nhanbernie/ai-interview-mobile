import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface UserProfileModalProps {
  visible: boolean;
  onClose: () => void;
  onLogout: () => void;
  onSettings: () => void;
  userData: {
    name: string;
    email: string;
    avatar: string;
    stats: {
      interviews: number;
      totalTime: string;
      days: number;
    };
  };
}

const UserProfileModal: React.FC<UserProfileModalProps> = ({
  visible,
  onClose,
  onLogout,
  onSettings,
  userData,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View
          style={styles.modalContainer}
          className="bg-white rounded-3xl p-6 w-[90%] max-w-[420px]"
        >
          {/* Close button */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={onClose}
            className="absolute top-5 right-5 p-2"
          >
            <Ionicons name="close" size={24} color="#6B7280" />
          </TouchableOpacity>
          {/* User info */}
          <View className="items-center mb-8">
            <Image
              source={{ uri: userData.avatar }}
              className="w-24 h-24 rounded-full mb-3"
            />
            <Text className="text-gray-900 font-semibold text-xl">
              {userData.name}
            </Text>
            <Text className="text-gray-500 text-base">{userData.email}</Text>
          </View>
          {/* Stats */}
          <View className="flex-row justify-between mb-8">
            <View className="items-center flex-1">
              <Text className="text-indigo-500 font-semibold text-xl">
                {userData.stats.interviews}
              </Text>
              <Text className="text-gray-600">Phỏng vấn</Text>
            </View>
            <View className="items-center flex-1">
              <Text className="text-indigo-500 font-semibold text-xl">
                {userData.stats.totalTime}
              </Text>
              <Text className="text-gray-600">Tổng thời gian</Text>
            </View>
            <View className="items-center flex-1">
              <Text className="text-indigo-500 font-semibold text-xl">
                {userData.stats.days}
              </Text>
              <Text className="text-gray-600">Ngày liên tiếp</Text>
            </View>
          </View>
          {/* Settings button */}
          <TouchableOpacity
            onPress={onSettings}
            className="flex-row items-center py-3 px-4 rounded-xl mb-3"
          >
            <Ionicons name="settings-outline" size={20} color="#374151" />
            <Text className="ml-2 text-gray-700 font-medium">
              Cài đặt tài khoản
            </Text>
          </TouchableOpacity>
          {/* Logout button */}
          <TouchableOpacity
            onPress={onLogout}
            className="flex-row items-center py-3 px-4 rounded-xl"
          >
            <Ionicons name="log-out-outline" size={20} color="#EF4444" />
            <Text className="ml-2 text-red-500 font-medium">Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeButton: {
    zIndex: 1,
  },
});

export default UserProfileModal;
