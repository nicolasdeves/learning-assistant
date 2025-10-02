import React, { useRef, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Animated, StyleSheet, Easing } from "react-native";
import { Base } from "../Base/Base";
import { AnimatedButton } from "../../components/AnimatedButton/AnimatedButton";

export function Activity() {
  const [selected, setSelected] = useState<number | null>(null);
  const [step, setStep] = useState(1);
  const [questionAnswered, setQuestionAnswered] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const question = {
    text: "What does 'apple' mean in Portuguese?",
    options: ["Maçã", "Pera", "Banana", "Laranja"],
    answerIndex: 0,
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [step]);

  const handleSelect = (index: number) => {
    setSelected(index);
  };

  const handleSubmit = () => {
    setQuestionAnswered(true);
    setTimeout(() => {
      setStep(step + 1);
      setSelected(null);
      setQuestionAnswered(false);
      fadeAnim.setValue(0);
    }, 1000);
  };

  return (
    <Base>
      <Animated.View style={{ ...styles.container, opacity: fadeAnim }}>
        <Text style={styles.counter}>Activity {step}/3</Text>
        <Text style={styles.question}>{question.text}</Text>

        <View style={styles.optionsContainer}>
          {question.options.map((option, i) => (
            <TouchableOpacity
              key={i}
              style={[
                styles.option,
                selected === i && styles.selectedOption,
                questionAnswered && i === question.answerIndex && styles.correctOption,
                questionAnswered && selected === i && selected !== question.answerIndex && styles.wrongOption,
              ]}
              onPress={() => handleSelect(i)}
              disabled={questionAnswered}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <AnimatedButton
          title="Submit"
          onPress={handleSubmit}
          style={[styles.submitButton, !selected && styles.disabledButton]}
        />
      </Animated.View>
    </Base>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
  counter: {
    fontSize: 16,
    color: "#aaa",
    marginBottom: 10,
  },
  question: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 30,
    color: "#333",
  },
  optionsContainer: {
    marginBottom: 40,
  },
  option: {
    backgroundColor: "#eee",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  selectedOption: {
    borderWidth: 2,
    borderColor: "#6c63ff",
  },
  correctOption: {
    backgroundColor: "#4caf50",
  },
  wrongOption: {
    backgroundColor: "#f44336",
  },
  optionText: {
    fontSize: 18,
    color: "#333",
  },
  submitButton: {
    marginTop: 20,
  },
  disabledButton: {
    opacity: 0.5,
  },
});
