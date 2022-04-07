import React,{useState,useEffect} from 'react';
import {FaRupeeSign} from 'react-icons/fa';
import {Transactions} from './App';
import './App.css';


const Balance:React.FC<Transactions> = ({transaction}) => {
    const [income,setIncome] = useState<number|string>(0);
    const [exp,setExp] = useState<number|string>(0);
    const [balance,setBalance] = useState<number|string>(0);

    const incomeExpenseTracker = (transaction:any) => {
        let incomePay = transaction.map((el:any)=>{
            if(el.amount>=0){
                return el.amount;
            }
            else{
                return 0;
            }
        });

        let expensePay = transaction.map((el:any)=>{
            if(el.amount<0){
                return el.amount;
            }
            else{
                return 0;
            }
        });

        let netIncome = incomePay.reduce(function (prev:any, curr:any) {
            return parseFloat(prev) + parseFloat(curr);
        },[0]);

        let netExpense = expensePay.reduce(function (prev:any, curr:any) {
            return parseFloat(prev) + parseFloat(curr);
        },[0]);

        setIncome(netIncome);
        setExp(netExpense);
        setBalance(netExpense+netIncome);

    }

    useEffect(() => {
        incomeExpenseTracker(transaction);
    }, [transaction])
    

  return (
    <div className='balance-box'>
        <h2 id='balance-title'>Balance : <span className='rupee-icon'><FaRupeeSign/></span> {balance}</h2>
        <table className='balance-table'>
            <tr>
                <th className='green'>Income</th>
                <th className='red'>Expense</th>
            </tr>
            <tr>
                <td className='balance-data'>{income}</td>
                <td className='balance-data'>{exp}</td>
            </tr>
        </table>
    </div>
  )
}

export default Balance;