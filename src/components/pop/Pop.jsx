import React, { useState } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
import Button from '../../shared/Button'

const Pop = ({orderpop,handleorderpop}) => {
    
  return (<>
    {
        orderpop &&(
            <div>
        <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop:blur-sm'>
            <div className=' w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-xl'>
                <div className='flex items-center justify-between'>
              <h1>Order Now</h1>
                <IoCloseCircleOutline onClick={()=> handleorderpop(!orderpop)} className='text-2xl cursor-pointer'/>
                </div>
                <div className='mt-2' >
                    <input type="text" placeholder='Name' className='form-input' />
                    <input type="email" placeholder='Email' className='form-input' />
                    <input type="text" placeholder='Address' className='form-input' />
                    <div className='flex justify-center'>
                        <Button text='Order Now' bgcolor='bg-primary'/>
                    </div>
                </div>
            </div>
        </div>
     </div>
        )
    }
  </>)
}

export default Pop
