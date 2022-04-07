import React from 'react';
import { Transactions as Props } from './App';
import { RiArrowDropDownLine } from "react-icons/ri";
import {CgArrowsExchange} from "react-icons/cg";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import "./History.css";



const History:React.FC<Props> = ({ transaction, deleteItem, editItem }) => {
    let listBox = document.getElementsByClassName("list-box")! as HTMLCollectionOf<HTMLElement>;

    const showListBox = () => {
        Array.from(listBox).forEach((el)=>{ 
            if(el.style.display === "none"){
                el.style.display = "block";
            }else{
                el.style.display = "none";
            }
        })
    }

  return (
    <div className='history-box'>
        <div className='history-content'>
            <i className='transaction-icon'><CgArrowsExchange/>{" "}</i>
            <i className='dropdown-icon' onClick={showListBox}><RiArrowDropDownLine/></i>
            <span className='history-title'>Transaction History</span>
        </div>
        <div className='list-box'>
            <table>
                <tr>
                    <th>Expense</th>
                    <th>Amount</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
                {
                    transaction.map((el,index)=>(
                        <tr className='list' key={index}>
                            <td>{el.expense}</td>
                            <td>{el.amount}</td>
                            <td>
                                <button onClick={()=>deleteItem(el.id)}><AiFillDelete/></button>
                            </td>
                            <td>
                            <button onClick={()=>editItem(el.id)}><AiFillEdit/></button>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    </div>
  )
}

export default History;