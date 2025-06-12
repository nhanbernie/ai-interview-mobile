import { View, TextInput, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Typography } from '@/components/ui';
import { Ionicons } from '@expo/vector-icons';
import Avatar from '@/components/ui/Avatar';
import { useState, useRef, useEffect } from 'react';
// import { RootStackParamList } from '@/hooks/useFeatureNavigation';
import { LinearGradient } from 'expo-linear-gradient';
import { Message, MOCK_CHAT_MESSAGES } from '@/constants/chatMessages';

// type ChatScreenRouteProp = RouteProp<RootStackParamList, 'chat'>;

export default function ChatScreen() {
  const navigation = useNavigation();
  // const route = useRoute<ChatScreenRouteProp>();
  const scrollViewRef = useRef<ScrollView>(null);
  const [inputMessage, setInputMessage] = useState('');

  const [messages, setMessages] = useState<Message[]>(MOCK_CHAT_MESSAGES);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  const handleSend = () => {
    if (!inputMessage.trim()) return;
    const newMessage: Message = {
      id: (messages.length + 1).toString(),
      text: inputMessage.trim(),
      isUser: true,
      timestamp: new Date().toLocaleTimeString('vi-VN', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputMessage('');
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center px-5 py-4 border-b border-gray-100">
        <Pressable onPress={() => navigation.goBack()} className="mr-4">
          <Ionicons name="chevron-back" size={26} color="black" />
        </Pressable>

        <Avatar size={40} />
        <View className="ml-4 flex-1">
          <Typography
            variant="h3"
            className="text-gray-900 font-medium text-lg"
          >
            AI Chat Assistant
          </Typography>
          <Typography variant="small" className="text-gray-500 text-sm">
            Trợ lý AI thông minh cho việc học tập
          </Typography>
        </View>
        <Pressable className="ml-2">
          <Ionicons name="time-outline" size={26} color="#6366F1" />
        </Pressable>
      </View>

      {/* Chat Messages */}
      <ScrollView
        ref={scrollViewRef}
        className="flex-1 px-5 py-4"
        showsVerticalScrollIndicator={false}
      >
        {messages.map((msg) => (
          <View key={msg.id} className="mb-6">
            <View
              className={`flex-row ${
                msg.isUser ? 'justify-end' : 'justify-start'
              }`}
            >
              {!msg.isUser && (
                <View className="mr-3">
                  <Avatar size={36} />
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
                      borderRadius: 16,
                      borderBottomRightRadius: 6,
                      paddingHorizontal: 20,
                      paddingVertical: 16,
                    }}
                  >
                    <Typography
                      variant="body"
                      className="text-white text-lg leading-6"
                    >
                      {msg.text}
                    </Typography>
                  </LinearGradient>
                ) : (
                  <View
                    style={{
                      backgroundColor: '#F3F4F6',
                      borderRadius: 16,
                      borderBottomLeftRadius: 6,
                      paddingHorizontal: 20,
                      paddingVertical: 16,
                    }}
                  >
                    <Typography
                      variant="body"
                      className="text-gray-800 text-lg leading-6"
                    >
                      {msg.text}
                    </Typography>
                  </View>
                )}
                <Typography
                  variant="small"
                  className="text-gray-400 text-base mt-2 px-2"
                >
                  {msg.timestamp}
                </Typography>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Input Area */}
      <View className="px-5 py-4 bg-white border-t border-gray-100">
        <View className="flex-row items-center">
          <TextInput
            placeholder="Nhập tin nhắn..."
            className="flex-1 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full px-4 py-3.5 mr-3 text-lg"
            value={inputMessage}
            onChangeText={setInputMessage}
            multiline
            maxLength={500}
            placeholderTextColor="#9CA3AF"
            style={{ minHeight: 44 }}
          />
          <Pressable onPress={handleSend}>
            <LinearGradient
              colors={['#6366F1', '#4F46E5']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                width: 44,
                height: 44,
                borderRadius: 22,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Ionicons name="send" size={18} color="white" />
            </LinearGradient>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
