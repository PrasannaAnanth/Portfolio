import {React,useState} from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid';
function Header() {
  const [toogle, settoogle] = useState(false);
  return (
    <header className="flex justify-between px-5 py-2 bg-primary">
    <a  className="font-bold text-black" href="#">PRASANNA</a>
    <nav className="hidden md:block">
    <ul className="flex text-white ">
      <li><a href="/">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#resume">Resume</a></li>
      <li><a href="#contact">Contact</a></li>

    </ul>
    </nav>
    { toogle && <nav className="block md:hidden">
    <ul className="flex flex-col text-white mobile-nav ">
      <li><a href="/">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#resume">Resume</a></li>
      <li><a href="#contact">Contact</a></li>

    </ul>
    </nav>}
    
    <button className="block md:hidden" onClick={()=>settoogle(!toogle)}>
      <Bars3Icon className="text-white h-5"/>
    </button>
    </header>
  )
}

export default Header