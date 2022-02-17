import React from 'react';
import { useContext, useReducer, createContext } from 'react';

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

export const ListContext = createContext();

const ListProvider = ({ children }) => {
  const [items, dispatch] = useReducer(itemsReducer, initialItems);

  const addItem = (text) => {
    dispatch({
      type: 'add',
      id: items.length + 1,
      text,
    });
  };

  const updateItem = (task) => {
    dispatch({
      type: 'update',
      task,
    });
  };

  const deleteItem = (taskId) => {
    dispatch({
      type: 'delete',
      id: taskId,
    });
  };

  return (
    <ListContext.Provider value={{ items, addItem, updateItem, deleteItem }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;

export const useList = () => {
  const context = useContext(ListContext);

  if (!context) throw new Error('You must wrap your component with a ListProvider');
  return context;
};
