import React, { useState, useContext, useCallback } from "react";
import { FinanceContext } from "../context/FinanceContext";
import { useNavigate } from "react-router-dom";

const AddTransaction = () => {
  const { addTransaction } = useContext(FinanceContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [category, setCategory] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!name || !amount) {
        alert("Boş buraxmaq olmaz");
        return;
      }
      addTransaction({
        id: Date.now(),
        name,
        amount: Number(amount),
        type,
        category,
      });
      navigate("/transactions");
    },
    [name, amount, type, category, addTransaction, navigate]
  );

  return (
    <div className="animation-container">
      <h1 className="page-title">Add Transaction</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              className="input-field"
              type="text"
              placeholder="Transaction Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              className="input-field"
              type="number"
              placeholder="Amount (₼)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="form-group">
            <select className="input-field" value={type} onChange={(e) => setType(e.target.value)}>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <div className="form-group">
            <input className="input-field" type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
          </div>
          <button className="btn" type="submit" style={{width: '100%', marginTop: '1rem'}}>Add Transaction</button>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
