import { Card } from '../Card/Card.tsx';
import { EmailForm } from '../EmailForm/EmailForm.tsx';
import { type Dispatch, type SetStateAction } from 'react';
import type { QuizState } from '../../lib/sharedTypes.ts';
import styles from './EmailScreen.module.css';

interface EmailScreenProps {
  userEmail: string | undefined;
  setUserEmail: Dispatch<SetStateAction<string | undefined>>;
  setQuizState: Dispatch<SetStateAction<QuizState>>;
}

export const EmailScreen = (props: EmailScreenProps) => {
  const { userEmail, setUserEmail, setQuizState } = props

  return (
    <section>
      <Card className={styles.emailCard}>
        <EmailForm userEmail={userEmail} setUserEmail={setUserEmail} setQuizState={setQuizState}/>
      </Card>
    </section>
  )
}