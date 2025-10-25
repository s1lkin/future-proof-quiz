import type { Dispatch, SetStateAction } from 'react'
import type { QuizState } from '../../types/sharedTypes.ts'
import { Button } from '../Button/Button.tsx'
import { Card } from '../Card/Card.tsx'
import styles from './HeroScreen.module.css'

interface HeroScreenProps {
  setQuizState: Dispatch<SetStateAction<QuizState>>;
}

export const HeroScreen = (props: HeroScreenProps) => {
  const { setQuizState } = props

  const handleQuizStart = () => {
    setQuizState('quiz')
  }

  return (
    <section>
      <Card className={styles.heroCard}>
        <h1 className={styles.heroTitle}>Welcome to future proof quiz. It made with love</h1>
        <p className={styles.heroText}>
          Enjoy peace of mind with protection that runs quietly in the background, and take the quiz
        </p>
        <Button
          variant="primary"
          onClick={handleQuizStart}
        >
          Start quiz
        </Button>
      </Card>
    </section>
  )
}
