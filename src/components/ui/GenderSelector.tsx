import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { GenderType } from '@/common/types/aiInterviewer.model';

interface GenderSelectorProps {
  selectedGender: GenderType;
  onGenderChange: (gender: GenderType) => void;
}

const GenderSelector = ({
  selectedGender,
  onGenderChange,
}: GenderSelectorProps) => {
  return (
    <View className="mb-6">
      <View
        className="bg-white p-1 rounded-2xl flex-row"
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 4,
        }}
      >
        <TouchableOpacity
          onPress={() => onGenderChange('male')}
          className="flex-1"
        >
          {selectedGender === 'male' ? (
            <LinearGradient
              colors={['#6366F1', '#4F46E5']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                paddingVertical: 12,
                paddingHorizontal: 16,
                borderRadius: 12,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Ionicons name="male" size={20} color="white" />
              <Text className="text-white font-semibold ml-2">Nam</Text>
            </LinearGradient>
          ) : (
            <View className="py-3 px-4 flex-row items-center justify-center">
              <Ionicons name="male" size={20} color="#6B7280" />
              <Text className="text-gray-600 font-medium ml-2">Nam</Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onGenderChange('female')}
          className="flex-1"
        >
          {selectedGender === 'female' ? (
            <LinearGradient
              colors={['#6366F1', '#4F46E5']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                paddingVertical: 12,
                paddingHorizontal: 16,
                borderRadius: 12,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Ionicons name="female" size={20} color="white" />
              <Text className="text-white font-semibold ml-2">Nữ</Text>
            </LinearGradient>
          ) : (
            <View className="py-3 px-4 flex-row items-center justify-center">
              <Ionicons name="female" size={20} color="#6B7280" />
              <Text className="text-gray-600 font-medium ml-2">Nữ</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GenderSelector;
