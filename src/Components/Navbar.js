import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Navbar = () => (
  <nav>
    <div className="arrowanddate">
      <NavLink
        to="/"
        className={(navData) => (navData.isActive ? 'backBtnNotActive' : 'backBtn Hover')}
      >
        <Icon icon="eva:arrow-ios-back-fill" width="27" height="27" />
      </NavLink>
    </div>
    <h1>Countries&apos;s COVID-19 Data</h1>
    <div className="icons">
      <Icon
        icon="fluent:mic-16-filled"
        width="27"
        height="27"
        className="Hover"
      />
      <Icon
        icon="ci:settings-filled"
        width="27"
        height="27"
        className="Hover"
      />
    </div>
  </nav>
);

export default Navbar;
