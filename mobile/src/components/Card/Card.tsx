// components/Card/Card.tsx
import React, { ReactNode, useEffect, useRef } from 'react';
import { Animated, StyleSheet, View, TouchableOpacity } from 'react-native';

type CardProps = {
  children: ReactNode;
  onPress?: () => void;
};

export const Card = ({ children, onPress }: CardProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const Content = (
    <Animated.View
      style={[
        styles.card,
        { opacity: fadeAnim, transform: [{ translateY }] },
      ]}
    >
      {children}
    </Animated.View>
  );

  if (onPress) {
    return <TouchableOpacity activeOpacity={0.8} onPress={onPress}>{Content}</TouchableOpacity>;
  }

  return Content;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
  },
});
