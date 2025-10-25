import type { ReactNode } from 'react'
import styles from './Card.module.css'

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = (props: CardProps) => {
  const { children, className = '' } = props

  return (
    <div className={`${styles.cardWrapper} ${className}`}>
      {children}
    </div>
  )
}