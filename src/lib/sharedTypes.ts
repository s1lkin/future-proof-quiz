/**
 * Represents the possible states of a quiz flow.
 */
export type QuizState = 'hero' | 'quiz' | 'email' | 'result'

/**
 * Represents a question object in a quiz.
 * @property question - A string representing the text of the question.
 * @property answers - An array of strings, where each string is a possible answer to the question.
 * @property indexOfCorrectAnswer - A number indicating the zero-based index of the correct answer in the answers array.
 */
export interface Question {
  question: string;
  answers: string[];
  indexOfCorrectAnswer: number;
}