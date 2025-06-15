import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface LinkInputFieldProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}

const LinkInputField: React.FC<LinkInputFieldProps> = ({
  value,
  onChangeText,
  placeholder,
}) => {
  const handleClear = () => {
    onChangeText('');
  };
  return (
    <View className="bg-white border-2 border-gray-200 rounded-lg flex-row items-center px-5 py-1">
      <Ionicons name="link-outline" size={24} color="#6B7280" />
      <TextInput
        className="flex-1 py-4 px-3 text-gray-800 text-lg"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {value ? (
        <TouchableOpacity onPress={handleClear}>
          <Ionicons name="close-circle" size={24} color="#6B7280" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default LinkInputField;
