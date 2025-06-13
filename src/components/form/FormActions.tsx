import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

interface FormActionsProps {
  primaryText: string;
  secondaryText?: string;
  onPrimaryPress: () => void;
  onSecondaryPress?: () => void;
  isPrimaryEnabled?: boolean;
  isPrimaryLoading?: boolean;
  showSecondary?: boolean;
}

const FormActions = ({
  primaryText,
  secondaryText = 'Hủy',
  onPrimaryPress,
  onSecondaryPress,
  isPrimaryEnabled = true,
  isPrimaryLoading = false,
  showSecondary = true,
}: FormActionsProps) => {
  return (
    <View className="absolute bottom-2 left-0 right-0 bg-white px-5 py-5 border-t border-gray-100">
      <TouchableOpacity
        onPress={onPrimaryPress}
        className={`px-4 py-5 rounded-2xl ${
          isPrimaryEnabled ? 'bg-indigo-600' : 'bg-gray-300'
        }`}
        disabled={!isPrimaryEnabled || isPrimaryLoading}
      >
        <Text
          className={`text-center font-semibold ${
            isPrimaryEnabled ? 'text-white' : 'text-gray-500'
          }`}
        >
          {isPrimaryLoading ? 'Đang xử lý...' : primaryText}
        </Text>
      </TouchableOpacity>
      {showSecondary && (
        <TouchableOpacity
          className="px-4 py-5 mt-2 rounded-2xl bg-[#F3F4F6]"
          onPress={onSecondaryPress}
        >
          <Text className="text-center text-[#4B5563]">{secondaryText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default FormActions;
