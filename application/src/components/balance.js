import React,{useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {

   const {transactions} = useContext(GlobalContext);
   let amount = transactions.reduce((a,b) => a+b.amount,0).toFixed(2);

   return <div id="balance">
      <h2>your balance</h2>
      <h1 id="amount">${amount}</h1>
   </div>
}

export default Balance;