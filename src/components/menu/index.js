import React from 'react';
import Logo from '../../components/imgs/playfor.png';
import './menu.css';
import Button from './Button';

 function Menu() {
     return(
         <nav className="Menu">
             <a href="/">
                <img className="Logo" src={Logo} alt="Logo PLayfor" />
             </a>
        
             <Button as="a" className="ButtonLink" href="/"> 
                Novo Vídeo
             </Button>
         </nav>
     );
 }

 export default Menu;