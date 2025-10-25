import type { Dispatch, SetStateAction } from 'react'
import type { Question, QuizState } from '../../types/sharedTypes.ts'
import { Button } from '../Button/Button.tsx'
import { Card } from '../Card/Card.tsx'
import styles from './QuizScreen.module.css'

interface QuizScreenProps {
  question: Question;
  selectedAnswer: number | null;
  setCurrentQuestion: Dispatch<SetStateAction<number>>;
  setSelectedAnswer: Dispatch<SetStateAction<number | null>>;
  numberOfQuestions: number;
  currentQuestion: number;
  setQuizState: Dispatch<SetStateAction<QuizState>>;
}

export const QuizScreen = (props: QuizScreenProps) => {
  const {
    question,
    selectedAnswer,
    setCurrentQuestion,
    setSelectedAnswer,
    currentQuestion,
    numberOfQuestions,
    setQuizState
  } = props

  const getButtonClass = (index: number) => {
    if (selectedAnswer === null) return '';
    if (index === question.indexOfCorrectAnswer) return styles.quizAnswerCorrect;
    if (selectedAnswer === index) return styles.quizAnswerIncorrect;
  }

  const handleNextQuestion = () => {
    setSelectedAnswer(null)
    setCurrentQuestion((prev: number) => prev + 1)
  }

  const handleRestartQuiz = () => {
    setSelectedAnswer(null)
    setCurrentQuestion(0)
  }

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index)
  }

  return (
    <section>
      <Card className={styles.quizCard}>
        <h3 className={styles.quizQuestion}>{question.question}</h3>
        <div className={styles.quizAnswersContainer}>
          {question.answers.map((answer, index) => (
            <Button
              className={getButtonClass(index)}
              key={`${answer}-quiz-button${index}`}
              variant={'quiz'}
              onClick={() => handleAnswerSelect(index)}
            >
              {answer}
            </Button>
          ))}
        </div>
        <div className={styles.quizNextButtonRow}>
          <Button onClick={handleRestartQuiz} variant={'secondary'}>Restart quiz</Button>
          {currentQuestion === numberOfQuestions - 1
            ? <Button onClick={() => setQuizState('result')} variant={'primary'}>Go to results</Button>
            : <Button onClick={handleNextQuestion} variant={'primary'}>Next question</Button>
          }
        </div>
      </Card>
    </section>
  )
}