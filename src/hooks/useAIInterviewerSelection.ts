import { useState, useEffect, useCallback } from 'react';
import { AIInterviewer, GenderType } from '@/common/types/aiInterviewer.model';
import { aiInterviewerService } from '@/services/aiInterviewerService';

interface UseAIInterviewerSelectionResult {
  // Dat
  interviewers: AIInterviewer[];
  selectedInterviewer: AIInterviewer | null;
  selectedGender: GenderType;

  // Loading states
  isLoading: boolean;
  isStartingInterview: boolean;

  // Error state
  error: string | null;

  // Actions
  setSelectedGender: (gender: GenderType) => void;
  setSelectedInterviewerId: (id: string | null) => void;
  startInterview: () => Promise<{ sessionId: string; chatUrl: string } | null>;
  refreshInterviewers: () => Promise<void>;
}

export const useAIInterviewerSelection =
  (): UseAIInterviewerSelectionResult => {
    const [interviewers, setInterviewers] = useState<AIInterviewer[]>([]);
    const [selectedGender, setSelectedGender] = useState<GenderType>('male');
    const [selectedInterviewerId, setSelectedInterviewerId] = useState<
      string | null
    >(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isStartingInterview, setIsStartingInterview] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const selectedInterviewer =
      interviewers.find(
        (interviewer) => interviewer.id === selectedInterviewerId
      ) || null;

    // Load interviewers based on selected gender
    const loadInterviewers = useCallback(async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await aiInterviewerService.getInterviewersByGender(
          selectedGender
        );
        setInterviewers(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : 'Có lỗi xảy ra khi tải danh sách AI'
        );
        console.error('Error loading interviewers:', err);
      } finally {
        setIsLoading(false);
      }
    }, [selectedGender]);

    // Load interviewers when component mounts or gender changes
    useEffect(() => {
      loadInterviewers();
    }, [loadInterviewers]);

    // Reset selected interviewer when gender changes
    useEffect(() => {
      setSelectedInterviewerId(null);
    }, [selectedGender]);

    // Start interview session
    const startInterview = useCallback(async () => {
      if (!selectedInterviewerId) {
        return null;
      }

      try {
        setIsStartingInterview(true);
        setError(null);

        const result = await aiInterviewerService.startInterviewSession(
          selectedInterviewerId
        );
        return result;
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : 'Có lỗi xảy ra khi bắt đầu phỏng vấn'
        );
        console.error('Error starting interview:', err);
        return null;
      } finally {
        setIsStartingInterview(false);
      }
    }, [selectedInterviewerId]);

    // Refresh interviewers manually
    const refreshInterviewers = useCallback(async () => {
      await loadInterviewers();
    }, [loadInterviewers]);

    return {
      // Data
      interviewers,
      selectedInterviewer,
      selectedGender,

      // Loading states
      isLoading,
      isStartingInterview,

      // Error state
      error,

      // Actions
      setSelectedGender,
      setSelectedInterviewerId,
      startInterview,
      refreshInterviewers,
    };
  };
