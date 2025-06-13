import { AIInterviewer, GenderType } from '@/common/types/aiInterviewer.model';
import { AI_INTERVIEWERS_MOCK_DATA } from '@/common/constants/aiInterviewers';

class AIInterviewerService {
  /**
   * Fetch all AI interviewers
   * TODO: Replace with actual API call
   */
  async getAllInterviewers(): Promise<AIInterviewer[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // TODO: Replace with actual API call
    // const response = await fetch('/api/ai-interviewers');
    // return response.json();

    return AI_INTERVIEWERS_MOCK_DATA;
  }

  /**
   * Fetch AI interviewers filtered by gender
   * TODO: Replace with actual API call with query parameters
   */
  async getInterviewersByGender(gender: GenderType): Promise<AIInterviewer[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    // TODO: Replace with actual API call
    // const response = await fetch(`/api/ai-interviewers?gender=${gender}`);
    // return response.json();

    const allInterviewers = await this.getAllInterviewers();
    return allInterviewers.filter(
      (interviewer) => interviewer.gender === gender
    );
  }

  /**
   * Fetch a specific AI interviewer by ID
   * TODO: Replace with actual API call
   */
  async getInterviewerById(id: string): Promise<AIInterviewer | null> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 200));

    // TODO: Replace with actual API call
    // const response = await fetch(`/api/ai-interviewers/${id}`);
    // return response.json();

    const allInterviewers = await this.getAllInterviewers();
    return allInterviewers.find((interviewer) => interviewer.id === id) || null;
  }

  /**
   * Start an interview session with a specific AI interviewer
   * TODO: Replace with actual API call
   */
  async startInterviewSession(
    interviewerId: string,
    interviewType?: string
  ): Promise<{ sessionId: string; chatUrl: string }> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // TODO: Replace with actual API call
    // const response = await fetch('/api/interview-sessions', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ interviewerId, interviewType })
    // });
    // return response.json();

    // Mock response
    const sessionId = `session_${Date.now()}_${interviewerId}`;
    return {
      sessionId,
      chatUrl: `/chat/${sessionId}`,
    };
  }
}

export const aiInterviewerService = new AIInterviewerService();
export default aiInterviewerService;
