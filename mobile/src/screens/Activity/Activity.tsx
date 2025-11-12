import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Base } from "../Base/Base";
import { styles } from "./styles";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../interfaces/navbar";
import { Button } from "../../components/Button/Button";
import { Loading } from "../../components/Loading/Loading";
import { makeNavigation } from "../../service/navigation.service";
import { getActivityByTopicUser } from "../../service/activity.service";
import { ActivityRespose } from "../../interfaces/activity";
import { getLoggedUserId } from "../../auth/authentication";
import { registerUserActivity } from "../../service/activityUser.service";

type ActivityRouteProp = RouteProp<RootStackParamList, "Activity">;

export function Activity() {
  const route = useRoute<ActivityRouteProp>();
  const { topicUser } = route.params;

  const [activity, setActivity] = useState<ActivityRespose | null>(null);
  const [loading, setLoading] = useState(true);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [selectedAlternativeId, setSelectedAlternativeId] = useState<number | null>(null);
  const [googleUserId, setGoogleUserId] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const navigation = makeNavigation();

  useEffect(() => {
    fetchActivity();
    fetchUser();
  }, []);

  const fetchActivity = async () => {
    setLoading(true);
    const activity = await getActivityByTopicUser(topicUser);
    activity && setActivity(activity);
    setLoading(false);
  };

  const fetchUser = async () => {
    const userId = await getLoggedUserId();
    userId && setGoogleUserId(userId);
  }

  const currentExercise = activity?.exercises[exerciseIndex];

  const handleAnswer = () => {
    if (!currentExercise || !selectedAlternativeId) return;

    const correctAlternative = currentExercise.alternatives.find(
      (a) => a.isCorrect === true
    );

    const correct = selectedAlternativeId === correctAlternative?.id;
    setIsCorrect(correct);
    setAnswered(true);
  };

  const handleNext = async () => {
    setAnswered(false);
    setSelectedAlternativeId(null);
    setIsCorrect(null);

    if (exerciseIndex < (activity?.exercises.length || 0) - 1) {
      setExerciseIndex(exerciseIndex + 1);
    } else {
      if (activity && googleUserId) {
        await registerUserActivity(activity.id, googleUserId);
      }
      topicUser.topic && navigation.navigate("JournalCreateNote", { topic: topicUser.topic, message: "Escreva o que achou da atividade. Suas dificuldades, facilidades ou o que deseja aprender daqui para frente" });
    }
  };

  if (loading) return <Loading message="Gerando atividade..." />;

  return (
    <Base>
      <ScrollView style={styles.container}>
        <Text style={styles.counter}>
          Exercício {exerciseIndex + 1}/{activity?.exercises.length}
        </Text>

        <Text style={styles.title}>{activity?.name.toUpperCase()}</Text>

        <Text style={styles.exercise}>{currentExercise?.name}</Text>

        {currentExercise?.alternatives.map((alternative) => {
          const isSelected = selectedAlternativeId === alternative.id;
          const isCorrectOption = alternative.isCorrect;
          const showCorrectStyle = answered && isCorrectOption;
          const showWrongStyle = answered && isSelected && !isCorrectOption;

          return (
            <TouchableOpacity
              key={alternative.id}
              style={[
                styles.option,
                isSelected && styles.optionSelected,
                showCorrectStyle && styles.optionCorrect,
                showWrongStyle && styles.optionWrong,
              ]}
              onPress={() => !answered && setSelectedAlternativeId(alternative.id)}
              disabled={answered}
            >
              <Text style={styles.optionText}>{alternative.description}</Text>
            </TouchableOpacity>
          );
        })}

        {!answered && (
          <Button
            label="Responder"
            onPress={handleAnswer}
            disabled={!selectedAlternativeId}
          />
        )}

        {answered && (
          <View
            style={[
              styles.feedbackContainer,
              isCorrect ? styles.feedbackCorrect : styles.feedbackWrong,
            ]}
          >
            <Text style={styles.feedbackText}>
              {isCorrect ? "✅ Resposta correta!" : "❌ Resposta incorreta!"}
            </Text>
          </View>
        )}

        {answered && (
          <Button
            label={
              exerciseIndex === (activity?.exercises.length || 0) - 1
                ? "Finalizar"
                : "Próximo exercício"
            }
            onPress={handleNext}
          />
        )}
      </ScrollView>
    </Base>
  );
}
