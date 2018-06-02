import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import SectionRow from './SectionRow';

const Section = ({ section }) => (
  <div className="section">
    <p className="section-name">{`${section.name} - ₱${section.price}`}</p>
    {
      map(section.rows, (row, index) => (
        <SectionRow row={row} key={index} />
      ))
    }
  </div>
);

Section.propTypes = {
  section: PropTypes.object.isRequired // eslint-disable-line
};

export default Section;

