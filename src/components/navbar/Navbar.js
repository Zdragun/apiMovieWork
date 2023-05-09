import React from 'react'
import '../Navbar/navbar.css';
import { AiOutlineArrowRight } from 'react-icons/ai'

const Navbar = ({ search, handleSubmit,setSearch }) => {
    return (
        <nav className="flex-container">
            <div className="flex-items"><h1>Filmik</h1></div>
            <div className="flex-items">
                <div className='styled-input'>
                    <input className='input-film' value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='&nbsp;Enter title or desc of film' />
                    <ul><li><AiOutlineArrowRight onClick={handleSubmit} /></li></ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar