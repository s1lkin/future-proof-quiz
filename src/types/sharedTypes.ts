export type QuizState = 'hero' | 'quiz' | 'result'

export interface Question {
  question: string;
  answers: string[];
  indexOfCorrectAnswer: number;
}