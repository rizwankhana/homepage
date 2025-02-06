import { useState } from 'react'
import Header from './components/Header'
import Dropdown from './components/dropdown'
import Content from './components/Content'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Header/>
      <Dropdown/>
      <Content/>
     </div>
    </>
  )
}

export default App
