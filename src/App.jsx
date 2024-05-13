import { Route, Routes } from 'react-router-dom'
import Main from './pages/main.jsx'
import Armoire from './pages/armoire.jsx'
import Emotes from './pages/emotes.jsx'
import Hairstyles from './pages/hairstyles.jsx'
import Nav from './components/nav.jsx'
import './App.css'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/armoire" element={<Armoire/>}/>
        <Route path="/emotes" element={<Emotes/>}/>
        <Route path="/hairstyles" element={<Hairstyles/>}/>
      </Routes>
    </div>
  )
}

export default App
