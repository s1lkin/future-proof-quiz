import type { Dispatch, SetStateAction } from 'react'
import type { Question, QuizState } from '../../lib/sharedTypes.ts'
import { Button } from '../Button/Button.tsx'
import { Card } from '../Card/Card.tsx'
import styles from './QuizScreen.module.css'

interface QuizScreenProps {
  question: Question;
  selectedAnswer: number | null;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: Dispatch<SetStateAction<number>>;
  setSelectedAnswer: Dispatch<SetStateAction<number | null>>;
  numberOfQuestions: number;
  setQuizState: Dispatch<SetStateAction<QuizState>>;
  setAnswers: Dispatch<SetStateAction<string[]>>;
  handleQuizRestart: () => void;
}

export const QuizScreen = (props: QuizScreenProps) => {
  const {
    question,
    selectedAnswer,
    setCurrentQuestionIndex,
    setSelectedAnswer,
    currentQuestionIndex,
    numberOfQuestions,
    setQuizState,
    setAnswers,
    handleQuizRestart,
  } = props

  const getButtonClass = (index: number) => {
    if (selectedAnswer === null) return styles.quizAnswer;
    if (index === question.indexOfCorrectAnswer) return styles.quizAnswerCorrect;
    if (selectedAnswer === index) return styles.quizAnswerIncorrect;
  }

  const handleAnswerSelect = (index: number, answer: string) => {
    setAnswers((prev: string[]) => [...prev, answer])
    setSelectedAnswer(index)
  }

  const handleNextQuestion = () => {
    setSelectedAnswer(null)
    setCurrentQuestionIndex((prev: number) => prev + 1)
  }

  return (
    <section>
      <Card className={styles.quizCard}>
        <h3 className={styles.quizQuestion}>{question.question}</h3>
        <ul className={styles.quizAnswersContainer}>
          {question.answers.map((answer, index) => (
            <li>
              <Button
              className={getButtonClass(index)}
              key={`${answer}-quiz-button${index}`}
              variant={'quiz'}
              onClick={() => handleAnswerSelect(index, answer)}
            >
              {answer}
            </Button>
            </li>
          ))}
        </ul>
        <div className={styles.quizNextButtonRow}>
          <Button onClick={handleQuizRestart} variant={'secondary'}>Restart quiz</Button>
          {currentQuestionIndex === numberOfQuestions - 1
            ? <Button
              disabled={selectedAnswer === null}
              onClick={() => setQuizState('email')}
              variant={'primary'}
            >
              Next
          </Button>
            : <Button
              disabled={selectedAnswer === null}
              onClick={handleNextQuestion}
              variant={'primary'}
            >
              Next question
            </Button>
          }
        </div>
      </Card>
    </section>
  )
}