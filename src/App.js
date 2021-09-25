import "./App.css";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import TransactionContextProvider from "./store/TransactionContext";


const App=()=> {

  return (
    <TransactionContextProvider>
    <div className="App">
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
    </TransactionContextProvider>
  );
}

export default App;
