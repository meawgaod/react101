import { useState } from 'react'
import './App.css'

import Header from './section/Header'
import Navbar from './section/Navbar'
import Contact from './section/Contact'
import Leftsection from './section/Leftsection'
import Rightsection from './section/Rightsection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mt-14 mx-auto max-w-6xl grid gap-y-5 sm:grid-cols-[40%_60%]'>
     <Leftsection />
     <Rightsection />
    </div>
  )
}

export default App
