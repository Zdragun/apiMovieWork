import React from 'react';
import '../Navbar/NavBar.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import {MdOutlineLockReset} from 'react-icons/md';

const Navbar = ({ search, handleSubmit,setSearch,handleReset }) => {
    return (
        <nav className="flex-container">
            <div className="flex-items"><h1>Filmik</h1></div>
            <MdOutlineLockReset style={{border:"1px solid white",borderRadius:4,padding:3,borderColor:"#BFD2FF",color:'#BFD2FF', marginRight:2,width:25,height:28}} onClick={handleReset}  />
            <div className="flex-items">
                <form className='styled-input'>
                    <input className='input-film' value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='&nbsp;Enter title or desc of film' />
                    <button onClick={handleSubmit}><AiOutlineArrowRight  /></button></form>
            </div>
        </nav>
    )
}

export default Navbar