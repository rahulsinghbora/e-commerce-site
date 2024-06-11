import React from 'react'
import { FaMobileAlt,FaLocationArrow } from 'react-icons/fa'
import { FaInstagram,FaFacebook,FaLinkedin } from 'react-icons/fa6'

const FooterLinks=[
    {
        title:'Home',
        link:'/#'
    },
    {
        title:'About',
        link:'/#about'
    },
    {
        title:'Contact',
        link:'/#contact'
    },
    {
        title:'Blog',
        link:'/#blog'
    },
]

const Footer = () => {
  return (<>
   <div className="dark:bg-gray-950">
   <div className="container">
        <div className="grid grid-cols-3 pb-20 pt-5">
            <div className='py-8 px-4'>
            <a href="#" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>eshop
            </a>
            <p className='text-gray-600 dark:text-white/70 lg:pr-24 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus possimus amet consequatur.</p>
            <p className='text-gray-500 mt-2 '>Made with <span className='text-primary font-bold'>LOVE</span> by RaHul</p>
            <a href="https://www.youtube.com" target='blank' className='inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full'>visit this youtube</a>
            </div>

            <div className='grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10'>
                <div className='py-8 px-4'>
                    <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
                    <ul className='space-y-3'>
                        {FooterLinks.map((data,index)=>{
                            return(
                                <li key={index}><a href={data.link} className='text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white duration-300'>{data.title}</a></li>
                            )
                        })}
                    </ul>
                </div>
                <div className='py-8 px-4'>
                    <h1 className='text-xl font-bold sm:text-left mb-3'>Quick Links</h1>
                    <ul className='space-y-3'>
                        {FooterLinks.map((data,index)=>{
                            return(
                                <li key={index}><a href={data.link} className='text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white duration-300'>{data.title}</a></li>
                            )
                        })}
                    </ul>
                </div>

                <div className='py-8 px-4 col-span-2 sm:col-auto'>
                <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
                    <div>
                        <div className="flex items-center gap-3">
                            <FaLocationArrow/>
                            <p>Noida,Uttar Pradesh</p>
                            </div>
                            <div className='flex items-center gap-3 mt-6'>
                               <FaMobileAlt/>
                               <p>+91 9876543210</p>
                            </div>
                            
                            <div className='flex items-center gap-3 mt-6'>
                                <a href="#">
                                    <FaInstagram className='text-3xl hover:text-primary duration-300'/>
                                </a>
                                <a href="#">
                                    <FaFacebook className='text-3xl hover:text-primary duration-200'/>
                                </a>
                                <a href="#">
                                    <FaLinkedin className='text-3xl hover:text-primary duration-200'/>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
  </>)
}

export default Footer
