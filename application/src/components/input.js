import React,{useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const Input = () => {

   const [text, setText] = useState('');
   const [amount, setAmount] = useState('');
   const {addTransaction} = useContext(GlobalContext);

   const clickHandler = (e) => {
      e.preventDefault();
      if(text.length===0)
         window.alert("Enter valid name");
      else{
         addTransaction(text,amount || 0);
         setText('');
         setAmount('');
      }
   }

   return <div className="new_transaction">
      <h2 className="heading">add new transaction</h2>
      <div className="underline"></div>
      <label htmlFor="input">Text</label>

      <input type="text" value = {text} onChange = {(e) => setText(e.target.value)} placeholder = "Enter text" id = "name"/>

      <label htmlFor="amount">amount<br />(negative - expense, positive - income)</label>

      <input value = {amount} onChange = {(e) => setAmount(e.target.value)} type="number" placeholder = "Enter amount" id = "name"/>
      <button onClick = {clickHandler} className="btn">add transaction</button>
   </div>
}

export default Input;