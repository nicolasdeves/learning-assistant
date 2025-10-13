import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 20,
    color: '#333333',
    marginLeft: 30,
    fontFamily: 'sans-serif-light',
  },

  second_title: {
    fontSize: 18,
    color: '#333333',
    textAlign: 'left',
    marginTop: 30,
    marginLeft: 30,
    fontFamily: 'sans-serif-light',
    fontWeight: 'bold',
  },

  activityItem: {
    width: 140,
    height: 150,
    backgroundColor: "#D9EEFA",
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

  scroll: {
    marginTop: 10,
  },
});
