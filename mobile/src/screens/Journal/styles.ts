import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pageTitle: {
    fontSize: 22,
    color: "#333",
    marginLeft: 30,
    marginTop: 10,
    fontFamily: "sans-serif-light",
  },

  subtitle: {
    fontSize: 16,
    color: "#555",
    marginLeft: 30,
    marginTop: 4,
  },

  listItem: {
    marginLeft: 30,
    marginRight: 30,
    padding: 16,
    backgroundColor: "#D9EEFA",
    borderRadius: 10,
    marginBottom: 12,
  },

  itemText: {
    fontSize: 16,
    color: "#000",
  },

  noteItem: {
    backgroundColor: "#E8F6FF",
    marginHorizontal: 30,
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },

  noteDate: {
    color: "#666",
    marginBottom: 4,
    fontSize: 13,
  },

  notePreview: {
    fontSize: 16,
    color: "#222",
  },

  addButton: {
    marginTop: 5,
    backgroundColor: "#3D7DFF",
    padding: 14,
    borderRadius: 10,
    marginHorizontal: 30,
    marginBottom: 20,
  },

  addButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },

  input: {
    backgroundColor: "#fff",
    marginHorizontal: 30,
    marginTop: 15,
    textAlignVertical: "top",
    borderRadius: 10,
    padding: 15,
    height: 240,
    borderColor: "#ddd",
    borderWidth: 1,
  },

  saveButton: {
    backgroundColor: "#3D7DFF",
    marginTop: 20,
    marginHorizontal: 30,
    padding: 14,
    borderRadius: 8,
  },

  saveButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },

  noteFull: {
    fontSize: 16,
    color: "#222",
    lineHeight: 22,
    marginHorizontal: 30,
  },
});
