export interface TestDataType {
  id: number;
  isFeedbackRequired: boolean;
  feedback: any;
  score: any;
  status: string;
  candidateId: number;
  roundId: number;
  createdAt: string;
  updatedAt: string;
  testQuestionsAndAnswers: TestQuestionsAndAnswer[];
}

export interface TestQuestionsAndAnswer {
  id: number;
  answer: any;
  timeTaken: any;
  questionId: number;
  testId: number;
  createdAt: string;
  updatedAt: string;
  question: Question;
}

export interface Question {
  id: number;
  question: string;
  options: Options;
  type: string;
  level: string;
  timeLimit: number;
  createdAt: string;
  updatedAt: string;
}

export interface Options {
  [key: string]: string;
  "1": string;
  "2": string;
  "3": string;
  "4": string;
}
