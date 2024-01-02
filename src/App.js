import './App.css';
import Navbar from './Componenets/Navbar';
import Home from './Componenets/Home';
import About from './Componenets/About';
import Menu from './Componenets/Menu';
import Product from './Componenets/Product';
import Review from './Componenets/Review';
import Contact from './Componenets/Contact';
import Blog from './Componenets/Blog';
import Footer from './Componenets/Footer';
import { BrowserRouter,Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Menu/>
    <Product/>
    <Review/>
    <Contact/>
    <Blog/>
    <Footer/>
    <BrowserRouter>
     <Routes>
      
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

