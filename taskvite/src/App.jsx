import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './swiper-bundle.min.css'
import Nav from './componat/nav'

import Loop from './componat/loop'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
   
      <Loop/>
    </>
  )
}

export default App
