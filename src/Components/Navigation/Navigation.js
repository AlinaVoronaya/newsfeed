import React from 'react';
import { categoryNames } from '../../utils.js';
import logo from '../../images/logo.svg';
import './Navigation.css';

export const Navigation = ({ categories = [], currentCategory, className = '', onNavClick = () => {}, placement, ...restProps }) => {
  return (
    <nav {...restProps} className={`grid navigation navigation--${placement} ${className}`}>
      <a className="navigation__logo" onClick={onNavClick} data-href="index" href="/index.html">
        <img className="navigation__logo-image" src={logo} alt="Логотип"/>
      </a>
      <ul className="navigation__list">
        {categories.map((page) => {
          return (
            <li className="navigation__item" key={page}>
              <a className={`navigation__link ${page === currentCategory ? 'navigation__link--active' : ''}`} onClick={onNavClick} data-href={page} href="#">{categoryNames[page]}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}