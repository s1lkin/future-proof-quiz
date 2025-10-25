import styles from './App.module.css'
import { Header } from './components/Header/Header.tsx'
import { HeroScreen } from './components/HeroScreen/HeroScreen.tsx'
import { QuizScreen } from './components/QuizScreen/QuizScreen.tsx'
import { ResultScreen } from './components/ResultScreen/ResultScreen.tsx'
import { QUESTIONS } from './data/questions.ts'
import { useQuizState } from './lib/useQuizState.ts'

function App() {
  const {
    quizState,
    selectedAnswer,
    setQuizState,
    currentQuestion,
    setCurrentQuestion,
    setSelectedAnswer
  } = useQuizState()

  return (
    <div className={styles.app}>
      <Header/>
      <main>
        {quizState === 'hero' && <HeroScreen setQuizState={setQuizState}/>}
        {quizState === 'quiz' &&
          <QuizScreen
            question={QUESTIONS[currentQuestion]}
            numberOfQuestions={QUESTIONS.length}
            setQuizState={setQuizState}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
          />
        }
        {quizState === 'result' && <ResultScreen/>}
      </main>
    </div>
  )
}

export default App
