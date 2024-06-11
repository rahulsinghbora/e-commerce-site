import React, { useEffect, useState } from 'react'
import lightbutton from '../../assets/light-mode-button.png'
import darkbutton from '../../assets/dark-mode-button.png'

const Darkmode = () => {
  const[theme,settheme]=useState(localStorage.getItem('theme'));
  const element=document.documentElement;


  useEffect(()=>{
    localStorage.setItem('theme',theme)
    if(theme==='dark'){
      element.classList.add('dark')
    }else{
      element.classList.remove('dark')
    }
})

  return (<>
     <div >
     <img 
        onClick={() => settheme(theme === 'light' ? 'dark' : 'light')} 
        src={theme === 'light' ? lightbutton : darkbutton} 
        alt="Theme Toggle Button" 
        className='w-12 cursor-pointer  transition-all duration-300' 
      />
     </div>
    
  </>)
}

export default Darkmode
