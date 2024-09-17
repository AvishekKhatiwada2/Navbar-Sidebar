import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Dashboard from './Dashboard'
import Sidebar from './Sidebar'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Router>
      <div className="wrapper d-flex align-items-stretch ">
          <Sidebar isOpen={isOpen} setisOpen={setIsOpen} />
          <div id="content" className="p-3 p-md-3">
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Dashboard' element={<Dashboard />} />
            </Routes>
          </div>
        </div>
    </Router>
  )
}

export default App
