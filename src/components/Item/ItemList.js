import React from 'react';
import Item from './Item';

export default function ItemList({ items, deleteItem, updateItem }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="list">
            <p>{item.text}</p>
            <input type="checkbox" />
            <Item deleteItem={deleteItem} updateItem={updateItem} item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
