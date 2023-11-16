import React from 'react';
import './BudgetItem.css';

const BudgetItem = ({ item, onRemove, onEdit }) => {
  return (
    <div className="budget-item">
      <span>{item.name}</span>
      <span className="amount">{item.amount}           </span>
      <div className="buttons">
        <button onClick={() => onEdit()} className="edit-button">수정</button>
        <button onClick={onRemove} className="delete-button">삭제</button>
      </div>
    </div>
  );
};

export default BudgetItem;
