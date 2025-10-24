import styles from './App.module.css'
import { useState } from 'react'
import { Header } from './components/Header/Header.tsx'
import { HeroScreen } from './components/HeroScreen/HeroScreen.tsx'
import { QuizScreen } from './components/QuizScreen/QuizScreen.tsx'
import { ResultScreen } from './components/ResultScreen/ResultScreen.tsx'

type QuizState = 'hero' | 'quiz' | 'result'

function App() {
  const [quizState, setQuizState] = useState<QuizState>('hero')

  console.log(setQuizState)
  return (
    <div className={styles.app}>
      <Header/>
      <main>
        {quizState === 'hero' && <HeroScreen/>}
        {quizState === 'quiz' && <QuizScreen/>}
        {quizState === 'result' && <ResultScreen/>}
      </main>
    </div>
  )
}

export default App
