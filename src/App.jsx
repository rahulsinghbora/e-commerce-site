import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'
import Services from './components/services/Services'
import Banner from './components/Banner/Banner'
import headphone from '../src/assets/headphone.png'
import smartwatch2 from '../src/assets/smartwatch2-removebg-preview.png'
import Products from './components/products/Products'
import Blogs from './components/blogs/Blogs'
import Partners from './components/partners/Partners'
import Footer from './components/Footer/Footer'
import Pop from './components/pop/Pop'
import AOS from 'aos'
import 'aos/dist/aos.css'

const BannerData={
  discount:'30% OFF',
  bgColor:'#f42c37',
  title:'Fine Smile',
  date:'10 Jan to 28 Jan',
  image:headphone,
  title2:'Air Solo Bass',
  title3:'Winter Sale',
  title4:'Lorem ipsum dolor sit amet consectetur adispising elit eaque reiciendis',
  
}
const BannerData2={
  discount:'30% OFF',
  bgColor:'#2dcc6f',
  title:'Happy Hours',
  date:'14 Jan to 28 Jan',
  image:smartwatch2,
  title2:'Smart Solo',
  title3:'Winter Sale',
  title4:'Lorem ipsum dolor sit amet consectetur adispising elit eaque reiciendis',
  
}

const App = () => {
  const[orderpop,setorderpop]=useState(false)
  
  const handleorderpop=()=>{
    setorderpop(!orderpop)
  }

  useEffect(()=>{
    AOS.init(
      {
        duration:800,
        easing:'ease-in-sine',
       delay:100,
       offset:100,
      }
    );AOS.refresh()
  },[])

  return (<>
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
    <Navbar handleorderpop={handleorderpop}/>
    <Hero handleorderpop={handleorderpop}/>
    <Category/>
    <Category2/>
    <Services/>
    <Banner data={BannerData}/>
    <Products/>
    <Banner data={BannerData2}/>
    <Blogs/>
    <Partners/>
    <Footer/>
    <Pop orderpop={orderpop}  handleorderpop={handleorderpop}/>
    </div>
  </>)
}

export default App
