import React from 'react'

const Button = ({text,bgcolor,textcolor,handler}) => {
  return (<>
    <button onClick={handler} className={`${bgcolor} ${textcolor} cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}>
        {text}
    </button>
  </>)
}

export default Button
