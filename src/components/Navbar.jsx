import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white '>
            <div className="mycontainer flex justify-around items-center px-4 py-5 h-[7vh]">

                <div className="logo font-bold text-2xl ">
                    <span className='text-green-600'>&lt;</span>
                    MY-
                    <span className='text-green-600'>Passwords/&gt;</span>
                </div>
                <ul>
                    <li className='flex gap-4 justify-between items-center'>
                        {/* <a href='/' className='hover:font-bold ' >Home</a>
                        <a href='#' className='hover:font-bold ' >About</a>
                        <a href='#' className='hover:font-bold ' >Contact</a> */}

                        <button
                            className='bg-green-900 text-white rounded-full flex justify-between items-center ring-white ring-1'
                            onClick={() => window.open("https://github.com/sumit09121", "_blank")}
                        >
                            <lord-icon
                                src="https://cdn.lordicon.com/jjxzcivr.json"
                                trigger="hover"
                                stroke="bold"
                                state="hover-roll">
                            </lord-icon>
                            <span className='font-bold px-2'>Github</span>
                        </button>

                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
