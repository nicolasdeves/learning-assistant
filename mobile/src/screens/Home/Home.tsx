import { useEffect, useState } from "react";
import { getTopics, getTopicsByUser } from "../../service/topic.service";
import { getLoggedUser } from "../../auth/authentication";
import { TopicResponse } from "../../interfaces/topics";
import { makeNavigation } from "../../service/navigation.service";
import { Base } from "../Base/Base";
import { Text } from "react-native";

export function Home() {



  return (
    <Base>
      <Text> Home </Text>
    </Base>
  );
}
