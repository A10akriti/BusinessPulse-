import React from 'react'
import Laptop from '../assets/Laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto md:grid-cols-2'>
            <img className='w-[500px] max-auto my-4' src= {Laptop} alt="laptop"/>
          <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a]'>Financial Analytics Dashboard</p>
            <h1 className='md:text-4xl sm:text-3xl font-bold py-2'>Manage your finances</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus assumenda facilis ullam, iusto, corporis consequatur at, voluptates soluta quis animi asperiores quia? Incidunt, et laboriosam! Laudantium consequatur optio cum harum!</p>
            
        <button className="text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 bg-black">
          Get started
        </button>
          </div>

        </div>
      
    </div>
  )
}

export default Analytics
