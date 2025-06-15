import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { InterviewHistoryCard, Avatar } from '@/components/ui';
import { UserProfileModal } from '@/components/modal';
import { INTERVIEW_HISTORY } from '@/common/constants/interviewHistory';

export default function InterviewHistoryScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
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

  const handleContinueInterview = (id: string) => {
    // Xử lý khi người dùng nhấn tiếp tục cuộc trò chuyện
    console.log(`Continue interview with ID: ${id}`);
    router.push({
      pathname: '/interview-call/[id]',
      params: { id },
    });
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
    <View className="flex-1 bg-indigo-600">
      {/* Header */}
      <View
        className="bg-indigo-600 px-5 py-4"
        style={{ paddingTop: insets.top + 4 }}
      >
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <TouchableOpacity onPress={() => router.back()} className="mr-4">
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <Text className="text-white text-xl font-semibold">
              Lịch Sử Phỏng Vấn
            </Text>
          </View>
          {/* Profile Avatar */}
          <Avatar
            size={40}
            imageUrl={userData.avatar}
            onPress={() => setProfileModalVisible(true)}
            borderColor="#FFFFFF"
          />
        </View>
      </View>
      {/* User Profile Modal */}
      <UserProfileModal
        visible={isProfileModalVisible}
        onClose={() => setProfileModalVisible(false)}
        onLogout={handleLogout}
        onSettings={handleSettings}
        userData={userData}
      />
      {/* Content */}
      <View className="flex-1 bg-white rounded-t-3xl">
        <ScrollView
          className="flex-1"
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 24,
            paddingBottom: 40,
          }}
          showsVerticalScrollIndicator={false}
        >
          {INTERVIEW_HISTORY.map((item) => (
            <InterviewHistoryCard
              key={item.id}
              item={item}
              onContinue={handleContinueInterview}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
