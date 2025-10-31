export interface GeneratedActivity {
  title: string
  exercises: {
    name: string
    alternatives: {
      label: string
      value: string
    }[]
    correctAlternative: string
  }[]
}