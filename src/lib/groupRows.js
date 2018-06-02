import groupBy from 'lodash/groupBy';
import findIndex from 'lodash/findIndex';

export default (rowSeats) => {
  const grouped = groupBy(rowSeats, (seat) => {
    const index = findIndex(rowSeats, { seatNumber: seat.seatNumber });

    if ((index + 1) > (rowSeats.length / 2)) {
      return 'right';
    }

    return 'left';
  });

  return grouped;
};
