import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useLoadingDots } from '../../src/hooks/useLoadingDots';

export default function InterviewCallScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [timer, setTimer] = useState('00:15:30');
  const insets = useSafeAreaInsets();
  const { dot1, dot2, dot3, startAnimation, stopAnimation } = useLoadingDots();
  // Messages data
  const messages = [
    {
      id: '1',
      text: 'Xin chào! Tôi là AI phỏng vấn. Hãy giới thiệu về bản thân và kinh nghiệm của bạn trong lĩnh vực Frontend Development.',
      isUser: false,
      timestamp: '09:41',
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {}, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    startAnimation();
    return () => {
      stopAnimation();
    };
  }, []);
  return (
    <View className="flex-1">
      <LinearGradient
        colors={['#6366F1', '#4F46E5']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="w-full items-center justify-center pt-10 pb-24"
        style={{
          paddingTop: insets.top + 10,
          alignItems: 'center',
          height: 'auto',
          minHeight: 350,
        }}
      >
        <Text className="text-white font-semibold text-2xl mb-1 text-center">
          Mock Interview
        </Text>
        <Text className="text-white/90 text-sm mb-10 text-center">
          AI Phỏng vấn - Frontend Developer
        </Text>
        {/* Avatar */}
        <View className="w-28 h-28 rounded-full overflow-hidden mb-6 border-2 border-white">
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=280&h=280&fit=crop&crop=face',
            }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
        {/* Timer */}
        <View className="flex-row items-center mb-3 justify-center">
          <Ionicons name="time-outline" size={20} color="white" />
          <Text className="text-white font-medium text-base ml-2">{timer}</Text>
        </View>
        {/* Status */}
        <View className="flex-row items-center justify-center mb-4">
          <View className="w-2.5 h-2.5 rounded-full bg-green-500 mr-2" />
          <Text className="text-green-400 font-medium">Đang phỏng vấn</Text>
        </View>
      </LinearGradient>
      <View className="flex-1 bg-white rounded-t-3xl -mt-8 px-5 pt-6">
        {/* Chat Messages */}
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          {messages.map((msg) => (
            <View key={msg.id} className="mb-4">
              <View
                className={`flex-row ${
                  msg.isUser ? 'justify-end' : 'justify-start'
                }`}
              >
                {!msg.isUser && (
                  <View className="mr-3 mt-1">
                    <View className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                      <Image
                        source={{
                          uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
                        }}
                        className="w-full h-full"
                        resizeMode="cover"
                      />
                    </View>
                  </View>
                )}
                <View
                  className={`max-w-[75%] ${
                    msg.isUser ? 'items-end' : 'items-start'
                  }`}
                >
                  {msg.isUser ? (
                    <LinearGradient
                      colors={['#6366F1', '#4F46E5']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      style={{
                        borderRadius: 20,
                        borderBottomRightRadius: 6,
                        paddingHorizontal: 24,
                        paddingVertical: 12,
                      }}
                    >
                      <Text className="text-white leading-6 text-xl">
                        {msg.text}
                      </Text>
                    </LinearGradient>
                  ) : (
                    <View
                      style={{
                        backgroundColor: '#F3F4F6',
                        borderRadius: 20,
                        borderBottomLeftRadius: 6,
                        paddingHorizontal: 24,
                        paddingVertical: 12,
                      }}
                    >
                      <Text className="text-gray-800 leading-6 text-xl">
                        {msg.text}
                      </Text>
                    </View>
                  )}
                  <Text className="text-gray-400 text-xs mt-1 px-2">
                    {msg.timestamp}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
        <View className="py-6 items-center">
          <View className="flex-row items-center justify-center">
            <Animated.View
              className="w-3 h-3 bg-indigo-500 rounded-full mr-2"
              style={{
                opacity: dot1,
                transform: [
                  {
                    scale: dot1.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.8, 1.2],
                    }),
                  },
                ],
              }}
            />
            <Animated.View
              className="w-3 h-3 bg-indigo-500 rounded-full mr-2"
              style={{
                opacity: dot2,
                transform: [
                  {
                    scale: dot2.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.8, 1.2],
                    }),
                  },
                ],
              }}
            />
            <Animated.View
              className="w-3 h-3 bg-indigo-500 rounded-full mr-3"
              style={{
                opacity: dot3,
                transform: [
                  {
                    scale: dot3.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.8, 1.2],
                    }),
                  },
                ],
              }}
            />
            <Text className="text-indigo-500 font-medium text-base">
              Đang ghi âm...
            </Text>
          </View>
        </View>
        {/* Bottom Toolbar */}
        <View className="pb-8 pt-6 bg-white">
          <View className="flex-row justify-around items-center">
            <Pressable className="w-16 h-16 bg-gray-100 rounded-full items-center justify-center">
              <Ionicons name="videocam" size={26} color="#6366F1" />
            </Pressable>

            <Pressable className="w-16 h-16 bg-gray-100 rounded-full items-center justify-center">
              <Ionicons name="mic" size={26} color="#6366F1" />
            </Pressable>

            <Pressable
              className="w-20 h-20 bg-red-500 rounded-full items-center justify-center"
              onPress={() => router.back()}
            >
              <Ionicons
                name="call"
                size={32}
                color="white"
                style={{ transform: [{ rotate: '135deg' }] }}
              />
            </Pressable>

            <Pressable className="w-16 h-16 bg-gray-100 rounded-full items-center justify-center">
              <Ionicons name="ellipsis-vertical" size={26} color="#6366F1" />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
