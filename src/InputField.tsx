import React,{useState} from 'react';
import "./App.css";
import { Transactions as Props } from './App';
import { useNavigate } from "react-router-dom";

interface Iprops {
    transaction: Props["transaction"],
    setTransaction: React.Dispatch<React.SetStateAction<Input[]>>,
    toggleAdd: boolean,
    isEditItem? : any,
    setIsEditItem: any,
    setToggleAdd: any,
    prefillItem: any
}

type Input = {
    expense: string,
    amount: string | number,
    id?: any
}

const InputField = ({transaction,setTransaction,toggleAdd,setToggleAdd,isEditItem,setIsEditItem,prefillItem}:Iprops) => {
    const [input,setInput] = useState<Input>({
        expense: "",
        amount: "",
        id: ""
    })

    let navigate =useNavigate();

    let input_exp = document.getElementById('exp')! as HTMLInputElement;
    let input_amt = document.getElementById('amt')! as HTMLInputElement;

    const handleChange = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>):void => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })

        if(input && !toggleAdd){
            input_exp.placeholder = prefillItem.expense;
            input_amt.placeholder = prefillItem.amount;
        }
    }

    const handleClick = () => {
        if( !input.expense || !input.amount ){
            alert("Please fill all the data");
        }else if( input && !toggleAdd){
            setTransaction(
                transaction.map((el)=>{
                    if(el.id===isEditItem){
                        return { ...el, expense: input.expense, amount: input.amount };
                    }
                    return el;
                })
            );

            setInput({
                expense: "",
                amount: "",
                id: ""
            });

            setToggleAdd(true);
            setIsEditItem(null);
            navigate("/history");
        }
        else{
            setTransaction([
                ...transaction,
                {
                    expense: input.expense,
                    amount: input.amount,
                    id: new Date().getTime().toString()
                }
            ]);

            setInput({
                expense: "",
                amount: "",
                id: ""
            });

            navigate("/history");

        }
    }


  return (
    <div className='transaction-box'>
        <h2 className='transaction-title'>New Transaction</h2>
        <input id='exp'
            type='text'
            placeholder=' Income / Expense'
            value={input.expense}
            name='expense'
            onChange={handleChange}
        />
        <input id='amt'
            type='number'
            placeholder=' Amount'
            value={input.amount}
            name='amount'
            onChange={handleChange}
        />
        <button className='add-btn' onClick={handleClick}>{ toggleAdd ? "Add Transaction" : "Update" }</button>
    </div>
  )
}

export default InputField;