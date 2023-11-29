import React from 'react';

const Input = () => {
    return (
        <div className='m-3 flex-row space-x-6'>
            <input placeholder='Name' className='text-slate-900 font-medium px-2 py-1' />
            <input placeholder='Email' className='text-slate-900 font-medium px-2 py-1' />
        </div>
    );
};

export default Input;