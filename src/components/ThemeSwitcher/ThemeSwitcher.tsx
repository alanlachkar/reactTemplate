// React imports
import { useState } from 'react';
// Css imports
import styles from './ThemeSwitcher.css';

function ThemeToggler() {
  const [theme, setTheme] = useState<string>(getThemeAttribute);
  const toggleTheme = (): void => {
    setTheme((oldTheme) => {
      const nextTheme = oldTheme === 'light' ? 'dark' : 'light';
      document.body.setAttribute('data-theme', nextTheme);
      return nextTheme;
    });
  };
  return (
    <button className={styles.switchBtn} onClick={toggleTheme}>
      Change to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
}

const getThemeAttribute = (): string => {
  let returnedValue: string;
  const attribute = document.body.getAttribute('data-theme');
  if (attribute) {
    returnedValue = attribute;
  } else {
    document.body.dataset.theme = 'light';
    returnedValue = 'light';
  }
  return returnedValue;
};

export default ThemeToggler;
