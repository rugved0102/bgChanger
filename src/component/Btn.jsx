import React from 'react'

function Btn({color="black", handleColor}) {
  
  return (
    <>
    <button 
    className ='outline-none px-4 py-1 rounded-full text-white shadow-lg'
    style = {{backgroundColor: color}}
    onClick={()=>handleColor(color)}>{color}</button>
    </>
  )
}

export default Btn
