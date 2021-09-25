import React,{useContext} from 'react';
import { TransactionContext } from '../store/TransactionContext';

const IncomeExpenses = () => {
    const {expenseAmount,incomeAmount}= useContext(TransactionContext);
    return (
        <div className="inc-exp-container">
            <div>
                <h1>Income</h1>
                <div id="money-plus" className='money plus'>+{incomeAmount}</div>
            </div>
            <div>
                <h1>Expense</h1>
                <div id="money-minus" className='money minus'>{expenseAmount}</div>
            </div>
        </div>
    )
}

export default IncomeExpenses
