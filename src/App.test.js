import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import Shopping from './views/Shopping/Shopping';

test('test for behavioral and components', () => {
  render(<Shopping />);

  const itemInput = screen.getByRole('textbox');
  expect(itemInput).toBeInTheDocument();

  userEvent.type(itemInput, 'Oatmilk');
  expect(itemInput.value).toBe('Oatmilk');

  const addButton = screen.getByRole('button', { name: 'Add' });
  expect(addButton).toBeInTheDocument();
  userEvent.click(addButton);
});
