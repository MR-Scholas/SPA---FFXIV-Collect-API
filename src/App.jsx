import { Route, Routes } from 'react-router-dom'
import Main from './pages/main.jsx'
import Armoire from './pages/armoire.jsx'
import Emote from './pages/emotes.jsx'
import Hairstyle from './pages/hairstyles.jsx'
import CategoryList from './pages/categoryList.jsx'
import Nav from './components/nav.jsx'
import './App.css'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        {/* <Route path="/armoire" element={<Armoire/>}/>
        <Route path="/emote" element={<Emote/>}/>
        <Route path="/hairstyle" element={<Hairstyle/>}/> */}
        <Route path="/:category" element={<CategoryList/>}/>
      </Routes>
    </div>
  )
}

export default App
