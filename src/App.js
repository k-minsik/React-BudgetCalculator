import React, { useState } from 'react';
import BudgetForm from './components/BudgetForm';
import BudgetList from './components/BudgetList';
import TotalAmount from './components/TotalAmount';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleAddItem = (newItem) => {
    if (editingIndex >= 0) {
      setItems(items.map((item, index) => (index === editingIndex ? newItem : item)));
      setEditingIndex(-1);
    } else {
      setItems([...items, newItem]);
    }
  };

  const handleRemoveItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleEditItem = (index) => {
    setEditingIndex(index);
  };

  const handleClearItems = () => {
    setItems([]);
  };

  const calculateTotal = () => {
    return items.reduce((acc, item) => acc + Number(item.amount), 0);
  };

  const totalAmount = calculateTotal();

  return (
    <div className="app-container">
      <h1>예산 계산기</h1>
      <div className="white-box">
        <BudgetForm onAddItem={handleAddItem} editingItem={items[editingIndex]} />
        <BudgetList items={items} onRemoveItem={handleRemoveItem} onEditItem={handleEditItem} />
        <button onClick={handleClearItems} className="clear-items-button">목록 지우기</button>
      </div>
        <TotalAmount total={totalAmount} />
    </div>
  );
};

export default App;
