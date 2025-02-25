import React from 'react'
import Image1 from '../../assets/earphone.png'
import Image2 from '../../assets/watch.png'
import Image3 from '../../assets/macbook.png'
import Button from '../../shared/Button'

const Category = () => {
  return (
    <div className='py-8'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        <div className='py-10 pl-5 bg-gradient-to-br from-black 90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end' >
            <div>
                <div className='mb-4'>
                    <p className='mb-[2px] text-gray-400 '>Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px] '>With</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphone</p>
                    <Button text='Browse'
                        bgcolor={'bg-primary'}
                        textcolor={'text-white'}
                    />
                </div>
            </div>
            <img src={Image1} alt="" className='w-[320px] absolute bottom-10' />
        </div>
        <div className='py-10 pl-5 bg-gradient-to-br from-brandYellow/90  to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end' >
            <div>
                <div className='mb-4'>
                    <p className='mb-[2px] text-gray-400 '>Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px] '>With</p>
                    <p className='text-4xl xl:text-4xl font-bold opacity-40 mb-2'>Gadget</p>
                    <Button text='Browse'
                        bgcolor={'bg-white'}
                        textcolor={'text-brandYellow'}
                    />
                </div>
            </div>
            <img src={Image2} alt="" className='w-[320px] absolute -right-4 lg:top-[10px]' />
        </div>
        <div className=' col-span-2 py-10 pl-5 bg-gradient-to-br from-primary  to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end' >
            <div>
                <div className='mb-4 '>
                    <p className='mb-[2px] text-gray-400 '>Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px] '>With</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Laptop</p>
                    <Button text='Browse'
                        bgcolor={'bg-white'}
                        textcolor={'text-primary'}
                    />
                </div>
            </div>
            <img src={Image3} alt="" className='w-[350px] absolute top-1/2 -translate-y-1/2 -right-0 ' />
        </div>

            </div>
        </div>
    </div>
  )
}

export default Category
