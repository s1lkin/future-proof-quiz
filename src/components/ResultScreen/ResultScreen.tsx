import { Card } from '../Card/Card.tsx'
import styles from './ResultScreen.module.css'
import type { QuizState } from '../../lib/sharedTypes.ts'
import type { Dispatch, SetStateAction } from 'react'
import { Button } from '../Button/Button.tsx'

interface ResultScreenProps {
  userEmail: string | undefined;
  answers: string[];
  setQuizState: Dispatch<SetStateAction<QuizState>>;
  handleQuizRestart: () => void;
}

export const ResultScreen = (props: ResultScreenProps) => {
  const { userEmail, answers, setQuizState, handleQuizRestart } = props

  const handleRestart = () => {
    handleQuizRestart()
    setQuizState('hero')
  }

  return (
    <section>
      <Card className={styles.resultCard}>
        <div className={styles.resultImgContainer}>
          <img className={styles.resultImg} src="/trophy.png" alt="trophy" />
        </div>
        <h3 className={styles.resultTitle}>Congratulation you finished the quiz</h3>
        <p className={styles.resultText}>
          Your email: <span className={styles.resultTextHighlight}>{userEmail}</span>
        </p>
        <p className={styles.resultText}>
          Your answers:
        </p>
        <ol className={styles.resultAnswers}>
          {answers.map((answer, index) => (
            <li
              className={styles.resultText}
              key={`${answer}-result-answer${index}`}
            >
              <span className={styles.resultTextHighlight}>{answer}</span>
            </li>
          ))}
        </ol>
        <Button onClick={handleRestart} variant={'primary'}>Try again</Button>
      </Card>
    </section>
  )
}