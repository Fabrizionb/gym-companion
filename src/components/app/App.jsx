import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../home/Home.jsx'
import NavBar from '../navBar/NavBar.jsx'
import Footer from '../footer/Footer.jsx'
import Contacto from '../contacto/Contacto.jsx'
import Companion from '../companion/Companion.jsx'
import WebApp from '../conocimiento/WebApp.jsx'
import { GlobalProvider } from '../globalState/GlobalContext.jsx'
import './App.css'

function App() {
  

  return (
    <div className="App">
    <Router>
    <GlobalProvider>
        <NavBar /> 
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/conocimiento' element={<WebApp />} />
      <Route path='/companion' element={<Companion />} />
      <Route path='/contacto' element={<Contacto />} />
    </Routes>
    <Footer /> 
    </GlobalProvider>
    </Router>
    </div>
  )
}

export default App
