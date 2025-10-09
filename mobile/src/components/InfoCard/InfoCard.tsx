import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, GestureResponderEvent, Image, FlexAlignType, DimensionValue } from "react-native";

interface InfoCardProps {
  title: string;
  description?: string;
  width?: DimensionValue;
  height?: DimensionValue;
  icon?: React.ReactNode;          
  image?: string;                   
  backgroundColor?: string;        
  onPress?: (event: GestureResponderEvent) => void;
  alignSelf?: FlexAlignType;
  margin?: number
  marginLeft?: number
  marginRight?: number
  marginTop?: number,
  marginBottom?: number
}

export function InfoCard({
  title,
  description,
  width = "90%",
  height = 140,
  icon,
  image,
  backgroundColor = "#fff",
  onPress,
  alignSelf = "center",
  margin = 0,
  marginLeft = 0,
  marginRight = 0,
  marginTop = 0,
  marginBottom = 0,
}: InfoCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={onPress ? 0.7 : 1}
      style={[styles.card, { width, height, alignSelf, backgroundColor, margin, marginLeft, marginRight, marginTop, marginBottom }]}
      onPress={onPress}
    >
      <View style={styles.content}>
        {icon && <View style={styles.icon}>{icon}</View>}

        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          {description && (  // só renderiza se existir
            <Text style={styles.description}>{description}</Text>
          )}
        </View>

        {image && (
          <Image
            source={{ uri: image }}
            style={styles.rightImage}
            resizeMode="contain"
          />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    padding: 16,
    marginVertical: 10,
    shadowColor: "#000",
    // shadowOpacity: 0.15,
    // shadowRadius: 8,
    // shadowOffset: { width: 0, height: 4 },
    elevation: 10,
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
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
  rightImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginLeft: 12,
  },
});
