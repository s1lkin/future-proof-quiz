import { useEffect, useState } from 'react'
import type { QuizState } from '../types/sharedTypes.ts'

interface StoredState {
  quizState: QuizState
  selectedAnswer: number | null
  currentQuestion: number
}

const INITIAL_STATE: StoredState = {
  quizState: 'hero',
  selectedAnswer: null,
  currentQuestion: 0,
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

export const useQuizState = () => {
  const initialState = getInitialState()
  const [quizState, setQuizState] = useState<QuizState>(initialState.quizState)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(initialState.selectedAnswer)
  const [currentQuestion, setCurrentQuestion] = useState<number>(initialState.currentQuestion)

  useEffect(() => {
    const stateToStore: StoredState = {
      quizState,
      selectedAnswer,
      currentQuestion,
    }

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToStore))
    } catch (error) {
      console.error('useLocalstorage error while saving quiz state:', error)
    }
  }, [quizState, selectedAnswer, currentQuestion])

  return {
    quizState,
    selectedAnswer,
    currentQuestion,
    setQuizState,
    setSelectedAnswer,
    setCurrentQuestion
  }
}