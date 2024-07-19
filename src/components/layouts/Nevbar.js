import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Nevbar() {
    return (
        <header className='text-white-100 sticky top-0 z-50 bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700 body-font'>
            <div className='container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center'>
                <Link href={"/"} className='flex title-font font-extrabold items-center uppercase text-gray-100'>
                    <Image alt='Nevbar Logo' src={"/Pizza.svg"} width={60} height={60} />
                    <p className='leading-5 text-xl mx-2'> Pizza Order</p>

                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href={"/cart"} className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center">
                        Cart
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mx-1" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
                        <span className="inline-flex items-center bg-red-50 py-1 px-2 rounded-full text-xs font-medium text-red-600 ring-1 shadow-[0_0_15px_1px_rgba(220,38,38)]  ring-inset ring-red-600/10">0</span>

                    </Link>
                    
                </nav>
            </div>
        </header>
    )
}

export default Nevbar
