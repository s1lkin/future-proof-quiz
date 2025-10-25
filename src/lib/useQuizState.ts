import { useEffect, useState } from 'react'
import type { QuizState } from './sharedTypes.ts'

interface StoredState {
  quizState: QuizState
  selectedAnswer: number | null
  currentQuestionIndex: number
  userEmail: string | undefined
  answers: string[]
}

const INITIAL_STATE: StoredState = {
  quizState: 'hero',
  selectedAnswer: null,
  currentQuestionIndex: 0,
  userEmail: undefined,
  answers: []
}

const STORAGE_KEY = 'appState'

const getInitialState = (): StoredState => {
  try {
    const storedValue = localStorage.getItem(STORAGE_KEY)
    if (storedValue) {
      return JSON.parse(storedValue)
    }
  } catch (error) {
    console.error('getInitialState error while parsing stored quiz state:', error)
  }
  return INITIAL_STATE
}

/**
 * A custom hook that manages and persists the state of a quiz application.
 * This hook integrates with local storage to save and restore the quiz state.
 * Maybe better approach can be useReducer with Context, it helps to avoid props drilling
 * but here I haven't deep props drilling and I choose separate useStates
 */
export const useQuizState = () => {
  const initialState = getInitialState()
  const [quizState, setQuizState] = useState<QuizState>(initialState.quizState)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(initialState.selectedAnswer)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(initialState.currentQuestionIndex)
  const [userEmail, setUserEmail] = useState<string | undefined>(initialState.userEmail)
  const [answers, setAnswers] = useState<string[]>(initialState.answers)

  useEffect(() => {
    const stateToStore: StoredState = {
      quizState,
      selectedAnswer,
      currentQuestionIndex,
      userEmail,
      answers
    }

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToStore))
    } catch (error) {
      console.error('useLocalstorage error while saving quiz state:', error)
    }
  }, [quizState, selectedAnswer, currentQuestionIndex, userEmail, answers])

  return {
    quizState,
    userEmail,
    setUserEmail,
    selectedAnswer,
    currentQuestionIndex,
    setQuizState,
    setSelectedAnswer,
    setCurrentQuestionIndex,
    answers,
    setAnswers
  }
}