import type { InputHTMLAttributes } from 'react'
import styles from './CheckBox.module.scss'

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean
  onChange: () => void
  label?: string
}

export const CheckBox = (props: CheckBoxProps) => {
  const { checked, onChange, label } = props
  return (
    <div className={styles.checkboxWrapper}>
      {label && <label
        className={styles.checkboxLabel}
        htmlFor='checkbox-button'
      >
        {label}
      </label>
      }
      <input
        type='checkbox'
        id='checkbox-button'
        className={styles.checkboxButton}
        checked={checked}
        onChange={onChange}
      />
    </div>
  )
}
