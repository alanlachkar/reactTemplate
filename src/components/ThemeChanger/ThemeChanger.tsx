// React imports
import { useState } from 'react';
// Css imports
import styles from './ThemeSwitcher.css';

function ThemeChanger() {
  const [theme, setTheme] = useState<string>(initializeThemeAttribute);
  const onChangeTheme = (): void => {
    setTheme((oldTheme) => {
      const nextTheme = getNextTheme(oldTheme);
      document.body.setAttribute('data-theme', nextTheme);
      return nextTheme;
    });
  };
  return (
    <button className={styles.themeButton} onClick={onChangeTheme}>
      Change to {getNextTheme(theme)} mode
    </button>
  );
}

/**
 * Initialize the theme during the component's mounting
 * @returns the current theme
 */
const initializeThemeAttribute = (): string => {
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

/**
 * Get the next theme according to the current theme
 * @param theme the current theme
 * @returns the next theme
 */
const getNextTheme = (theme: string): string => {
  let nextTheme: string;
  switch (theme) {
    case 'light':
      nextTheme = 'dark';
      break;
    case 'dark':
      nextTheme = 'light';
      break;
    default:
      nextTheme = 'light';
      break;
  }
  return nextTheme;
};

export default ThemeChanger;
