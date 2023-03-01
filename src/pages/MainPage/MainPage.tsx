// React imports
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// Component imports
import SelectTemplate from '../../components/SelectTemplate/SelectTemplate';
// Utils imports
import { ETemplate } from '../../utils/enums/enums';
// Css imports
import styles from './MainPage.css';

const MainPage = (): JSX.Element => {
  const [selectNavigation, setSelectNavigation] = useState<ETemplate>(ETemplate.TOP_NAV);

  return (
    <>
      <div className={getTemplateStyle(selectNavigation)}>
        {/* Each new child page (like HomePage) will need a grid-area css style to understand if it belongs to nav or main (see Main.css) */}
        <Outlet />
      </div>
      <SelectTemplate
        isFixedNavigation={selectNavigation === ETemplate.TOP_FIXED_NAV}
        onChangeSelect={(newValue: string): void =>
          setSelectNavigation(newValue as ETemplate)
        }
        selectedValue={selectNavigation}
      />
    </>
  );
};

const getTemplateStyle = (selectValue: ETemplate) => {
  let templateStyle;
  switch (selectValue) {
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
