// React imports
import { ChangeEvent } from 'react';
// Utils imports
import { ETemplate } from '../../utils/enums/enums';
// Css imports
import styles from './SelectTemplate.css';

interface OptionInterface {
  value: string;
  text: string;
}

const options = [
  { value: ETemplate.TOP_NAV, text: 'Top navigation' },
  { value: ETemplate.TOP_FIXED_NAV, text: 'Top fixed navigation' },
  { value: ETemplate.SIDE_NAV, text: 'Side Fixed navigation' }
];

interface SelectTemplateProperties {
  isFixedNavigation: boolean;
  selectedValue?: string;
  onChangeSelect?: (value: string) => void;
}

const SelectTemplate = (props: SelectTemplateProperties) => {
  const { selectedValue, onChangeSelect, isFixedNavigation } = props;

  return (
    <div
      className={
        isFixedNavigation ? styles.fixedNavigationStyle : styles.navigationStyles
      }
    >
      <label htmlFor="template-select">Choose a template:</label>
      <select
        name="templates"
        id="template-select"
        value={selectedValue}
        onChange={(event: ChangeEvent<HTMLSelectElement>) =>
          onChangeSelect ? onChangeSelect(event.target.value) : undefined
        }
      >
        {options.map((option: OptionInterface) => {
          return (
            <option value={option.value} key={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
      <p>{selectedValue}</p>
    </div>
  );
};

export default SelectTemplate;
