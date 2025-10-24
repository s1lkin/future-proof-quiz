import type { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.css'

/**
 * I make this button simple, because I have only one button in the app.
 * Of course, it can be extended
 */

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode
  className?: string
}

export const Button = (props: ButtonProps) => {
  const { children, className, ...otherProps } = props

  return (
    <button
      className={`${styles.button} ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}