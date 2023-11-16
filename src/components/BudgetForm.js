import React, { useState, useEffect } from 'react';
import './BudgetForm.css';

const BudgetForm = ({ onAddItem, editingItem }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    // 수정할 아이템이 있을 경우, 입력 필드에 해당 정보를 채워넣음
    if (editingItem) {
      setName(editingItem.name);
      setAmount(editingItem.amount);
    }
  }, [editingItem]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddItem({ name, amount: parseFloat(amount) });
    setName('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="budget-form">
      <input
        className="input"
        type="text"
        placeholder="항목"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input"
        type="number"
        placeholder="금액"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit" className="button">{editingItem ? '수정' : '추가'}</button>
    </form>
  );
};

export default BudgetForm;
