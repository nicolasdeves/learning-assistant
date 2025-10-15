import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Base } from "../Base/Base";
import { styles } from "./styles";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../interfaces/navbar";
import { Button } from "../../components/Button/Button";
import { Loading } from "../../components/Loading/Loading";

type ActivityRouteProp = RouteProp<RootStackParamList, "Activity">;

interface Exercise {
  id: string;
  title: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

interface ActivityData {
  name: string;
  exercises: Exercise[];
}

export function Activity() {
  const route = useRoute<ActivityRouteProp>();
  const { topicUser } = route.params;

  const [activity, setActivity] = useState<ActivityData | null>(null);
  const [loading, setLoading] = useState(true);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    fetchActivity();
  }, []);

  const fetchActivity = async () => {
    setLoading(true);
    await new Promise((res: any) => setTimeout(res, 1500)); // simula chamada da API

    const mockActivity: ActivityData = {
      name: topicUser.topic?.name || "Lógica de Programação",
      exercises: [
        {
          id: "1",
          title: "Qual símbolo usamos pra declarar uma função em JavaScript?",
          options: ["function", "fun", "def", "proc"],
          correctAnswer: "function",
          explanation: "Usamos 'function' pra declarar funções em JavaScript.",
        },
        {
          id: "2",
          title: "Qual operador é usado pra comparar igualdade estrita?",
          options: ["==", "===", "=", "!="],
          correctAnswer: "===",
          explanation:
            "'===' compara valor e tipo, sem conversões automáticas.",
        },
        {
          id: "3",
          title: "Qual método exibe uma mensagem no console?",
          options: ["alert()", "log()", "console.log()", "printf()"],
          correctAnswer: "console.log()",
          explanation:
            "O método 'console.log()' exibe mensagens no console do navegador.",
        },
        {
          id: "4",
          title: "Como declaramos uma variável constante?",
          options: ["var", "let", "const", "def"],
          correctAnswer: "const",
          explanation:
            "Usamos 'const' pra declarar variáveis cujo valor não muda.",
        },
        {
          id: "5",
          title: "Qual desses é um tipo de dado em JavaScript?",
          options: ["integer", "float", "string", "decimal"],
          correctAnswer: "string",
          explanation:
            "JavaScript usa o tipo 'string' pra representar textos.",
        },
      ],
    };

    setActivity(mockActivity);
    setLoading(false);
  };

  const currentExercise = activity?.exercises[exerciseIndex];

  const handleAnswer = () => {
    if (!currentExercise || !selectedOption) return;
    const correct = selectedOption === currentExercise.correctAnswer;
    setIsCorrect(correct);
    setAnswered(true);
  };

  const handleNext = () => {
    setAnswered(false);
    setSelectedOption(null);
    setIsCorrect(null);

    if (exerciseIndex < (activity?.exercises.length || 0) - 1) {
      setExerciseIndex(exerciseIndex + 1);
    } else {
      console.log("Atividade concluída!");
    }
  };

  if (loading) return <Loading message="Buscando atividade..." />;

  return (
    <Base>
      <View style={styles.container}>
        {/* Contador */}
        <Text style={styles.counter}>
          Exercício {exerciseIndex + 1}/{activity?.exercises.length}
        </Text>

        {/* Título da atividade */}
        <Text style={styles.title}>{activity?.name.toUpperCase()}</Text>

        {/* Enunciado */}
        <Text style={styles.exercise}>{currentExercise?.title}</Text>

        {/* Alternativas */}
        {currentExercise?.options.map((option, idx) => (
          <TouchableOpacity
            key={idx}
            style={[
              styles.option,
              selectedOption === option && styles.optionSelected,
              answered &&
                option === currentExercise.correctAnswer &&
                styles.optionCorrect,
              answered &&
                selectedOption === option &&
                option !== currentExercise.correctAnswer &&
                styles.optionWrong,
            ]}
            onPress={() => !answered && setSelectedOption(option)}
            disabled={answered}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}

        {/* Botão de responder */}
        {!answered && (
          <Button
            label="Responder"
            onPress={handleAnswer}
            disabled={!selectedOption}
          />
        )}

        {/* Feedback */}
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
            <Text style={styles.explanation}>
              {currentExercise?.explanation}
            </Text>
          </View>
        )}

        {/* Próxima atividade */}
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
      </View>
    </Base>
  );
}
