import React from 'react';
import logo from '../logo.svg';
import './Navbar.css';

const Navbar = () => <nav>
  <div className='container'>
    <div className='nav-logo'>
      <img src={logo} className="app-logo" alt="logo" />
    </div>
    <div className='menu'>
      <ul>
        <li className='strikethrough'>
          <a href='#inicio' className='menu-link'>Início</a>
        </li>
        <li className='strikethrough'>
          <a href='#sobre' className='menu-link'>Sobre</a>
        </li>
        <li className='strikethrough'>
          <a href='#palestrantes' className='menu-link'>Palestrantes</a>
        </li>
        <li className='strikethrough'>
          <a href='#map' className='menu-link'>Informações</a>
        </li>
      </ul>
    </div>
    <div class='buttomInscricao'>
    <buttom type="buttom" name="inscricao" className="inscricao" onClick={() => window.open("https://www.sympla.com.br/hubcon__670145")}><span><hr/></span> Inscrição</buttom>
    </div>
  </div>
</nav>

export default Navbar;