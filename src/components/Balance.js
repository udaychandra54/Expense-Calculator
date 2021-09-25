import React,{useContext} from 'react';
import { TransactionContext } from '../store/TransactionContext';

const Balance = () => {
  const {expenseAmount,incomeAmount}=  useContext(TransactionContext);
  let amount=expenseAmount+incomeAmount;
    return (
        <div className="container">
            <h4>Your Balance</h4>
            <h1 id="balance">{amount}</h1>
        </div>
    )
}

export default Balance
