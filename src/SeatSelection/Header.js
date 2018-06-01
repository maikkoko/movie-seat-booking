import React from 'react';
import './Header.css';

import Select from './Select';

const dateOptions = [
  '01 Friday, Today',
  '02 Saturday, Tomorrow',
];

const timeOptions = [
  '12:00PM, Matinee Show',
];

class Header extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="header">
        <div className="form">
          <Select options={dateOptions} label="Date" />
        </div>
        <div className="vertical-divider" />
        <div className="form">
          <Select options={timeOptions} label="Time" />
        </div>
      </div>
    );
  }
}

export default Header;
