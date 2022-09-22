import logo from './logo.svg';
import './App.css';
import Nav from './components/Home/shared/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  const publicRoute =[
    {name:'Home', path:'/home', Element: Home},
    {name:'About', path:'/about', Element: About},
    {name:'Services', path:'/services', Element: Services},
    {name:'Contact', path:'/contact', Element: Contact},
    {name:'Login', path:'/login', Element: Login}
  ]
  return (
    <div>
      <Nav>
        <Routes>
          {publicRoute.map(({path,Element})=><Route path={path} element={<Element></Element>}></Route>)}
        </Routes>
      </Nav>
    </div>
  );
}

export default App;
