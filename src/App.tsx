import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Button, Icon } from '@mui/material';
import ResponsiveNavbar from './components/NavBarResponsive';
import Footer from './pages/Footer';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const routes1: Array<{ component: string, route: string }> = [
    { component: "Home", route: "/" },
    { component: "About", route: "/about" },
    { component: "Contact", route: "/contact" },
  ];

  // Fonction pour rendre les liens des routes
  const routingMap = (routes2: Array<{ component: string, route: string }>) => {
    return (
      <div style={{display:'flex' ,gap:'0.2rem' }}>
        {routes2.map((route, index) => (
          <Link to={route.route} key={index} >
            <Button variant='contained'  color="primary" >{route.component}</Button>
          </Link>
        ))}
      </div>

        

      
    );
  };

  return (
    <BrowserRouter>
      <ResponsiveNavbar></ResponsiveNavbar>
      

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
