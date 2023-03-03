// Component imports
import ThemeChanger from './ThemeChanger';
// Utils imports
import '@testing-library/jest-dom';
import { fireEvent, getByText } from '@testing-library/dom';
import { render, cleanup, screen } from '@testing-library/react';

afterEach(cleanup);

let container: HTMLElement;

describe('ThemeChanger component suites tests', () => {
  beforeEach(() => {
    const component = render(<ThemeChanger />);
    container = component.container;
  });
  test('Verify displayed', () => {
    expect(container).toBeInTheDocument();
    expect(getByText(container, 'Change to dark mode')).toBeInTheDocument();
  });
  test('Click and check the render', () => {
    expect(container).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('theme-button'));
    expect(getByText(container, 'Change to light mode')).toBeInTheDocument();
  });
});
