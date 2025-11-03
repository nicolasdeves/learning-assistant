import { ScrollView, Text } from "react-native";
import { Base } from "../Base/Base";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { getLoggedUserId } from "../../auth/authentication";
import { getUserCommunities } from "../../service/community.service";
import { CommunityResponse } from "../../interfaces/community";
import { CommunityTopic } from "./components/CommunityTopic";
import { makeNavigation } from "../../service/navigation.service";



export function Community() {

  const [googleUserId, setGoogleUserId] = useState<string | null>(null)
  const [communities, setCommunities] = useState<CommunityResponse[] | null>(null);

  const navigation = makeNavigation();

  useEffect(() => {
    fetchUserId();
    fetchCommunities();
  }, [googleUserId])

  const fetchUserId = async () => {
    const userId = await getLoggedUserId();
    userId && setGoogleUserId(userId);
  }

  const fetchCommunities = async () => {
    const communities = googleUserId && await getUserCommunities(googleUserId);
    setCommunities(communities);
  }

  return (
    <Base>
      <Text style={styles.title}>COMUNIDADE</Text>

      <ScrollView
        style={styles.topics}
        showsVerticalScrollIndicator={false}
      >

        {communities && communities.map((community) => (
          <CommunityTopic
            key={community.id}
            community={community}
            onEnterCommunity={(community) => navigation.navigate("CommunityChat", {community})}
          />
        ))}

      </ScrollView>
    </Base>
  )
}
