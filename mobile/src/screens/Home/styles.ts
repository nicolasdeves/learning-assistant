import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 20,
    color: '#333333',
    marginLeft: 30,
    fontFamily: 'sans-serif-light',
  },

  second_title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0A3D62',
    marginTop: 30,
    marginLeft: 25,
  },

  third_title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0A3D62',
    marginLeft: 25,
  },

  add_button: {
    marginRight: 15
  },

  scroll: {
    marginTop: 10,
  },

  activityItem: {
    width: 140,
    height: 150,
    backgroundColor: '#D9EEFA',
    marginLeft: 30,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 5,
    elevation: 10,

    borderRadius: 10,
  },

  activityImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },

  activityDescription: {
    color: '#000000',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'sans-serif-light',
  },

  topicCardContainer: {
    position: 'relative',
    marginRight: 15,
  },
  topicCard: {
    backgroundColor: '#D9EEFA',
    borderRadius: 18,
    width: 120,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 6,
  },
  deleteButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FF4444',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  deleteButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 16,
  },

  topicEmoji: {
    fontSize: 28,
    marginBottom: 10,
  },

  topicText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0A3D62',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  emptyStateContainer: {
    marginTop: 15,
    marginHorizontal: 25,
    paddingVertical: 15,
  },
  emptyStateText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
