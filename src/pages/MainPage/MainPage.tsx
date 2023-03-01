// React imports
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// Component imports
import SelectTemplate from '../../components/SelectTemplate/SelectTemplate';
// Utils imports
import { ETemplate } from '../../utils/enums/enums';

const MainPage = (): JSX.Element => {
  const [select, setSelect] = useState<ETemplate>(ETemplate.TOP_NAV);
  return (
    <>
      <SelectTemplate onChangeSelect={setSelect} selectedValue={select} />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MainPage;
