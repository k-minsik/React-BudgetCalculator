// BudgetList.js
import React from 'react';
import BudgetItem from './BudgetItem';
import './BudgetList.css';

const BudgetList = ({ items, onRemoveItem, onEditItem }) => {
  return (
    <div className="budget-list">
      {items.map((item, index) => (
        <BudgetItem
          key={index}
          item={item}
          onRemove={() => onRemoveItem(index)}
          onEdit={(newItem) => onEditItem(index, newItem)}
        />
      ))}
    </div>
  );
};

export default BudgetList;
