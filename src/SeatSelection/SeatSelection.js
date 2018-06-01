import React from 'react';
import './SeatSelection.css';

import Screen from './Screen';
import Header from './Header';
import Seats from './Seats';
import ConfirmButton from './ConfirmButton';

class SeatSelection extends React.Component {
  componentDidMount() { }

  render() {
    return (
      <div className="seat-selection">
        <div className="content">
          <Header />
          <Screen />
          <Seats />
          <ConfirmButton />
        </div>
      </div>
    );
  }
}

export default SeatSelection;
