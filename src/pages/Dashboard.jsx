import React, { useContext, useMemo } from "react"
import { FinanceContext } from "../context/FinanceContext"
import Card from "../components/Card";

function Dashboard() {
  const { transactions } = useContext(FinanceContext)

  const income = useMemo(
    () => transactions.filter(t => t.type === "income").reduce((a, b) => a + b.amount, 0),
    [transactions]
  )

  const expense = useMemo(
    () => transactions.filter(t => t.type === "expense").reduce((a, b) => a + b.amount, 0),
    [transactions]
  )

  const balance = useMemo(() => income - expense, [income, expense])

  return (
    <div className="animation-container">
      <h1 className="page-title">Dashboard</h1>
      <div className="dashboard-grid">
        <Card title="Balance" value={balance} color="var(--accent)" />
        <Card title="Income" value={income} color="var(--income)" />
        <Card title="Expense" value={expense} color="var(--expense)" />
      </div>
    </div>
  );
}

export default Dashboard;