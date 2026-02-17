import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col justify-center items-center h-[7vh] bottom-0'>
            <div className="logo font-bold text-xl ">
                <span className='text-green-600'>&lt;</span>
                MY-
                <span className='text-green-600'>Passwords/&gt;</span>
            </div>
            <div className='flex'>Created via React & Tailwind CSS </div>
        </div>
    )
}

export default Footer
