export default (state,action) => {
   switch(action.type){
      case "DELETE_TRANSACTION":
         return {
            ...state,transactions: state.transactions.filter((transaction) => transaction.id !== action.payload)
         };
      case "ADD_TRANSACTION":
         return {
            ...state, transactions: [{id:action.id,text: action.name,amount:  action.amount},...state.transactions]
         };
      default:
         return state;
   }
}