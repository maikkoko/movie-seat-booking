import React from 'react';
import PropTypes from 'prop-types';

class SeatItem extends React.Component {
  static propTypes = {
    seat: PropTypes.object.isRequired // eslint-disable-line
  }

  state = {
    isSelected: false,
  }

  onSeatSelect = () => {
    const { seat } = this.props;

    if (!seat.booked) {
      this.setState({
        isSelected: !this.state.isSelected,
      });
    }
  }

  render() {
    const { seat } = this.props;
    const unavailable = seat.booked ? 'unavailable' : '';
    const selected = this.state.isSelected ? 'selected' : '';

    return (
      <button
        className={`seat-item ${unavailable} ${selected}`}
        onClick={this.onSeatSelect}
      >
        <span>{seat.seatNumber}</span>
      </button>
    );
  }
}

export default SeatItem;
