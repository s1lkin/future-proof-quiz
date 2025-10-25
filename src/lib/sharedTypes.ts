export type QuizState = 'hero' | 'quiz' | 'email' | 'result'

export interface Question {
  question: string;
  answers: string[];
  indexOfCorrectAnswer: number;
}