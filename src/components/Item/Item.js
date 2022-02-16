import React from 'react';
import { useState } from 'react';

export default function Item({ item, updateItem, deleteItem }) {
  const [editing, setEditing] = useState(false);
  let itemContent;
  if (editing) {
    itemContent = (
      <div>
        <input
          value={item.text}
          onChange={(e) => {
            updateItem({
              ...item,
              text: e.target.value,
            });
          }}
        />
        <button type="button" onClick={() => setEditing(false)}>
          Save Changes
        </button>
      </div>
    );
  } else {
    itemContent = (
      <div>
        <p>{item.text}</p>
        <button type="button" onClick={() => setEditing(true)}>
          Edit
        </button>
      </div>
    );
  }
  return (
    <div>
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => {
          updateItem({
            ...item,
            done: e.target.checked,
          });
        }}
      />
      {itemContent}
      <button type="button" onClick={() => deleteItem(item.id)}>
        Delete
      </button>
    </div>
  );
}
