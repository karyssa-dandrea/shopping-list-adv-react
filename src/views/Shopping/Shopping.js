import React from 'react';
import AddItem from '../../components/AddItem/AddItem';
import ItemList from '../../components/Item/ItemList';
import { useList } from '../../context/ListContext';
import './Shopping.css';

export default function Shopping() {
  const { items, addItem, updateItem, deleteItem } = useList();

  return (
    <div>
      <h2>Shopping List:</h2>
      <AddItem addItem={addItem} />
      <ItemList items={items} updateItem={updateItem} deleteItem={deleteItem} />
    </div>
  );
}
