import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Loja } from './pages/Loja'
import { CategoriaDaLoja } from './pages/CategoriaDaLoja'
import { Produto } from './pages/Produto'
import { Carrinho } from './pages/Carrinho'
import { LoginSignup } from './pages/LoginSignup';
import { Footer } from './components/footer/Footer';
import colares_banner from './components/assets/banner_colares.png'
import pulseiras_banner from './components/assets/banner_pulseiras.png'
import aneis_banner from './components/assets/banner_aneis.png'
import brincos_banner from './components/assets/banner_brincos.png'
import pingentes_banner from './components/assets/banner_pingentes.png'
import piercings_banner from './components/assets/banner_piercings.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Loja/>}/>
          <Route path='/colares' element={<CategoriaDaLoja banner={colares_banner} category="colar"/>}/>
          <Route path='/pulseiras' element={<CategoriaDaLoja banner={pulseiras_banner} category="pulseira"/>}/>
          <Route path='/aneis' element={<CategoriaDaLoja banner={aneis_banner} category="anel"/>}/>
          <Route path='/brincos' element={<CategoriaDaLoja banner={brincos_banner} category="brinco"/>}/>
          <Route path='/pingentes' element={<CategoriaDaLoja banner={pingentes_banner} category="pingente"/>}/>
          <Route path='/piercings' element={<CategoriaDaLoja banner={piercings_banner} category="piercing"/>}/>
          <Route path="/produto/:productId" element={<Produto />} />
          <Route path='/carrinho' element={<Carrinho/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
