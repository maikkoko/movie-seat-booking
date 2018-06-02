import React from 'react';
import map from 'lodash/map';

import Section from './Section';

import './Seats.css';

import data from '../data/seats';

class Seats extends React.Component {
  state = {}

  render() {
    return (
      <div className="seats">
        {
          map(data, section => (
            <Section key={section.name} section={section} />
          ))
        }
      </div>
    );
  }
}

export default Seats;
