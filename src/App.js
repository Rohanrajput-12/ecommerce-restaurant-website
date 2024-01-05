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
        <BrowserRouter>
    <Routes>
        
        
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/footer" element={<Footer/>} />
          <Route path="/review" element={<Review/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/navbar" element={<Navbar/>} />
          

        
    </Routes>
    </BrowserRouter>
      </div>
  );
}

export default App;

