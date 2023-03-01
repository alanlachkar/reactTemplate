// React imports
import { render, cleanup } from '@testing-library/react';
// Component imports
import SelectTemplate from './SelectTemplate';
// Utils imports
import '@testing-library/jest-dom';
import { getByText } from '@testing-library/dom';
import { ETemplate } from '../../utils/enums/enums';

afterEach(cleanup);

let container: HTMLElement;

describe('SelectTemplate component suites tests', () => {
  beforeEach(() => {
    const component = render(<SelectTemplate selectedValue={ETemplate.TOP_NAV} />);
    container = component.container;
  });
  test('Verify displayed', () => {
    expect(container).toBeInTheDocument();
    expect(getByText(container, 'Choose a template:')).toBeInTheDocument();
    expect(getByText(container, 'Top navigation')).toBeInTheDocument();
  });
});
