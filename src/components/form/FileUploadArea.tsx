import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';

interface FileUploadAreaProps {
  onFileSelect: (fileName: string) => void;
  selectedFile: string | null;
  fileTypes: string;
}

const FileUploadArea: React.FC<FileUploadAreaProps> = ({
  onFileSelect,
  selectedFile,
  fileTypes,
}) => {
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: [
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ],
        copyToCacheDirectory: true,
      });

      if (result.assets && result.assets.length > 0) {
        const file = result.assets[0];
        onFileSelect(file.name);
      }
    } catch (err) {
      console.log('Error picking document:', err);
    }
  };
  return (
    <View className="border-[3px] border-dashed border-indigo-500 rounded-xl p-8 items-center justify-center">
      <View className="mb-6">
        <Ionicons name="cloud-upload-outline" size={48} color="#4F46E5" />
      </View>

      {!selectedFile ? (
        <>
          <Text className="text-gray-800 font-medium text-xl text-center mb-3">
            Kéo thả file hoặc chọn từ thiết bị
          </Text>
          <Text className="text-gray-500 text-center text-lg mb-8">
            {fileTypes}
          </Text>
          <TouchableOpacity
            onPress={pickDocument}
            className="border-2 border-indigo-500 rounded-lg py-3.5 px-10"
          >
            <Text className="text-indigo-600 font-medium text-lg">
              Chọn file
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <View className="flex-row items-center bg-blue-50 p-4 rounded-lg mb-4 w-full">
            <Ionicons name="document-outline" size={24} color="#4F46E5" />
            <Text
              className="text-gray-800 ml-3 flex-1 text-lg"
              numberOfLines={1}
            >
              {selectedFile}
            </Text>
            <TouchableOpacity onPress={() => onFileSelect('')}>
              <Ionicons name="close-circle" size={24} color="#6B7280" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={pickDocument}
            className="border-2 border-indigo-500 rounded-lg py-3 px-6"
          >
            <Text className="text-indigo-600 text-lg">Chọn file khác</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default FileUploadArea;
