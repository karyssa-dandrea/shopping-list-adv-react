import React from 'react';
import { useState } from 'react';

export default function AddItem({ addItem }) {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewItem('');
    addItem(newItem);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Add To List:
        <input
          placeholder="New Item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
