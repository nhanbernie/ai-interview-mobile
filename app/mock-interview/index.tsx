// import React from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   TouchableOpacity,
//   SafeAreaView,
//   StatusBar,
// } from 'react-native';
// import { router } from 'expo-router';
// import { Ionicons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';

// interface InterviewOptionProps {
//   icon: keyof typeof Ionicons.glyphMap;
//   title: string;
//   description: string;
//   onPress: () => void;
// }

// const InterviewOption = ({
//   icon,
//   title,
//   description,
//   onPress,
// }: InterviewOptionProps) => {
//   return (
//     <TouchableOpacity
//       className="bg-white rounded-xl p-4 mb-3 mx-4"
//       onPress={onPress}
//       activeOpacity={0.8}
//       style={{
//         shadowColor: '#000',
//         shadowOffset: {
//           width: 0,
//           height: 2,
//         },
//         shadowOpacity: 0.1,
//         shadowRadius: 3.84,
//         elevation: 5,
//       }}
//     >
//       <View className="flex-row items-start">
//         <View className="w-10 h-10 bg-blue-500 rounded-lg items-center justify-center mr-3">
//           <Ionicons name={icon} size={20} color="white" />
//         </View>
//         <View className="flex-1">
//           <Text className="text-gray-900 text-base font-medium mb-1">
//             {title}
//           </Text>
//           <Text className="text-gray-600 text-sm leading-4" numberOfLines={2}>
//             {description}
//           </Text>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// };

// const MockInterviewScreen = () => {
//   const handleGoBack = () => {
//     router.back();
//   };
//   const interviewOptions = [
//     {
//       icon: 'document-text' as keyof typeof Ionicons.glyphMap,
//       title: 'Phỏng vấn dựa trên form',
//       description:
//         'Nhập thông tin để tạo câu hỏi phỏng vấn theo yêu cầu của bạn',
//       onPress: () => router.push('/mock-interview/form-based'),
//     },
//     {
//       icon: 'document' as keyof typeof Ionicons.glyphMap,
//       title: 'Phỏng vấn dựa trên CV',
//       description: 'Tải CV lên để nhận câu hỏi phù hợp với kinh nghiệm của bạn',
//       onPress: () => router.push('/mock-interview/cv-based'),
//     },
//     {
//       icon: 'car' as keyof typeof Ionicons.glyphMap,
//       title: 'Phỏng vấn dựa trên CV...',
//       description:
//         'Tải CV và JD lên để nhận câu hỏi phù hợp với vị trí tuyển dụng',
//       onPress: () => router.push('/mock-interview/job-based'),
//     },
//   ];
//   return (
//     <View className="flex-1">
//       <LinearGradient
//         colors={['#8B5CF6', '#A855F7']}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 0, y: 1 }}
//         className="flex-1"
//       >
//         <StatusBar barStyle="light-content" backgroundColor="#8B5CF6" />
//         <SafeAreaView className="flex-1">
//           {/* Header */}
//           <View className="flex-row items-center px-4 py-4">
//             <TouchableOpacity onPress={handleGoBack} className="mr-3">
//               <Ionicons name="chevron-back" size={24} color="white" />
//             </TouchableOpacity>
//             <Text className="text-white text-lg font-semibold">
//               Chọn Mock Interview
//             </Text>
//           </View>

//           {/* Subtitle */}
//           <View className="px-4 mb-6">
//             <Text className="text-white text-sm text-center opacity-90">
//               Lựa chọn phương thức phỏng vấn phù hợp với bạn
//             </Text>
//           </View>

//           {/* Interview Options */}
//           <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
//             {interviewOptions.map((option, index) => (
//               <InterviewOption
//                 key={index}
//                 icon={option.icon}
//                 title={option.title}
//                 description={option.description}
//                 onPress={option.onPress}
//               />
//             ))}
//           </ScrollView>
//         </SafeAreaView>
//       </LinearGradient>
//     </View>
//   );
// };

// export default MockInterviewScreen;

import { View, Text, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const mockOptions = [
  {
    id: 'form',
    title: 'Phỏng vấn dựa trên form',
    description: 'Nhập thông tin để tạo câu hỏi phỏng vấn theo yêu cầu của bạn',
  },
  {
    id: 'cv',
    title: 'Phỏng vấn dựa trên CV',
    description: 'Tải CV lên để nhận câu hỏi phù hợp với kinh nghiệm của bạn',
  },
  {
    id: 'cv-jd',
    title: 'Phỏng vấn dựa trên CV & JD',
    description:
      'Tải CV và JD lên để nhận câu hỏi phù hợp với vị trí tuyển dụng',
  },
];

export default function MockInterviewScreen() {
  const navigation = useNavigation();

  const handleSelect = (optionId: string) => {
    // Điều hướng tuỳ theo id
    // navigation.navigate('SomeScreen', { option: optionId });
    console.log('Selected:', optionId);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="bg-indigo-500 px-4 pt-4 pb-6 rounded-b-3xl">
        <Text className="text-white text-lg font-bold">
          Chọn Mock Interview
        </Text>
        <Text className="text-white text-sm mt-1">
          Lựa chọn phương thức phỏng vấn phù hợp với bạn
        </Text>
      </View>

      <ScrollView contentContainerClassName="p-4">
        {mockOptions.map((option) => (
          <Pressable
            key={option.id}
            onPress={() => handleSelect(option.id)}
            className="flex-row items-start p-4 bg-white rounded-2xl shadow-sm mb-4 border border-gray-200"
          >
            <View className="w-10 h-10 rounded-xl bg-indigo-100 items-center justify-center mr-3">
              <Ionicons
                name="document-text-outline"
                size={20}
                color="#6366f1"
              />
            </View>
            <View className="flex-1">
              <Text
                className="text-base font-semibold text-gray-900"
                numberOfLines={1}
              >
                {option.title}
              </Text>
              <Text className="text-sm text-gray-500 mt-1">
                {option.description}
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
