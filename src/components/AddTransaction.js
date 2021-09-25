import React, { useState,useContext } from "react";
import { TransactionContext } from '../store/TransactionContext';

const AddTransaction = () => {
  const [amount, setAmount] = useState(0);
  const [title, setTitle] = useState("");
  const {addItem} = useContext(TransactionContext)
  const submitHandler=(e)=>{
    e.preventDefault();
 
    addItem(title,amount)
  }
  return (
    <div>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
