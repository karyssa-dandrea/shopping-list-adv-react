import React from 'react';
import AddItem from '../../components/AddItem/AddItem';
import ItemList from '../../components/Item/ItemList';
import { useList } from '../../context/ListContext';

export default function Shopping() {
  const { items, addItem, updateItem, deleteItem } = useList();

  return (
    <div>
      Shopping List!
      <AddItem addItem={addItem} />
      <ItemList items={items} updateItem={updateItem} deleteItem={deleteItem} />
    </div>
  );
}
