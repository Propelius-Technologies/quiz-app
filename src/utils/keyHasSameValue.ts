
export interface testsType {
  id: number
  isFeedbackRequired: boolean
  feedback: any
  score: number
  status: string
  candidateId: number
  roundId: number
  createdAt: string
  updatedAt: string
  round: Round
}

export interface Round {
  id: number
  name: string
  questionCount: number
  createdAt: string
  updatedAt: string
}

export const keyHasSameValueInAllObjects = (array: testsType[] , key: string) => {
  if (array.length === 0) {
    return false; // Return false if the array is empty
  }

//@ts-ignore
  return array.every(obj => obj[key] === 'complete');
}