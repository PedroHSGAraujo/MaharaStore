import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Loja } from './pages/Loja'
import { CategoriaDaLoja } from './pages/CategoriaDaLoja'
import { Produto } from './pages/Produto'
import { Carrinho } from './pages/Carrinho'
import { LoginSignup } from './pages/LoginSignup';
import { Footer } from './components/footer/Footer';
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kid_banner from './components/assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Loja/>}/>
          <Route path='/colares' element={<CategoriaDaLoja banner={men_banner} category="colar"/>}/>
          <Route path='/pulseiras' element={<CategoriaDaLoja banner={women_banner} category="pulseira"/>}/>
          <Route path='/aneis' element={<CategoriaDaLoja banner={kid_banner} category="anel"/>}/>
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
