import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useForm, Controller } from 'react-hook-form';
import { router } from 'expo-router';
import {
  HeaderTitle,
  Selection,
  SelectionModal,
  TextInputField,
} from '@/components/ui';
import FormActions from '@/components/form/FormActions';
import {
  LANGUAGE_OPTIONS,
  EXPERIENCE_OPTIONS,
  COMPANY_OPTIONS,
  SALARY_OPTIONS,
  WORK_TYPE_OPTIONS,
  OptionItem,
} from '@/common/constants/formOptions';

interface FormData {
  language: string;
  position: string;
  experience: string;
  company: string;
  salary: string;
  workType: string;
}

export default function FormBasedInterviewScreen() {
  const insets = useSafeAreaInsets();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: {
      language: '',
      position: '',
      experience: '',
      company: '',
      salary: '',
      workType: '',
    },
  });
  const onSubmit = (data: FormData) => {
    console.log('Form data:', data);
    router.push('/ai-interviewer-selection');
  };
  const getOptionLabel = (options: OptionItem[], value: string) => {
    return options.find((option) => option.value === value)?.label || '';
  };
  const handleSelectOption = (fieldName: keyof FormData, value: string) => {
    setValue(fieldName, value, { shouldValidate: true });
    setActiveModal(null);
  };

  return (
    <View className="flex-1 bg-indigo-600">
      {/* Header */}
      <View
        className="bg-indigo-600 px-5 py-4"
        style={{ paddingTop: insets.top }}
      >
        <HeaderTitle title="Tạo Phỏng Vấn" />
      </View>

      {/* Form Container */}
      <View className="flex-1 bg-white rounded-t-3xl">
        <ScrollView
          className="flex-1"
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 30,
            paddingBottom: 120,
          }}
          showsVerticalScrollIndicator={false}
        >
          <Controller
            control={control}
            name="language"
            rules={{ required: 'Vui lòng chọn ngôn ngữ' }}
            render={({ field: { value } }) => (
              <Selection
                label="Ngôn ngữ lập trình"
                placeholder="Chọn ngôn ngữ"
                value={getOptionLabel(LANGUAGE_OPTIONS, value)}
                onPress={() => setActiveModal('language')}
                error={errors.language?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="position"
            rules={{ required: 'Vui lòng nhập vị trí' }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInputField
                label="Vai trò mong muốn"
                placeholder="Ví dụ: Front-end Developer"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                error={errors.position?.message}
              />
            )}
          />
          {/* ...existing code... */}
          <Controller
            control={control}
            name="experience"
            rules={{ required: 'Vui lòng chọn mức độ kinh nghiệm' }}
            render={({ field: { value } }) => (
              <Selection
                label="Mức độ kinh nghiệm"
                placeholder="Chọn mức độ kinh nghiệm"
                value={getOptionLabel(EXPERIENCE_OPTIONS, value)}
                onPress={() => setActiveModal('experience')}
                error={errors.experience?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="company"
            rules={{ required: 'Vui lòng chọn quy mô công ty' }}
            render={({ field: { value } }) => (
              <Selection
                label="Quy mô công ty"
                placeholder="Chọn quy mô công ty"
                value={getOptionLabel(COMPANY_OPTIONS, value)}
                onPress={() => setActiveModal('company')}
                error={errors.company?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="salary"
            rules={{ required: 'Vui lòng chọn mức lương' }}
            render={({ field: { value } }) => (
              <Selection
                label="Mức lương mong muốn"
                placeholder="Chọn mức lương"
                value={getOptionLabel(SALARY_OPTIONS, value)}
                onPress={() => setActiveModal('salary')}
                error={errors.salary?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="workType"
            rules={{ required: 'Vui lòng chọn hình thức làm việc' }}
            render={({ field: { value } }) => (
              <Selection
                label="Hình thức làm việc"
                placeholder="Chọn hình thức làm việc"
                value={getOptionLabel(WORK_TYPE_OPTIONS, value)}
                onPress={() => setActiveModal('workType')}
                error={errors.workType?.message}
              />
            )}
          />
        </ScrollView>

        {/* Bottom Buttons */}
        <FormActions
          primaryText="Tiếp theo"
          secondaryText="Hủy"
          onPrimaryPress={handleSubmit(onSubmit)}
          onSecondaryPress={() => {
            // Handle cancel action
            console.log('Cancel pressed');
          }}
          isPrimaryEnabled={isValid}
          showSecondary={true}
        />
      </View>

      {/* Modals */}
      <SelectionModal
        visible={activeModal === 'language'}
        title="Chọn ngôn ngữ lập trình"
        options={LANGUAGE_OPTIONS}
        onSelect={(value) => handleSelectOption('language', value)}
        onClose={() => setActiveModal(null)}
      />

      <SelectionModal
        visible={activeModal === 'experience'}
        title="Chọn mức độ kinh nghiệm"
        options={EXPERIENCE_OPTIONS}
        onSelect={(value) => handleSelectOption('experience', value)}
        onClose={() => setActiveModal(null)}
      />

      <SelectionModal
        visible={activeModal === 'company'}
        title="Chọn quy mô công ty"
        options={COMPANY_OPTIONS}
        onSelect={(value) => handleSelectOption('company', value)}
        onClose={() => setActiveModal(null)}
      />

      <SelectionModal
        visible={activeModal === 'salary'}
        title="Chọn mức lương"
        options={SALARY_OPTIONS}
        onSelect={(value) => handleSelectOption('salary', value)}
        onClose={() => setActiveModal(null)}
      />

      <SelectionModal
        visible={activeModal === 'workType'}
        title="Chọn hình thức làm việc"
        options={WORK_TYPE_OPTIONS}
        onSelect={(value) => handleSelectOption('workType', value)}
        onClose={() => setActiveModal(null)}
      />
    </View>
  );
}
