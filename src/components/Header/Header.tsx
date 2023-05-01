import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../../asset/logoqrgenius.png';
import './_header.scss';

const Header = () => {
      return (
            <header>
      
                  <img className="assetLogo" src={logo} alt={"logo de codegenius"} />
                  <Link to='/'className='titre'>CodeGenius</Link>
                  
            </header>
      );
};
export default Header;

