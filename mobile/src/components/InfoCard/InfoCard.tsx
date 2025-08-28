import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, GestureResponderEvent } from "react-native";
import { DimensionValue } from "react-native";

interface InfoCardProps {
  title: string;
  description: string;
  width?: DimensionValue;
  height?: DimensionValue;
  icon?: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
}

export function InfoCard({ 
  title, 
  description, 
  width = "90%", 
  height = 120, 
  icon, 
  onPress 
}: InfoCardProps) {
  return (
    <TouchableOpacity 
      activeOpacity={onPress ? 0.7 : 1} 
      style={[styles.card, { width, height }]} 
      onPress={onPress}
    >
      <View style={styles.content}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  icon: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
});
