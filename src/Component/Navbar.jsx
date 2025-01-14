import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [nav, setNav] = useState (false); 

    const handleNav =() => {
        setNav (!nav)
    }

  return (
    <div className=' flex justify-between items-center h-24  px-4 text-white sticky top-0 bg-[#111] w-full'>

        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>BusinessPulse</h1>

        <ul className="flex">
        <li><Link to="/" className="p-4">Home</Link></li>
        <li><Link to="/blog" className="p-4">Blog</Link></li>
        <li><Link to="/resources" className="p-4">Resources</Link></li>
        <li><Link to="/about" className="p-4">About</Link></li>
        <li><Link to="/login"> Login/signup</Link> </li>
      </ul>
        <div onClick={handleNav} className='block md:hidden' >
    {!nav ? <AiOutlineClose size={20} /> : 
    <AiOutlineMenu size={20} />}
</div>

<div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%] top-0 w-[60%] h-full ease-in-out duration-500'}>
 
            <h1 className='w-full text-3xl font-bold text- [#00df9a] m-4' > BusinessPulse </h1>

           
            <ul className='pt-24 uppercase p-4'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600' >Company</li>
            <li className='p-4 border-b border-gray-600' >Resources</li>
            <li className='p-4 border-b border-gray-600' >About</li>
            <li className='p-4' >Contact</li>
            </ul>
        </div>
      
        </div>
  )
}

export default Navbar
