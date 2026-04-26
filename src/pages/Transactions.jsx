import React, { useContext, useState, useMemo, useCallback } from "react";
import { FinanceContext } from "../context/FinanceContext";
import TransactionItem from '../components/TransactionItem';

function Transactions() {
  const { transactions } = useContext(FinanceContext)
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("all")

  const handleSearch = useCallback((e) => setSearch(e.target.value), [])
  const handleFilter = useCallback((e) => setFilter(e.target.value), [])

  const filteredTransactions = useMemo(() => {
    const q = search.toLowerCase()
    return transactions
      .filter(t => t.name.toLowerCase().includes(q))
      .filter(t => filter === "all" ? true : t.type === filter)
  }, [transactions, search, filter])

  return (
    <div className="animation-container">
      <h1 className="page-title">Transactions</h1>
      <div className="filters-bar">
        <input className="input-field" type="text" placeholder='Search transactions...' onChange={handleSearch} />
        <select className="input-field" onChange={handleFilter}>
          <option value="all">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>
      <div className="transaction-list">
        {filteredTransactions.map((t) => (
          <TransactionItem key={t.id} transaction={t} />
        ))}
      </div>
    </div>
  )
}

export default Transactions
