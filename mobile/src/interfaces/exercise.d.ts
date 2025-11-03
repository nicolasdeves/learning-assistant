import { AlternativeRespose } from "./alternative"

export interface ExerciseRespose {
  id: number
  exerciseTypeId: number
  activityId: number
  name: string
  description: string
  finishedAt: string | null
  createdAt: string
  updatedAt: string
  alternatives: AlternativeRespose[]
}