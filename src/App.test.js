import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('test for adding, editing and deleting in list', () => {
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

test('renders list of items on page', () => {
  render(<App />);
  const itemList = screen.getAllByRole('listitem');
  expect(itemList).toHaveLength(3);
});
