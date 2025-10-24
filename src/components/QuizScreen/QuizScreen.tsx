import type { Question } from '../../types/sharedTypes.ts'
import { Button } from '../Button/Button.tsx'
import { Card } from '../Card/Card.tsx'
import styles from './QuizScreen.module.css'

interface QuizScreenProps {
  question: Question;
  selectedAnswer: number | null;
  handleAnswerSelect: (index: number) => void;
}

export const QuizScreen = (props: QuizScreenProps) => {
  const { question, handleAnswerSelect, selectedAnswer } = props

  const getButtonClass = (index: number) => {
    if (selectedAnswer === null) return '';
    if (index === question.indexOfCorrectAnswer) return styles.quizAnswerCorrect;
    if (selectedAnswer === index) return styles.quizAnswerIncorrect;
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

      </Card>
    </section>
  )
}