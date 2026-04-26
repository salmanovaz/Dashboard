import { createContext, useState, useEffect, useCallback, useMemo } from 'react';

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    const data = JSON.parse(localStorage.getItem('transactions'));
    return data || [];
  });

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = useCallback((tx) => {
    setTransactions((prev) => [
      ...prev,
      { ...tx, createdAt: new Date().toISOString() },
    ]);
  }, []);

  const deleteTransaction = useCallback((id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const contextValue = useMemo(
    () => ({ transactions, addTransaction, deleteTransaction }),
    [transactions, addTransaction, deleteTransaction],
  );

  return (
    <FinanceContext.Provider value={contextValue}>
      {children}
    </FinanceContext.Provider>
  );
};