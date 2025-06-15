import { ROUTER } from './router';

export const INTERVIEW_OPTIONS = [
  {
    id: 'form-based',
    icon: 'document-text' as const,
    title: 'Phỏng vấn dựa trên form',
    description: 'Nhập thông tin để tạo câu hỏi phỏng vấn theo yêu cầu của bạn',
    route: ROUTER.MOCK_INTERVIEW_FORM_BASED,
  },
  {
    id: 'cv-based',
    icon: 'document' as const,
    title: 'Phỏng vấn dựa trên CV',
    description: 'Tải CV lên để nhận câu hỏi phù hợp với kinh nghiệm của bạn',
    route: ROUTER.MOCK_INTERVIEW_CV_BASED,
  },
  {
    id: 'job-based',
    icon: 'briefcase' as const,
    title: 'Phỏng vấn dựa trên CV và JD',
    description:
      'Tải CV và JD lên để nhận câu hỏi phù hợp với vị trí tuyển dụng',
    route: ROUTER.MOCK_INTERVIEW_CV_JD_BASED,
  },
];
