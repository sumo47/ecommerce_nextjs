import React from 'react';

function Cart() {
    return (
        <div className='min-h-screen bg-black-100'>
            <div className='container mx-auto py-10'>
                <h2 className='text-3xl font-bold mb-5'>Cart</h2>
                <p className='mb-5'>Items in your cart:</p>
                <ul className='mb-5'>
                    <li className='bg-white p-4 rounded shadow mb-3'>Item 1</li>
                    <li className='bg-white p-4 rounded shadow mb-3'>Item 2</li>
                </ul>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    Checkout
                </button>
            </div>
        </div>
    );
}

export default Cart;
