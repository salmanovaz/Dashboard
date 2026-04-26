import React, { memo, useContext, useCallback } from 'react';
import { FinanceContext } from '../context/FinanceContext';
import { formatDate } from '../utils/formatDate';

const TransactionItem = memo(({ transaction: t }) => {
  const { deleteTransaction } = useContext(FinanceContext);

  const handleDelete = useCallback(
    () => deleteTransaction(t.id),
    [deleteTransaction, t.id],
  );

  return (
    <div className="transaction-item">
      <div className="transaction-info">
        <h3 className="transaction-name">{t.name}</h3>
        <p className="transaction-category">{t.category || t.type}</p>
        {t.createdAt && (
          <span className="transaction-date">📅 {formatDate(t.createdAt)}</span>
        )}
      </div>
      <div className="transaction-actions">
        <span className={`transaction-amount ${t.type === 'income' ? 'amount-income' : 'amount-expense'}`}>
          {t.type === 'income' ? '+' : '-'}{t.amount} ₼
        </span>
        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
});

TransactionItem.displayName = 'TransactionItem';

export default TransactionItem;