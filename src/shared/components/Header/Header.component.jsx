import React from 'react';
import './Header.styles.scss';

export const defaultProps = {
  title: 'Earthquake Zen Garden',
  logoImage: 'https://www.realtor.com/realtor-com.png',
  name: 'Sally',
};

function Header(props) {
  return (
    <nav className="Header">
      <a href="">
        <img className="logo-image" src={props.logoImage} />
      </a>
      <h1 className="title">{props.title}</h1>
      <a className="profile-nav" href="">
        Welcome {props.name}
      </a>
    </nav>
  );
}

export default Header;
