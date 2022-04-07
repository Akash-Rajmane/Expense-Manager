import React,{useState,useEffect} from 'react';
import "./Header.css";
import { GiWallet, GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import Sidebar from './Sidebar';

const Header = () => {
    const [sidebar,setSidebar] = useState<boolean>(false);
    const location = useLocation();

    const showSidebar = ():void => {
        setSidebar(!sidebar);
    }

    useEffect(() => {

        let mainContainer = document.getElementsByClassName('main-container')! as HTMLCollectionOf<HTMLElement>;
        let historyBox = document.getElementsByClassName('history-box')! as HTMLCollectionOf<HTMLElement>;

        sidebar ? Array.from(mainContainer).forEach(el=>{
            el.style.width = "80%";
            el.style.margin = "-560px 250px 0 250px";
        })
        : Array.from(mainContainer).forEach(el=>{
            el.style.width = "90%";
            el.style.margin = "auto";
        })

        sidebar ? Array.from(historyBox).forEach(el=>{
            el.style.width = "75%";
            el.style.margin = "-560px 250px 0 250px";
            el.style.paddingLeft = "32px";
        })
        : Array.from(historyBox).forEach(el=>{
            el.style.paddingLeft = "0px";
            el.style.margin = "auto";
        })

    }, [sidebar,location])
    

  return (
    <>
    <div className='header'>
        <div className='header-content'>
            <i className='ham-icon' onClick={showSidebar}>{sidebar?<AiOutlineClose/>:<GiHamburgerMenu/>}</i>
            <span id='wallet-icon'><GiWallet/></span>
            <span className='text'><em>Expense Manager</em></span>
        </div>
    </div>
    <div>{sidebar?<Sidebar/>:null}</div>
    </>
  )
}

export default Header;