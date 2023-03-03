// React imports
import { useOutletContext } from 'react-router-dom';
//Css imports
import classNames from 'classnames';
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
          selectNavigation === ETemplate.TOP_FIXED_NAV
            ? styles.fixedNavigation
            : undefined
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
        className={
          selectNavigation === ETemplate.TOP_FIXED_NAV
            ? classNames(styles.fixedMain, styles.mainContainer)
            : styles.mainContainer
        }
      >
        <div className={styles.subMain1}>Main 1</div>
        <div className={styles.subMain2}>Main 2</div>
      </main>
    </>
  );
};

export default HomePage;
