import React from 'react';
import Poster from './poster.png';
import './Summary.css';

export default () => (
  <div className="summary">
    <div className="image-container" >
      <div className="image" style={{ backgroundImage: `url('${Poster}')` }} />
      <i className="fa fa-arrow-left" />
      <div className="watch-button">
        <i className="fa fa-play" />
        <div>
          <p>WATCH TRAILER</p>
          <p className="sub">320K Views</p>
        </div>
      </div>
    </div>
    <div className="movie-details">
      <div className="divider" />
      <p>Marvel&#39;s</p>
      <h1>Black Panther (2018)</h1>
      <div className="categories">
        <span>Action</span>
        <span>Adventure</span>
        <span>Sci-Fi</span>
      </div>
    </div>
    <div className="meta">
      <p>
        <i className="fa fa-heart" />
        {' '}95% (12312 votes)
      </p>
      <p>
        <i className="fa fa-clock-o" />
        {' '}2hrs. 14min
      </p>
      <p>
        <i className="fa fa-film" />
        {' '}95% (12312 votes)
      </p>
    </div>
  </div>
);
