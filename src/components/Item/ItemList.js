import React from 'react';

export default function ItemList({ items }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="list">
            <p>{item.text}</p>
            <input type="checkbox" />
          </li>
        ))}
      </ul>
    </div>
  );
}
