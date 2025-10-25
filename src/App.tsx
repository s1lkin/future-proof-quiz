import styles from './App.module.css'
import { Header } from './components/Header/Header.tsx'
import { HeroScreen } from './components/HeroScreen/HeroScreen.tsx'
import { QuizScreen } from './components/QuizScreen/QuizScreen.tsx'
import { ResultScreen } from './components/ResultScreen/ResultScreen.tsx'
import { QuestionsData } from './lib/questionsData.ts'
import { useQuizState } from './lib/useQuizState.ts'
import { EmailScreen } from './components/EmailScreen/EmailScreen.tsx'

function App() {
  const {
    quizState,
    selectedAnswer,
    setQuizState,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    setSelectedAnswer,
    userEmail,
    setUserEmail,
    answers,
    setAnswers
  } = useQuizState()

  const handleQuizRestart = () => {
    setAnswers([])
    setSelectedAnswer(null)
    setCurrentQuestionIndex(0)
  }

  return (
    <div className={styles.app}>
      <Header/>
      <main>
        {quizState === 'hero' && <HeroScreen setQuizState={setQuizState}/>}
        {quizState === 'quiz' &&
          <QuizScreen
            question={QuestionsData[currentQuestionIndex]}
            numberOfQuestions={QuestionsData.length}
            setQuizState={setQuizState}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
            setAnswers={setAnswers}
            handleQuizRestart={handleQuizRestart}
          />
        }
        {quizState === 'email' &&
          <EmailScreen
            userEmail={userEmail}
            setUserEmail={setUserEmail}
            setQuizState={setQuizState}
          />
        }
        {quizState === 'result' &&
          <ResultScreen
            userEmail={userEmail}
            answers={answers}
            setQuizState={setQuizState}
            handleQuizRestart={handleQuizRestart}
          />
        }
      </main>
    </div>
  )
}

export default App
