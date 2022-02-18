import React from 'react';
import { useList } from '../../context/ListContext';
import './Header.css';

export default function Header() {
  const { items } = useList();

  return (
    <header>
      <div className="header-list">
        <h2>Shopping List Items:</h2>
        <span>{items.length} on your list</span>
      </div>
    </header>
  );
}
