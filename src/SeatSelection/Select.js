import React from 'react';
import PropTypes from 'prop-types';
import './Select.css';

class Select extends React.Component {
  state = {
    selected: '',
  }

  componentDidMount() {
    // eslint-disable-next-line
    this.setState({
      selected: this.props.options[0],
    });
  }

  render() {
    return (
      <div className="select">
        <p>{this.props.label}</p>
        <div role="button">
          <span>{this.state.selected}</span>
          <i className="fa fa-chevron-down" />
        </div>
      </div>
    );
  }
}

Select.propTypes = {
  options: PropTypes.array.isRequired, // eslint-disable-line
  label: PropTypes.string,
};

Select.defaultProps = {
  label: 'Select',
};

export default Select;
