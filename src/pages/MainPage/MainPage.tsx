// React imports
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// Component imports
import ThemeChanger from '../../components/ThemeChanger/ThemeChanger';
import SelectTemplate from '../../components/SelectTemplate/SelectTemplate';
// Utils imports
import { ETemplate } from '../../utils/enums/enums';
// Css imports
import styles from './MainPage.css';

const MainPage = (): JSX.Element => {
  const [selectNavTemplate, setSelectNavTemplate] = useState<ETemplate>(
    ETemplate.TOP_NAV
  );
  const handleSelectNavTemplate = (newValue: ETemplate): void => {
    setSelectNavTemplate(newValue);
  };

  return (
    <>
      <NavigationForDemo
        selectNavTemplate={selectNavTemplate}
        handleSelectNavTemplate={handleSelectNavTemplate}
      />
      <div className={getTemplateStyle(selectNavTemplate)}>
        {/* Each new child page (like HomePage) will need a grid-area css style to understand if it belongs to nav or main (see Main.css) */}
        <Outlet context={[selectNavTemplate, handleSelectNavTemplate]} />
      </div>
    </>
  );
};

interface NavigationForDemoProperties {
  selectNavTemplate: ETemplate;
  handleSelectNavTemplate(newValue: ETemplate): void;
}

const NavigationForDemo = (props: NavigationForDemoProperties): JSX.Element => {
  const { selectNavTemplate, handleSelectNavTemplate } = props;
  return (
    <>
      <header className={styles.headerForDemo}>
        <div>
          <p className={styles.textForDemo}>
            This line is here only for demonstration purpose
          </p>
          <p className={styles.textForDemo}>
            Don't hesitate to scroll down to check the layout's behavior
          </p>
        </div>
        <SelectTemplate
          isFixedNavigation={selectNavTemplate === ETemplate.TOP_FIXED_NAV}
          onChangeSelect={(newValue: string): void =>
            handleSelectNavTemplate(newValue as ETemplate)
          }
          selectedValue={selectNavTemplate}
        />
        <ThemeChanger />
      </header>
    </>
  );
};

/**
 * Get the template style
 * @param selectNavTemplate value from the enum
 * @returns appropriate style for layout of components
 */
const getTemplateStyle = (selectNavTemplate: ETemplate) => {
  let templateStyle;
  switch (selectNavTemplate) {
    case ETemplate.TOP_NAV:
      templateStyle = styles.topBarNavigation;
      break;
    case ETemplate.TOP_FIXED_NAV:
      templateStyle = styles.topFixedBarNavigation;
      break;
    case ETemplate.SIDE_NAV:
      templateStyle = styles.sideBarNavigation;
      break;
    default:
      templateStyle = undefined;
      break;
  }
  return templateStyle;
};

export default MainPage;
