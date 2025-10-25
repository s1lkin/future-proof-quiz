import {
  type Dispatch,
  type SetStateAction,
  type FormEvent,
  type ChangeEvent,
  useState,
} from 'react';
import type { QuizState } from '../../lib/sharedTypes.ts';
import { Button } from '../Button/Button.tsx';
import styles from './EmailForm.module.css';

interface EmailFormProps {
  userEmail: string | undefined;
  setUserEmail: Dispatch<SetStateAction<string | undefined>>;
  setQuizState: Dispatch<SetStateAction<QuizState>>;
}

const EMAIL_REGEX = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

export const EmailForm = (props: EmailFormProps) => {
  const { userEmail, setUserEmail, setQuizState} = props;
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value)
  }

  const handleBlur = () => {
    if (!userEmail) {
      setError('Email is required.');
    } else if (!EMAIL_REGEX.test(userEmail)) {
      setError('Please enter a valid email address.');
    } else {
      setError(null);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (userEmail && EMAIL_REGEX.test(userEmail)) {
      setUserEmail(userEmail);
      setQuizState('result');
    } else {
      handleBlur();
    }
  };

  return (
    <form className={styles.emailForm} onSubmit={handleSubmit}>
      <label className={styles.emailLabel} htmlFor="email-input">Email address</label>
      <input
        placeholder="mail@example.com"
        className={styles.emailInput}
        id="email-input"
        value={userEmail}
        onChange={handleChange}
        onBlur={handleBlur}
        aria-invalid={!!error}
        aria-describedby="email-error"
      />

      {error && <p className={styles.emailError}>{error}</p>}

      <Button disabled={!!error} className={styles.emailSubmitButton} variant="primary" type="submit">Submit</Button>
    </form>
  );
};