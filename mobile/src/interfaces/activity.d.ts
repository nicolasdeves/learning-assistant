import { ExerciseRespose } from "./exercise"
import { TopicResponse } from "./topic"

interface ActivityRespose {
  id: number
  name: string
  date: string
  topicId: number
  createdAt: string
  updatedAt: string
  exercises: ExerciseRespose[]
  topic: TopicResponse
}



