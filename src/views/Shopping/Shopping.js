import React from 'react';

const initialItems = [
  { id: 0, text: 'Oatmilk', done: false },
  { id: 1, text: 'Jalapenos', done: false },
  { id: 2, text: 'Potatoes', done: false },
];

function itemsReducer(items, action) {
  switch (action.type) {
    case 'add': {
      return [
        ...items,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'update': {
      return items.map((item) => {
        if (item.id === action.task.id) {
          return action.task;
        }
        return item;
      });
    }
    case 'delete': {
      return items.filter((item) => item.id !== action.id);
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}

export default function Shopping() {
  return <div>Shopping</div>;
}
