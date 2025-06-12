import { StyleSheet } from 'react-native';

export const HomeStyles = StyleSheet.create({
  container: {
  
  },
  startInterviewCard: {
    backgroundColor: '#6366F1',
    borderRadius: 16,
    padding: 20,
    marginVertical: 16,
    alignItems: 'center',
  },
  startInterviewText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 12,
  },
  featuresSection: {
    padding: 16,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    paddingHorizontal: 16,
  },
  featureCard: {
    width: '47%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'flex-start',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  mockInterviewIcon: {
    backgroundColor: '#8B5CF6',
  },
  aiChatIcon: {
    backgroundColor: '#10B981',
  },
  resumeAnalyzerIcon: {
    backgroundColor: '#F97316',
  },
  roadmapIcon: {
    backgroundColor: '#3B82F6',
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 12,
    color: '#666',
  },
  historySection: {
    padding: 16,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  historyCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  historyRole: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  historyCompany: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  historyDate: {
    fontSize: 12,
    color: '#999',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 4,
  },
});
