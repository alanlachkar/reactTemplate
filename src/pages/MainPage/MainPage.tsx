// React imports
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// Component imports
import SelectTemplate from '../../components/SelectTemplate/SelectTemplate';

const MainPage = (): JSX.Element => {
  const [select, setSelect] = useState<string>('topNav');
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
