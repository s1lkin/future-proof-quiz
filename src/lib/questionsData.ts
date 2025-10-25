import type { Question } from './sharedTypes.ts'

export const QuestionsData: Question[] = [
  {
    question: 'Does our team need this wonderful developer?',
    answers: ['No', 'Of course', "I don't know", 'Maybe'],
    indexOfCorrectAnswer: 1
  },
  {
    question: 'When we give feedback about test task?',
    answers: ['ASAP', 'Never', 'In two weeks', 'We will try not to forget'],
    indexOfCorrectAnswer: 0
  }
];