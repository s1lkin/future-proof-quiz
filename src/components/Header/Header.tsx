import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <img className={styles.logo} src="/futureproof-logo-white.png" alt="futureprooflogo" />
    </header>
  )
}
