import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const History = () => {

   const {transactions, deleteTransaction} = useContext(GlobalContext);

   return <div className="history">
      <h2 className="heading">history</h2>
      <div className="underline"></div>
      <ul id="history">
         {
            transactions.map((transaction) => {
               let colour = "red"
               if(transaction.amount>=0)
                  colour = "green";
               return  <li key = {transaction.id} id = {transaction.id}>
                        <div className="transaction" style={{borderRight: `5px solid ${colour}`}}>
                           <button id = "remove-btn" onClick = {() => {
                              deleteTransaction(transaction.id)
                           }}>X</button>
                           <h2 >{transaction.text}</h2>
                           <h2>${transaction.amount}</h2>
                        </div>
                     </li>
            })
         }
      </ul>
   </div>
}

export default History;