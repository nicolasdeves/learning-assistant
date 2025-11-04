import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: "center",
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },

  email: {
    fontSize: 16,
    color: "#666",
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#D9EEFA",
    width: "85%",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 5,
  },

  cardTitle: {
    fontSize: 18,
    color: "#000",
  },

  plus: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#000",
  },

  list: {
    width: "85%",
    marginTop: 10,
  },

  topicItem: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 6,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  topicName: {
    fontSize: 16,
    color: "#333",
  },

  topicCount: {
    fontSize: 16,
    color: "#555",
  },
});
