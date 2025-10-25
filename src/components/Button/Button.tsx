import type { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.css'

type ButtonVariants = 'primary' | 'secondary' | 'quiz'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode
  variant: ButtonVariants
  className?: string
}

const variantClasses: Record<ButtonVariants, string> = {
  'primary': styles.primaryButton,
  'quiz': styles.quizButton,
  'secondary': styles.secondaryButton
}

export const Button = (props: ButtonProps) => {
  const { children, className, variant, ...otherProps } = props

  const classes = [
    className,
    variantClasses[variant]
  ].join(' ')

  return (
    <button
      className={`${styles.button} ${classes}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}