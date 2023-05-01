import{ Link} from 'react-router-dom'
import React from 'react';
import './_footer.scss';

const Footer = () => {
      return (
            <footer>
                  <div className="container-footer">
                     <div className='container-link'>
                        <a href="mailto:fortuna77320@gmail.com" className='typo'>Contact</a>
                        <Link to='/Propos' className='typo'>A-propos</Link>
                     </div>
                  </div>
            </footer>
      );
};

export default Footer;
