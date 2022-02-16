import React,{useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const Expense = () => {

   const {transactions} = useContext(GlobalContext);
   let total = transactions.reduce((a,b) => a+b.amount,0).toFixed(2);
   let income = transactions.reduce((a,b) => {
      if(b.amount>0)
         a += b.amount;
      return a;
   },0).toFixed(2);

   return <div className="expense">
      <div className="income">
         <h2>income</h2>
         <h2 id="income">${income}</h2>
      </div>
      <div className="vertical-line"></div>
      <div className="income">
         <h2>expense</h2>
         <h2 id="expense">${(total-income).toFixed(2)}</h2>
      </div>
   </div>
}

export default Expense;