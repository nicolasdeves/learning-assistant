import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  counter: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
    marginBottom: 12,
  },
  exercise: {
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
  },
  option: {
    backgroundColor: "#f2f2f2",
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
  },
  optionSelected: {
    backgroundColor: "#dbeafe",
    borderColor: "#007AFF",
    borderWidth: 1,
  },
  optionCorrect: {
    backgroundColor: "#d1fae5",
    borderColor: "#22c55e",
    borderWidth: 1,
  },
  optionWrong: {
    backgroundColor: "#fee2e2",
    borderColor: "#ef4444",
    borderWidth: 1,
  },
  optionText: {
    fontSize: 15,
    color: "#111",
  },
  feedbackContainer: {
    marginTop: 16,
    borderRadius: 12,
    padding: 12,
  },
  feedbackCorrect: {
    backgroundColor: "#dcfce7",
  },
  feedbackWrong: {
    backgroundColor: "#fee2e2",
  },
  feedbackText: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 4,
  },
  explanation: {
    fontSize: 14,
    color: "#444",
  },
});
