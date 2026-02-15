import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mt-14 mx-auto max-w-6xl grid grid-cols-[40%_60%]'>
      <div>
        <div className='sticky top-14 grid grid-rows-[35%_40%_25%] h-screen'>
          <div>
            <div className='text-3xl text-primaryTitle'>Piyamas Parikarn</div>
            <div className='text-primaryAccent font-semibold'>Computer Engineer</div>
            <div className='text-sm w-5/6'>xxx</div>
            <div>
              <span className='bg-primaryTitle text-white py-2'>View Resume</span>
              </div>
          </div>
          <div>Nav</div>
          <div className='flex items-end'>link</div>
        </div>
      </div>
      <div>
        <div>about</div>
        <div className='mb-80'>Experience</div>
        <div className='mb-80'>Experience</div>
        <div className='mb-80'>Experience</div>
        <div className='mb-80'>Experience</div>
        <div className='mb-80'>Experience</div>
        <div className='mb-80'>Experience</div>
      </div>
    </div>
  )
}

export default App
