import React from 'react';
import {Link} from 'react-router-dom';
import ROUTE from 'Src/routes.js';
import './Header.styles.scss';

function Header(props) {
  return (
    <nav className="Header">
      <Link to={ROUTE.Home}>
        <img className="logo-image" src={props.logoImage} />
      </Link>

      <h1 className="title">{props.title}</h1>

      <Link className="profile-nav" to={ROUTE.Profile}>
        Welcome {props.name}
      </Link>
    </nav>
  );
}

export default Header;
