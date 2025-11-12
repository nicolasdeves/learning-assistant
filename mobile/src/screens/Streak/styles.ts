import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: {
    fontSize: 20,
    color: '#333333',
    marginLeft: 10,
    fontFamily: 'sans-serif-light',
  },
  subtitle: { fontSize: 14, color: '#666', marginBottom: 20 },
  month: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },
  weekRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 6,
  },

  weekLabel: {
    width: `${100 / 7}%`,
    textAlign: 'center',
    fontWeight: '600',
    color: '#444',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  dayBox: {
    width: `${100 / 7}%`,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginBottom: 6,
  },
  completedDay: {
    backgroundColor: '#4DA3FF', // azul de destaque
  },
  dayText: { fontSize: 14, color: '#000' },
  streakBox: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#D9EEFA', // azul claro background
    alignItems: 'center',
  },
  streakLabel: { fontSize: 14, color: '#4DA3FF' }, // azul suave
  streakNumber: { fontSize: 26, fontWeight: '800', color: '#4DA3FF' }, // azul principal
});
