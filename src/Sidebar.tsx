import React from 'react';
import "./Sidebar.css";
import { AiFillHome } from "react-icons/ai";
import { CgArrowsExchange } from "react-icons/cg";
import { useNavigate } from "react-router-dom";


const Sidebar = () => {
    let navigate = useNavigate();
    
    const sidebarData = [
        {
            title: 'Home',
            icon: <AiFillHome/>,
            link: "/"
        },
        {
            title: 'Transaction History',
            icon: <CgArrowsExchange/>,
            link: "/history"
        }
    ];

  return (
    <div className='sidebar'>
        {   sidebarData.map((el,index)=>{
            return(
                <li className='row' key={index} onClick={()=>navigate(el.link)}>
                    <div className='row-icon'>{el.icon}</div>
                    <div className='row-title'>{el.title}</div>
                </li>
            )
        })}
    </div>
  )
}

export default Sidebar;