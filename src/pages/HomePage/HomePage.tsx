// React imports
import { useOutletContext } from 'react-router-dom';
//Css imports
import styles from './HomePage.css';
// Utils imports
import { ETemplate } from '../../utils/enums/enums';
import ThemeSection from '../../components/ThemeSwitcher/ThemeSwitcher';

const HomePage = () => {
  const [selectNavigation, _] = useOutletContext<ETemplate>();
  return (
    <>
      <header
        className={
          selectNavigation === ETemplate.TOP_FIXED_NAV ? styles.fixedNavigation : {}
        } // Keep this className only if you want and fixed top navigation bar
        style={{ gridArea: 'nav', backgroundColor: 'var(--success-color)' }}
      >
        Navigation
      </header>
      <main
        className={selectNavigation === ETemplate.TOP_FIXED_NAV ? styles.fixedMain : {}} // Keep this className only if you want and fixed top navigation bar
        style={{ gridArea: 'main', display: 'flex', height: '1200px' }}
      >
        <div style={{ backgroundColor: 'var(--error-color)', flexGrow: 1 }}>Main 1</div>
        <div style={{ backgroundColor: 'var(--warning-color)', flexGrow: 1 }}>Main 2</div>
      </main>
    </>
  );
};

export default HomePage;
