import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ServicesList from './ServicesList';
import ServiceDetail from '../containers/ServiceDetail';

const StyledServices = styled.section`
  display: flex;
  justify-content: start;
  background: #f4f4f4;
  padding: 0.714em;
  margin-right: 5px;
`;

export default class Services extends React.PureComponent {
  static propTypes = {
    active: PropTypes.shape({}),
    allServices: PropTypes.array,
    fetchAllServices: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchAllServices();
  }

  render() {
    const { active, allServices = [] } = this.props;
    const isActive = active && active.serviceIdentifier !== null;
    return (
      <StyledServices>
        <ServicesList services={allServices} />
        {isActive && <ServiceDetail service={active} />}
      </StyledServices>
    );
  }
}
