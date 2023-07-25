import './App.css'
import Home from './pages/Home'
// import Contact from './pages/Contact'
import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        {/* <Route path='/contact' element={<Contact/>}></Route> */}
      </Routes>
    </HashRouter>
  )
}

export default App
