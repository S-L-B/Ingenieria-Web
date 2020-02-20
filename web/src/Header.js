import React from 'react';
import logo from './logo.svg';
import './Header.css';
class Header extends React.Component {


  render(){
      return (
        <div className="App" class="topnav">
          <div class="header-home">
            <a href="#home">Home</a>
          </div>
          <a href="#home">Noticias</a>
          <a href="#home">Artículos</a>
          <a href="#news">Foro</a>
          <a href="#contact">Vídeos</a>
          <a href="#about">Problemas</a>
        </div>

      );
  }
}

export default Header;
