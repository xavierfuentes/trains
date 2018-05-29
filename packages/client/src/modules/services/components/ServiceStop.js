import React from 'react';
import PropTypes from 'prop-types';

const ServiceStop = ({ stop }) => <div>{stop.location.crs}</div>;

ServiceStop.propTypes = {
  stop: PropTypes.shape({
    location: PropTypes.shape({
      crs: PropTypes.string.isRequired
    })
  }).isRequired
};

export default ServiceStop;
