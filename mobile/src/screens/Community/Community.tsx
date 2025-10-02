import { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { Base } from "../Base/Base";

interface CommunityData {
  id: string;
  subject: string;
  participants: number;
  image: string;
  joined: boolean;
}

const mockCommunities: CommunityData[] = [
  {
    id: "1",
    subject: "Inglês Iniciante",
    participants: 34,
    image: "https://picsum.photos/200/200?1",
    joined: false,
  },
  {
    id: "2",
    subject: "Inglês Intermediário",
    participants: 21,
    image: "https://picsum.photos/200/200?2",
    joined: true,
  },
  {
    id: "3",
    subject: "Conversação",
    participants: 15,
    image: "https://picsum.photos/200/200?3",
    joined: false,
  },
];

export function Community() {
  const [communities, setCommunities] = useState(mockCommunities);

  function toggleJoin(id: string) {
    setCommunities(prev =>
      prev.map(c =>
        c.id === id ? { ...c, joined: !c.joined } : c
      )
    );
  }

  return (
    <Base>
      <FlatList
        data={communities}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.avatar} />
            <View style={styles.info}>
              <Text style={styles.subject}>{item.subject}</Text>
              <Text style={styles.participants}>
                👥 {item.participants} participantes
              </Text>
              <TouchableOpacity
                style={[styles.button, item.joined ? styles.joined : styles.notJoined]}
                onPress={() => toggleJoin(item.id)}
              >
                <Text style={styles.buttonText}>
                  {item.joined ? "Entrar" : "Participar"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </Base>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 16,
    borderRadius: 16,
    padding: 14,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 14,
  },
  info: {
    flex: 1,
  },
  subject: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1c1c1c",
    marginBottom: 4,
  },
  participants: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 12,
    alignItems: "center",
    alignSelf: "flex-start",
  },
  notJoined: {
    backgroundColor: "#4CAF50",
  },
  joined: {
    backgroundColor: "#2196F3",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});
