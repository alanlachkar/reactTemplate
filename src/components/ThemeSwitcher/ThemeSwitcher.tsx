// React imports
import * as React from 'react';
// Css imports
import styles from './ThemeSwitcher.css';

function ThemeToggler() {
  const [theme, setTheme] = React.useState('light');
  const nextTheme = theme === 'light' ? 'dark' : 'light';
  React.useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);
  return (
    <button className={styles.switchBtn} onClick={() => setTheme(nextTheme)}>
      Change to {nextTheme} mode
    </button>
  );
}

function ThemeSection() {
  return (
    <div
      className={styles.styleForDemo}
      style={{
        padding: '24px',
        border: 'solid 1px black'
      }}
    >
      <p>This text is the primary color</p>
      <ThemeToggler />
    </div>
  );
}
export default ThemeSection;
