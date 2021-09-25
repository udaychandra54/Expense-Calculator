import React,{useContext} from 'react';
import { TransactionContext } from '../store/TransactionContext';

const TransactionList = () => {
   const {Transactions,removeItem}= useContext(TransactionContext);
  console.log(Transactions.length)
    return (
        <div>
            <h2>History</h2>
            <ul className="list" id="list">
                {Transactions.length!==0 &&Transactions.map(transaction=>{
                  return  <li className="minus" key={transaction.id}>
                    {transaction.title} <span>{transaction.amount}</span><button className="delete-btn" onClick={()=>removeItem(transaction.id)}>x</button>
                    </li>
                })}
                {
                    Transactions.length===0 && <p>No History Expenses Found</p>
                }
                
            </ul>
        </div>
    )
}

export default TransactionList
