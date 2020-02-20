import React from 'react';
import logo from './logo.svg';
import './Footer.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
class Footer extends React.Component {
  render(){
    return (
      <div class="footer-info">
        <div class="footer-texto">
          <h5 >Footer Content</h5>
          <p>
            Here you can use rows and columns here to organize your footer
            content.
          </p>
        </div><div class="footer-link">
              <h5>Links</h5>
              <a href="#!">Problemas</a>
              <a href="#!">Vídeos</a>
              <a href="#!">Foro</a>
              <a href="#!">Artículos</a>
              <a href="#!">Noticias</a>
        </div>
      </div>
    );
  }
}

export default Footer;
