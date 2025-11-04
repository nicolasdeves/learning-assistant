import { StyleSheet } from 'react-native';

export const navbarStyles = StyleSheet.create({
  navbar: {
    backgroundColor: '#F2F2F2',
    width: '100%',
    height: 70, // usa altura fixa, 10% é zoeira em telas menores
    borderTopColor: '#A8A8A8',
    borderTopWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  navbarImage: {
    opacity: 0.7,
    width: 35,
    height: 35,
  },

  navbarImageSelected: {
    opacity: 1,
    width: 37,
    height: 37,
    tintColor: '#54A8E8',
  },
});
