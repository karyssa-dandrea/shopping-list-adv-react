import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('test for behavioral and components', () => {
  render(<App />);

  const itemInput = screen.getByRole('textbox');
  expect(itemInput).toBeInTheDocument();

  userEvent.type(itemInput, 'Oatmilk');
  expect(itemInput.value).toBe('Oatmilk');

  const addButton = screen.getByRole('button', { name: 'Add' });
  expect(addButton).toBeInTheDocument();
  userEvent.click(addButton);

  const deleteButton = screen.getByLabelText('Delete Jalapenos');
  userEvent.click(deleteButton);
  expect(screen.queryByText(' Jalapenos ')).not.toBeInTheDocument();

  const editButton = screen.getByLabelText('Edit Potatoes');
  userEvent.click(editButton);
  const saveEditButton = screen.getByLabelText('Save');
  userEvent.click(saveEditButton);
});
