// React imports
import { ChangeEvent } from 'react';
// Utils imports
import { ETemplate } from 'src/utils/enums/enums';

interface OptionInterface {
  value: string;
  text: string;
}
const options = [
  { value: 'topNav', text: 'Top navigation' },
  { value: 'topFixedNav', text: 'Top fixed navigation' },
  { value: 'sideFixedNav', text: 'Side Fixed navigation' }
];

interface SelectTemplateProperties {
  selectedValue?: ETemplate;
  onChangeSelect?: (value: ETemplate) => void;
}

const SelectTemplate = (props: SelectTemplateProperties) => {
  const { selectedValue, onChangeSelect } = props;

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>): void => {
    if (onChangeSelect) {
      const template: ETemplate = e.target.value as ETemplate;
      onChangeSelect(template);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        paddingBottom: '32px'
      }}
    >
      <label htmlFor="template-select">Choose a template:</label>
      <select
        name="templates"
        id="template-select"
        value={selectedValue}
        onChange={onChangeSelect ? handleChangeSelect : undefined}
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
