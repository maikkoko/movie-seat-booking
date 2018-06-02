import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import groupRows from '../lib/groupRows';
import SeatItem from './SeatItem';

const SectionRow = ({ row }) => {
  const groups = groupRows(row.seats);

  return (
    <div className="row">
      <div className="row-left">
        <span className="row-name">{row.name}</span>
        <div className="seats-list">
          {
            map(groups.left, seat => (
              <SeatItem key={seat.seatNumber} seat={seat} />
            ))
          }
        </div>
      </div>
      <div className="row-right">
        <span className="row-name">{row.name}</span>
        <div className="seats-list">
          {
            map(groups.right, seat => (
              <SeatItem key={seat.seatNumber} seat={seat} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

SectionRow.propTypes = {
  row: PropTypes.object.isRequired, // eslint-disable-line
};

export default SectionRow;

