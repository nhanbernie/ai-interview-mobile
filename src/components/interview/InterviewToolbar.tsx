import React from 'react';
import { View, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ToolbarAction {
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  size?: number;
  color?: string;
  backgroundColor?: string;
  isEndCall?: boolean;
}

interface InterviewToolbarProps {
  onCameraToggle?: () => void;
  onMicToggle?: () => void;
  onEndCall?: () => void;
  onMenuPress?: () => void;
  cameraEnabled?: boolean;
  micEnabled?: boolean;
  customActions?: ToolbarAction[];
}

export const InterviewToolbar: React.FC<InterviewToolbarProps> = ({
  onCameraToggle,
  onMicToggle,
  onEndCall,
  onMenuPress,
  cameraEnabled = true,
  micEnabled = true,
  customActions,
}) => {
  const defaultActions: ToolbarAction[] = [
    {
      icon: cameraEnabled ? 'videocam' : 'videocam-off',
      onPress: onCameraToggle || (() => {}),
      size: 24,
      color: '#6366F1',
      backgroundColor: '#E5E7EB',
    },
    {
      icon: micEnabled ? 'mic' : 'mic-off',
      onPress: onMicToggle || (() => {}),
      size: 24,
      color: '#6366F1',
      backgroundColor: '#E5E7EB',
    },
    {
      icon: 'call',
      onPress: onEndCall || (() => {}),
      size: 32,
      color: 'white',
      backgroundColor: '#EF4444',
      isEndCall: true,
    },
    {
      icon: 'ellipsis-vertical',
      onPress: onMenuPress || (() => {}),
      size: 24,
      color: '#6366F1',
      backgroundColor: '#E5E7EB',
    },
  ];

  const actions = customActions || defaultActions;

  return (
    <View className="py-10 bg-white">
      <View className="flex-row justify-around items-center">
        {actions.map((action, index) => (
          <Pressable
            key={index}
            className={`${
              action.isEndCall ? 'w-20 h-20' : 'w-16 h-16'
            } rounded-full items-center justify-center`}
            style={{ backgroundColor: action.backgroundColor }}
            onPress={action.onPress}
          >
            <Ionicons
              name={action.icon}
              size={action.size}
              color={action.color}
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
};
