import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router,useNavigate,Routes,Route} from 'react-router-dom';
import Balance from './Balance';
import InputField from './InputField';
import History from './History';
import Header from './Header';


export interface Transactions {
  transaction: {
    expense: string,
    amount: number | string,
    id? : any,
  }[]
  deleteItem? : any,
  editItem? : any
}


function App() {
  return (
    <div className="App">
      <Router>
        <Wrapper/>
      </Router>
    </div>
  );
}

export default App;

function Wrapper(){
  const [transaction,setTransaction] = useState<Transactions["transaction"]>([]);
  const [toggleAdd, setToggleAdd] = useState<boolean>(true);
  const [isEditItem, setIsEditItem] = useState<null|string>(null);
  const [prefillItem, setPrefillItem] = useState<{}>({});
  let navigate = useNavigate();

  const editItem = (id:any) => {
    const editedTransaction:any = transaction.find((el)=>{
      return el.id === id;
    })

    setToggleAdd(false);
    setPrefillItem(editedTransaction);
    setIsEditItem(id);

    navigate("/");
  }

  const deleteItem = (id:any) => {
    const finalList = transaction.filter((currEl)=>{
      return currEl.id !== id;
    })

    setTransaction(finalList);
  }

  return(
   <div>
     <Header/>
     <Routes>
       <Route path="/" element ={
         <div className='main-container'>
           <Balance transaction={transaction} />
           <InputField transaction={transaction} setTransaction={setTransaction} toggleAdd={toggleAdd} setToggleAdd={setToggleAdd} isEditItem={isEditItem} setIsEditItem={setIsEditItem} prefillItem={prefillItem}/>
         </div>
        }
       />
       <Route path="/history" element={
         <History deleteItem={deleteItem} editItem={editItem} transaction={transaction}/>
        }
       />
     </Routes>
     <div className='footer'></div>
   </div> 
  )
}
