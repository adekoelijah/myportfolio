import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiSolidUserCircle} from 'react-icons/bi'
import {BsFillBookmarkStarFill} from 'react-icons/bs'
import {RiServiceFill} from 'react-icons/ri'
import {IoIosContacts} from 'react-icons/io'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><BiSolidUserCircle/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} ><BsFillBookmarkStarFill/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''} ><RiServiceFill/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><IoIosContacts/></a>
    </nav>
  )
}

export default Nav