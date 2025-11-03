import { ExerciseRespose } from "./exercise"

interface ActivityRespose {
  id: number
  name: string
  date: string
  topicId: number
  createdAt: string
  updatedAt: string
  exercises: ExerciseRespose[]
}



