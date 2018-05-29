import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MiniService from '../containers/MiniService';

const StyledServicesList = styled.div`
  flex: 1;
`;

const ServicesList = ({ services }) => {
  const renderMiniService = (service, index) => (
    <MiniService key={`${service.serviceIdentifier}-${index}`} service={service} />
  );
  return <StyledServicesList>{services.map(renderMiniService)}</StyledServicesList>;
};

ServicesList.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      serviceIdentifier: PropTypes.string.isRequired
    })
  )
};

export default ServicesList;
