import { Route, Routes } from 'react-router-dom'
import Main from './pages/main.jsx'
import CategoryList from './pages/categoryList.jsx'
import Nav from './components/nav.jsx'
import './App.css'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/:category" element={<CategoryList/>}/>
      </Routes>
    </div>
  )
}

export default App
