export interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
}

export const MOCK_CHAT_MESSAGES: Message[] = [
  {
    id: '1',
    text: 'Xin chào! Tôi có thể giúp gì cho bạn?',
    isUser: false,
    timestamp: '09:30',
  },
  {
    id: '2',
    text: 'Bạn có thể giới thiệu về bản thân được không?',
    isUser: true,
    timestamp: '09:31',
  },
  {
    id: '3',
    text: 'Tôi là trợ lý AI, được tạo ra để hỗ trợ bạn trong các vấn đề khác nhau. Bạn có thể hỏi tôi về nhiều chủ đề khác nhau và tôi sẽ cố gắng giúp đỡ bạn một cách tốt nhất.',
    isUser: false,
    timestamp: '09:31',
  },
  {
    id: '4',
    text: 'Cảm ơn bạn đã giới thiệu. Tôi rất vui được làm quen.',
    isUser: true,
    timestamp: '09:32',
  },
  {
    id: '5',
    text: 'Rất vui được trò chuyện với bạn! Bạn có câu hỏi gì thêm không?',
    isUser: false,
    timestamp: '09:32',
  },
];
