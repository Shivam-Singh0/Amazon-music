import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import Header from './components/Header/Header'
import Playlist from './components/Pages/Playlist/Playlist'
import Login from './components/Pages/Auth/Login'
import Signup from './components/Pages/Auth/Signup'
function App() {
  

  return (
    <Router>
      <Header/>
     <div className='mt-5' >
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/playlist/:id' element={<Playlist />} />
        
      </Routes>
     </div >
    </Router>
   
  )
}

export default App


