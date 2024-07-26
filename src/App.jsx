
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import Header from './components/Header/Header'
function App() {
  

  return (
    <Router>
      <Header/>
     <div className='mt-5' >
     <Routes>
        
        <Route path='/' element={<Home />} />
        
      </Routes>
     </div >
    </Router>
   
  )
}

export default App
