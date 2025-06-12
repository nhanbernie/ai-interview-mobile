import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';

interface TextInputFieldProps extends TextInputProps {
  label: string;
  error?: string;
}

const TextInputField = ({
  label,
  error,
  className,
  ...textInputProps
}: TextInputFieldProps) => {
  return (
    <View className="mb-4">
      <Text className="text-gray-700 font-medium mb-2">{label}</Text>
      <TextInput
        className={`rounded-2xl px-4 py-4 ${className || ''}`}
        style={{
          backgroundColor: '#F9FAFB',
          borderWidth: 1,
          borderColor: error ? '#FCA5A5' : '#E5E7EB',
        }}
        {...textInputProps}
      />
      {error && <Text className="text-red-500 text-sm mt-1">{error}</Text>}
    </View>
  );
};

export default TextInputField;
