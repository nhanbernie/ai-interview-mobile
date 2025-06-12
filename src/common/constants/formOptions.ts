export interface OptionItem {
  label: string;
  value: string;
}

export const LANGUAGE_OPTIONS: OptionItem[] = [
  { label: 'Tiếng Việt', value: 'vi' },
  { label: 'English', value: 'en' },
];

export const EXPERIENCE_OPTIONS: OptionItem[] = [
  { label: 'Fresher (0-1 năm)', value: 'fresher' },
  { label: 'Junior (1-3 năm)', value: 'junior' },
  { label: 'Middle (3-5 năm)', value: 'middle' },
  { label: 'Senior (5+ năm)', value: 'senior' },
];

export const COMPANY_OPTIONS: OptionItem[] = [
  { label: 'Startup', value: 'startup' },
  { label: 'Công ty vừa và nhỏ', value: 'sme' },
  { label: 'Tập đoàn lớn', value: 'enterprise' },
];

export const SALARY_OPTIONS: OptionItem[] = [
  { label: 'Dưới 10 triệu', value: 'under_10' },
  { label: '10-20 triệu', value: '10_20' },
  { label: '20-30 triệu', value: '20_30' },
  { label: 'Trên 30 triệu', value: 'above_30' },
];

export const WORK_TYPE_OPTIONS: OptionItem[] = [
  { label: 'Toàn thời gian', value: 'fulltime' },
  { label: 'Bán thời gian', value: 'parttime' },
  { label: 'Remote', value: 'remote' },
  { label: 'Hybrid', value: 'hybrid' },
];
