// TotalAmount.js
import React from 'react';
import './TotalAmount.css';

const TotalAmount = ({ total }) => {
  // `total`이 `undefined`인 경우 0을 사용하고, 소수점 제거
  const totalAmount = total ? Math.round(total) : 0;

  return (
    <div className="total-amount">
      총합계: {totalAmount}원
    </div>
  );
};

export default TotalAmount;
