import styles from './App.module.css'
import { useState } from 'react'
import { Header } from './components/Header/Header.tsx'
import { HomeScreen } from './components/HomeScreen/HomeScreen.tsx'
import { QuizScreen } from './components/QuizScreen/QuizScreen.tsx'
import { ResultScreen } from './components/ResultScreen/ResultScreen.tsx'

type QuizState = 'home' | 'quiz' | 'result'

function App() {
  const [quizState, setQuizState] = useState<QuizState>('home')

  console.log(setQuizState)
  return (
    <div className={styles.app}>
      <Header/>
      <>
        {quizState === 'home' && <HomeScreen/>}
        {quizState === 'quiz' && <QuizScreen/>}
        {quizState === 'result' && <ResultScreen/>}
      </>
    </div>
  )
}

export default App
