interface Question {
  question: string;
  answers: string[];
  indexOfCorrectAnswer: number;
}

export const QUESTIONS: Question[] = [
  {
    question: 'What is the best programming language?',
    answers: ['JavaScript', 'TypeScript', 'Python', 'C++'],
    indexOfCorrectAnswer: 2
  },
  {
    question: 'What is the best programming language?',
    answers: ['JavaScript', 'TypeScript', 'Python', 'C++'],
    indexOfCorrectAnswer: 1
  }
];