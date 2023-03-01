import { ChangeEvent } from 'react';

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
  selectedValue: string | undefined;
  onChangeSelect: (value: string) => void;
}

const SelectTemplate = (props: SelectTemplateProperties) => {
  const { selectedValue, onChangeSelect } = props;
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
        onChange={(e: ChangeEvent<HTMLSelectElement>): void =>
          onChangeSelect(e.target.value)
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
