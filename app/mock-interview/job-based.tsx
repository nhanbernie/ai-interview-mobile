import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const JobBasedInterviewScreen = () => {
  const handleGoBack = () => {
    router.back();
  };

  return (
    <View className="flex-1">
      <LinearGradient
        colors={['#8B5CF6', '#A855F7']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        className="flex-1"
      >
        <StatusBar barStyle="light-content" backgroundColor="#8B5CF6" />
        <SafeAreaView className="flex-1">
          {/* Header */}
          <View className="flex-row items-center px-4 py-4">
            <TouchableOpacity onPress={handleGoBack} className="mr-3">
              <Ionicons name="chevron-back" size={24} color="white" />
            </TouchableOpacity>
            <Text className="text-white text-lg font-semibold">
              Phỏng vấn dựa trên CV
            </Text>
          </View>

          {/* Content */}
          <ScrollView
            className="flex-1 px-4"
            showsVerticalScrollIndicator={false}
          >
            <Text className="text-white text-center text-base mb-8">
              Tính năng này đang được phát triển...
            </Text>

            <View className="bg-white/20 rounded-xl p-6">
              <Text className="text-white text-lg font-semibold mb-4">
                Sắp ra mắt
              </Text>
              <Text className="text-white/90 text-sm">
                Chúng tôi đang phát triển tính năng phỏng vấn dựa trên CV và JD.
                Vui lòng quay lại sau hoặc thử các tính năng khác.
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

export default JobBasedInterviewScreen;
