import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { HeaderTitle } from '@/components/ui';
import FormActions from '@/components/form/FormActions';
import FileUploadArea from '@/components/form/FileUploadArea';
import LinkInputField from '@/components/form/LinkInputField';

export default function CvJdUploadScreen() {
  const insets = useSafeAreaInsets();
  const [cvUploadMethod, setCvUploadMethod] = useState<'file' | 'link'>('file');
  const [jdUploadMethod, setJdUploadMethod] = useState<'file' | 'link'>('file');
  const [cvFile, setCvFile] = useState<string | null>(null);
  const [jdFile, setJdFile] = useState<string | null>(null);
  const [cvLink, setCvLink] = useState<string>('');
  const [jdLink, setJdLink] = useState<string>('');

  const handleContinue = () => {
    // Process the CV and JD data
    const cvData = cvUploadMethod === 'file' ? cvFile : cvLink;
    const jdData = jdUploadMethod === 'file' ? jdFile : jdLink;

    console.log('CV Data:', cvData);
    console.log('JD Data:', jdData);

    // Navigate to the next screen (AI interviewer selection)
    router.push('/ai-interviewer-selection');
  };

  const handleCancel = () => {
    router.back();
  };

  const isFormValid = () => {
    if (cvUploadMethod === 'file' && !cvFile) return false;
    if (cvUploadMethod === 'link' && !cvLink) return false;
    if (jdUploadMethod === 'file' && !jdFile) return false;
    if (jdUploadMethod === 'link' && !jdLink) return false;
    return true;
  };

  return (
    <View className="flex-1 bg-indigo-600">
      {/* Header */}
      <View
        className="bg-indigo-600 px-5 py-4"
        style={{ paddingTop: insets.top }}
      >
        <HeaderTitle title="Tải lên CV & JD" showBackButton={true} />
      </View>

      {/* Content */}
      <View className="flex-1 bg-white rounded-t-3xl">
        <ScrollView
          className="flex-1"
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 28,
            paddingBottom: 160,
          }}
          showsVerticalScrollIndicator={false}
        >
          <Text className="text-2xl font-semibold text-gray-800 mb-3">
            Phỏng vấn dựa trên CV và JD
          </Text>
          <Text className="text-gray-600 text-lg mb-8">
            Tải CV và JD lên để nhận câu hỏi phù hợp với vị trí tuyển dụng
          </Text>
          {/* CV Upload Section */}
          <View className="mb-6">
            <Text className="text-gray-800 font-semibold text-lg mb-3">
              Curriculum Vitae (CV)
            </Text>
            <View className="flex-row mb-4 w-full overflow-hidden rounded-xl border-2 border-indigo-100">
              <TouchableOpacity
                onPress={() => setCvUploadMethod('file')}
                className={`flex-1 py-3.5 items-center ${
                  cvUploadMethod === 'file' ? 'bg-indigo-600' : 'bg-white'
                }`}
                style={{ borderRightWidth: 1, borderRightColor: '#e0e7ff' }}
              >
                <Text
                  className={`${
                    cvUploadMethod === 'file' ? 'text-white' : 'text-gray-700'
                  } text-base font-medium`}
                >
                  Tải tệp lên
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setCvUploadMethod('link')}
                className={`flex-1 py-3.5 items-center ${
                  cvUploadMethod === 'link' ? 'bg-indigo-600' : 'bg-white'
                }`}
              >
                <Text
                  className={`${
                    cvUploadMethod === 'link' ? 'text-white' : 'text-gray-700'
                  } text-base font-medium`}
                >
                  Nhập link
                </Text>
              </TouchableOpacity>
            </View>
            {cvUploadMethod === 'file' ? (
              <FileUploadArea
                onFileSelect={(fileName) => setCvFile(fileName)}
                selectedFile={cvFile}
                fileTypes="PDF, DOC, DOCX (Tối đa 10MB)"
              />
            ) : (
              <LinkInputField
                value={cvLink}
                onChangeText={setCvLink}
                placeholder="Nhập link CV"
              />
            )}
          </View>
          {/* JD Upload Section */}
          <View className="mb-6">
            <Text className="text-gray-800 font-semibold text-lg mb-3">
              Job Description (JD)
            </Text>
            <View className="flex-row mb-4 w-full overflow-hidden rounded-xl border-2 border-indigo-100">
              <TouchableOpacity
                onPress={() => setJdUploadMethod('file')}
                className={`flex-1 py-3.5 items-center ${
                  jdUploadMethod === 'file' ? 'bg-indigo-600' : 'bg-white'
                }`}
                style={{ borderRightWidth: 1, borderRightColor: '#e0e7ff' }}
              >
                <Text
                  className={`${
                    jdUploadMethod === 'file' ? 'text-white' : 'text-gray-700'
                  } text-base font-medium`}
                >
                  Tải tệp lên
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setJdUploadMethod('link')}
                className={`flex-1 py-3.5 items-center ${
                  jdUploadMethod === 'link' ? 'bg-indigo-600' : 'bg-white'
                }`}
              >
                <Text
                  className={`${
                    jdUploadMethod === 'link' ? 'text-white' : 'text-gray-700'
                  } text-base font-medium`}
                >
                  Nhập link
                </Text>
              </TouchableOpacity>
            </View>
            {jdUploadMethod === 'file' ? (
              <FileUploadArea
                onFileSelect={(fileName) => setJdFile(fileName)}
                selectedFile={jdFile}
                fileTypes="PDF, DOC, DOCX (Tối đa 10MB)"
              />
            ) : (
              <LinkInputField
                value={jdLink}
                onChangeText={setJdLink}
                placeholder="Nhập link JD"
              />
            )}
          </View>
        </ScrollView>
        {/* Bottom Actions */}
        <FormActions
          primaryText="Tiếp tục"
          secondaryText="Huỷ bỏ"
          onPrimaryPress={handleContinue}
          onSecondaryPress={handleCancel}
          isPrimaryEnabled={isFormValid()}
          showSecondary={true}
        />
      </View>
    </View>
  );
}
