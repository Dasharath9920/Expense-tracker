import './index.css';
import Header from './components/header.js';
import Balance from './components/balance.js';
import Expense from './components/expense.js';
import History from './components/history.js';
import Input from './components/input.js';
import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <div className="container">
        <div className="frame">
          <GlobalProvider>
            <Header />
            <Balance />
            <Expense />
            <History />
            <Input />
          </GlobalProvider>
        </div>
    </div>
  );
}

export default App;
