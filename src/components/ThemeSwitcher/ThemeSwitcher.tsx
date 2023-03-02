import * as React from 'react';

function ThemeToggler() {
  const [theme, setTheme] = React.useState('light');
  const nextTheme = theme === 'light' ? 'dark' : 'light';
  React.useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);
  return <button onClick={() => setTheme(nextTheme)}>Change to {nextTheme} mode</button>;
}

function ThemeSection() {
  return (
    <div
      style={{
        position: 'absolute',
        top: '70px',
        padding: '24px',
        border: 'solid 1px black'
      }}
    >
      <div
        style={{
          padding: '20px',
          color: 'var(--primary-text)',
          backgroundColor: 'var(--background-color-primary)'
        }}
      >
        This text is the primary color
      </div>
      <ThemeToggler />
    </div>
  );
}
export default ThemeSection;
