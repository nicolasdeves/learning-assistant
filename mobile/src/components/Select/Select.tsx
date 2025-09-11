import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  Animated,
  Pressable,
  Easing,
} from "react-native";

interface SelectProps {
  label: string;
  options: { label: string; value: string | number }[];
  onValueChange?: (value: string | number) => void;
}

export function Select({ label, options, onValueChange }: SelectProps) {
  const [selectedValue, setSelectedValue] = useState(options[0]?.value);
  const [open, setOpen] = useState(false);

  const slideAnim = useRef(new Animated.Value(300)).current; 
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handleSelect = (value: string | number) => {
    setSelectedValue(value);
    onValueChange?.(value);
    closeModal();
  };

  const openModal = () => {
    setOpen(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: 300,
      duration: 200,
      easing: Easing.in(Easing.cubic),
      useNativeDriver: true,
    }).start(() => setOpen(false));
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  const selectedLabel = options.find((o) => o.value === selectedValue)?.label;

  const renderItem = ({ item, index }: { item: any; index: number }) => (
    <Pressable
      android_ripple={{ color: "#ddd" }}
      style={[
        styles.option,
        item.value === selectedValue && styles.selectedOption,
        index === 0 && styles.firstOption, // primeira opção com borda arredondada no topo
        index === options.length - 1 && styles.lastOption, // última opção com borda arredondada no fundo
      ]}
      onPress={() => handleSelect(item.value)}
    >
      <Text
        style={[
          styles.optionText,
          item.value === selectedValue && styles.selectedOptionText,
        ]}
      >
        {item.label}
      </Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <TouchableOpacity style={styles.selector} onPress={openModal}>
          <Text style={styles.selectedText}>{selectedLabel}</Text>
        </TouchableOpacity>
      </Animated.View>

      <Modal transparent visible={open} animationType="none">
        <Pressable style={styles.modalOverlay} onPress={closeModal}>
          <Animated.View
            style={[
              styles.modalContent,
              { transform: [{ translateY: slideAnim }] },
            ]}
          >
            <FlatList
              data={options}
              keyExtractor={(item) => item.value.toString()}
              renderItem={renderItem}
            />
          </Animated.View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    marginBottom: 5,
    fontWeight: "bold",
    fontSize: 16,
  },
  selector: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    padding: 14,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  selectedText: {
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-end",
  },
  modalContent: {
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    maxHeight: 350,
    paddingBottom: 20,
  },
  option: {
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#fff",
  },
  firstOption: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  lastOption: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderBottomWidth: 0,
  },
  optionText: {
    fontSize: 16,
  },
  selectedOption: {
    backgroundColor: "#f0f0f0",
  },
  selectedOptionText: {
    fontWeight: "bold",
    color: "#333",
  },
});
