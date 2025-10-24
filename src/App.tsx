import styles from './App.module.css'
import { useState } from 'react'
import { Header } from './components/Header/Header.tsx'
import { HeroScreen } from './components/HeroScreen/HeroScreen.tsx'
import { QuizScreen } from './components/QuizScreen/QuizScreen.tsx'
import { ResultScreen } from './components/ResultScreen/ResultScreen.tsx'
import { QUESTIONS } from './data/questions.ts'
import type { QuizState } from './types/sharedTypes.ts'

function App() {
  const [quizState, setQuizState] = useState<QuizState>('hero')
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index)
  }

  return (
    <div className={styles.app}>
      <Header/>
      <main>
        {quizState === 'hero' && <HeroScreen setQuizState={setQuizState}/>}
        {quizState === 'quiz' &&
          <QuizScreen
            question={QUESTIONS[0]}
            handleAnswerSelect={handleAnswerSelect}
            selectedAnswer={selectedAnswer}
          />
        }
        {quizState === 'result' && <ResultScreen/>}
      </main>
    </div>
  )
}

export default App
