import React from 'react'
import Heading from '../../shared/Heading'
import Img1 from '../../assets/blog-1.jpg'
import Img2 from '../../assets/blog-2.jpg'
import Img3 from '../../assets/blog-3.jpg'

const BlogData=[
    {
        title:'How to choose Perfect Smartwatch',
        subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis magna vitae felis rutrum, vel finibus magna vehicula. Duis nec nisi consectetur, eleifend magna id, sodales magna. Nullam quis purus vel ipsum luctus fermentum.',
        published:'jan 20 ,2024 by Rahul',
        image:Img1,
        aosdelay:'0'
    },
    {
        title:'How to choose Perfect Gadget',
        subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis magna vitae felis rutrum, vel finibus magna vehicula. Duis nec nisi consectetur, eleifend magna id, sodales magna. Nullam quis purus vel ipsum luctus fermentum.',
        published:'jan 20 ,2024 by Rahul',
        image:Img2,
        aosdelay:'200'
    },
    {
        title:'How to choose Perfect VR Headset',
        subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis magna vitae felis rutrum, vel finibus magna vehicula. Duis nec nisi consectetur, eleifend magna id, sodales magna. Nullam quis purus vel ipsum luctus fermentum.',
        published:'jan 20 ,2024 by Rahul',
        image:Img3,
        aosdelay:'400'
    },
]

const Blogs = () => {
  return (<>
    <div className='my-12'>
        <div className="container">
            <Heading title='Recent News' subtitle='Explore Our Blogs'/>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
                 {BlogData.map((data)=>{
                    return(
                        <div data-aos='fade-up' data-aos-delay={data.aosdelay} key={data.index} className='bg-white dark:bg-gray-900'>
                            <div className='overflow-hidden rounded-2xl mb-2'><img className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500' src={data.image} alt="" /></div>
                        <div className='space-y-2'>
                            <p className='text-xs text-gray-500'>{data.published}</p>
                            <p className='font-bold line-clamp-1'>{data.title}</p>
                            <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                        </div>
                        </div>
                    )
                 })}
            </div>
        </div>
    </div>
  </>)
}

export default Blogs
