import React from 'react';
import icon from './resource/icon.svg';
import  './header.css';

const Header = () => {
  return (
      <div class="header">
          <nav className="navbar">
            <ul class="navmake">
              <li class="item">
                <a href="#!" class="menu_link" role="menuitem"><span class="item_wrap" />Service</a>
              </li>
              <li class="item">
                <a href="/" role="menuitem"><img src={icon} alt="" weight="70" height="90"/></a>
              </li>
              <li class="item">
                <a href="#!" class="menu_link" role="menuitem"><span class="item_wrap"/>Tech</a>
              </li>
            </ul>
          </nav>
      </div>  
  );
}

export default Header;