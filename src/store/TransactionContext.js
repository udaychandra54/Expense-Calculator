import { createContext,useState } from "react";

export const TransactionContext = createContext();

const TransactionContextProvider=(props)=>{
    const [Transactions,setTransactions]=useState([
        {id:'p1',title:'calculator',amount:-500},
        {id:'p2',title:'Flower',amount:-50},
        {id:'p3',title:'Salary',amount:18000},
        {id:'p4',title:'rice',amount:-600}
    ])
  
    let expenseAmount=0;
    let incomeAmount=0;
    Transactions.map(transaction=>{
        let amount = transaction.amount;
     
        if(Math.sign(amount)===-1){
            return expenseAmount= expenseAmount+Number(amount);
        }else{
            return incomeAmount= incomeAmount+Number(amount);
        }
    })
    const addItem=(title,amount)=>{
        
        let transaction ={
            id:Math.random().toString(),
            title:title,
            amount:amount
        }
        setTransactions([...Transactions,transaction])
       
    }

    const removeItem=(id)=>{
        const newItem = Transactions.filter(transaction=>transaction.id!==id);
        setTransactions(newItem)
    }
       
    return(
        <TransactionContext.Provider value={{Transactions,expenseAmount,incomeAmount,addItem,removeItem}}>
                {props.children}
        </TransactionContext.Provider>
    )

}

export default TransactionContextProvider;