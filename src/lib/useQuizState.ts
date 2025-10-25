import { useEffect, useState } from 'react'
import type { QuizState } from './sharedTypes.ts'

/**
 * Interface representing the stored state of a quiz application.
 * @property quizState - Represents the current state of the quiz.
 * @property selectedAnswer - The index of the answer selected by the user, or null if no selection has been made.
 * @property currentQuestionIndex - Indicates the index of the question currently being presented to the user.
 * @property userEmail - The email address of the user associated with the current quiz session, if provided.
 * @property answers - A collection of the answers recorded for the quiz.
 */
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
 *
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