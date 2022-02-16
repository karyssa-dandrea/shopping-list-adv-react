import React from 'react';
import Item from './Item';

export default function ItemList({ items, deleteItem, updateItem }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="list">
            <Item deleteItem={deleteItem} updateItem={updateItem} item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
