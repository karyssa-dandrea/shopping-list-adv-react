import React from 'react';
import { useList } from '../../context/ListContext';

export default function Header() {
  const { items } = useList();

  return (
    <header>
      <h2>Shopping List Items:</h2>
      <span>{items.length} on your list</span>
    </header>
  );
}
