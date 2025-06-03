import { useState } from 'react'

// import './App.css'
import Btn from './component/Btn'
function App() {
  const [bgColor, setColor] = useState('white')

  const handleColorChange = (color) => {
    setColor(color)
  }
  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: bgColor, height: '100vh', weight: '100vw'}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
      <Btn color = "red" handleColor={handleColorChange}/>
      <Btn color="blue" handleColor={handleColorChange} />
      <Btn color="green" handleColor={handleColorChange} />
      <Btn handleColor={handleColorChange}/>
      <Btn color="purple" handleColor={handleColorChange} />
      <Btn color="crimson" handleColor={handleColorChange} />
      <Btn color="plum" handleColor={handleColorChange} />
      <Btn color="olive" handleColor={handleColorChange} />
      <Btn color="yellow" handleColor={handleColorChange} />
      </div>
      </div>
      </div>
    </>
  )
}

export default App
