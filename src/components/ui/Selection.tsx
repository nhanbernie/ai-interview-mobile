import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SelectionProps {
  label: string;
  placeholder: string;
  value?: string;
  onPress: () => void;
  error?: string;
}

const Selection = ({
  label,
  placeholder,
  value,
  onPress,
  error,
}: SelectionProps) => {
  return (
    <View className="mb-4">
      <Text className="text-gray-700 font-medium mb-2">{label}</Text>
      <TouchableOpacity
        onPress={onPress}
        className={`bg-gray-50 border ${
          error ? 'border-red-300' : 'border-gray-200'
        } rounded-2xl px-4 py-4 flex-row items-center justify-between`}
        style={{
          backgroundColor: '#F9FAFB',
          borderColor: error ? '#FCA5A5' : '#E5E7EB',
        }}
      >
        <Text
          className={`${value ? 'text-gray-900' : 'text-gray-500'}`}
        >
          {value || placeholder}
        </Text>
        <Ionicons name="chevron-down" size={20} color="#6B7280" />
      </TouchableOpacity>
      {error && <Text className="text-red-500 text-sm mt-1">{error}</Text>}
    </View>
  );
};

export default Selection;
