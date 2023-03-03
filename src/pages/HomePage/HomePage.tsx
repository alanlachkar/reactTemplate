// React imports
import { useOutletContext } from 'react-router-dom';
//Css imports
import styles from './HomePage.css';
// Utils imports
import { ETemplate } from '../../utils/enums/enums';

const HomePage = () => {
  const [selectNavigation, _] = useOutletContext<ETemplate>();
  return (
    <>
      <header
        // /!\ Keep this className only if you want and fixed top navigation bar
        className={
          selectNavigation === ETemplate.TOP_FIXED_NAV ? styles.fixedNavigation : {}
        }
        style={{
          gridArea: 'nav',
          backgroundColor: 'var(--success-color)',
          color: 'var(--primary-text)'
        }}
      >
        Navigation
      </header>
      <main
        // /!\ Keep this className only if you want and fixed top navigation bar
        className={selectNavigation === ETemplate.TOP_FIXED_NAV ? styles.fixedMain : {}}
        style={{ gridArea: 'main', display: 'flex', height: '1200px' }}
      >
        <div
          style={{
            backgroundColor: 'var(--error-color)',
            flexGrow: 1,
            color: 'var(--primary-text)'
          }}
        >
          Main 1
        </div>
        <div
          style={{
            backgroundColor: 'var(--warning-color)',
            flexGrow: 1,
            color: 'var(--primary-text)'
          }}
        >
          Main 2
        </div>
      </main>
    </>
  );
};

export default HomePage;
