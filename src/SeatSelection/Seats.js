import React from 'react';
import './Seats.css';

class Seats extends React.Component {
  state = {}

  render() {
    return (
      <div className="seats">
        <div className="section">
          <p className="section-name">Executive - ₱250</p>
          <div className="row">
            <div className="row-left">
              <span>F</span>
              <div className="seats-list">
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
              </div>
            </div>
            <div className="row-right">
              <span>F</span>
              <div className="seats-list">
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="row-left">
              <span>E</span>
              <div className="seats-list">
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
              </div>
            </div>
            <div className="row-right">
              <span>E</span>
              <div className="seats-list">
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <p className="section-name">Premium - ₱340</p>
          <div className="row">
            <div className="row-left">
              <span>D</span>
              <div className="seats-list">
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
              </div>
            </div>
            <div className="row-right">
              <span>D</span>
              <div className="seats-list">
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="row-left">
              <span>C</span>
              <div className="seats-list">
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
              </div>
            </div>
            <div className="row-right">
              <span>C</span>
              <div className="seats-list">
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <p className="section-name">Platinum - ₱600</p>
          <div className="row">
            <div className="row-left">
              <span>B</span>
              <div className="seats-list">
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
              </div>
            </div>
            <div className="row-right">
              <span>B</span>
              <div className="seats-list">
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="row-left">
              <span>A</span>
              <div className="seats-list">
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
              </div>
            </div>
            <div className="row-right">
              <span>A</span>
              <div className="seats-list">
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
                <div className="seat-item" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Seats;
