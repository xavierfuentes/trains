import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ServiceStop from './ServiceStop';

const StyledServiceDetail = styled.div`
  flex: 1;
  background: #ffffff;
  padding: 0.714em;
  margin-left: 5px;

  .train-icon {
    font-size: 3em;
  }

  .service-origin,
  .service-destination {
    font-size: 1.143em;
    font-weight: 700;
  }

  .service-origin,
  .service-destination,
  .service-operator {
  }

  .destination-prefix {
    font-weight: 500
    color: #bcbcbc;
  }

  .service-operator {
    color: #a2a2a2
  }
  `;

class ServiceDetail extends React.PureComponent {
  static propTypes = {
    service: PropTypes.shape({
      callingPatternUrl: PropTypes.string.isRequired,
      serviceIdentifier: PropTypes.string.isRequired,
      stops: PropTypes.arrayOf(PropTypes.shape({}))
    })
  };

  componentDidMount() {
    this.loadServiceData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.service.serviceIdentifier !== this.props.service.serviceIdentifier) {
      this.loadServiceData();
    }
  }

  renderStop = (stop, index) => {
    const { service } = this.props;
    return <ServiceStop key={`${service.serviceIdentifier}-stop_${index}`} stop={stop} />;
  };

  render() {
    const { service } = this.props;
    return service.serviceOrigins && service.serviceOrigins.length ? (
      <StyledServiceDetail>
        <section>
          <div className="train-icon">
            <span role="img" aria-label="train">
              🚂
            </span>
          </div>
          <div className="service-data">
            <div className="service-origin">{service.serviceOrigins[0]}</div>
            <div className="service-destination">
              <span className="destination-prefix">to</span> {service.serviceDestinations[0]}
            </div>
            <div className="service-operator">Operated by {service.serviceOperator}</div>
          </div>
        </section>
        {service.stops.map(this.renderStop)}
      </StyledServiceDetail>
    ) : (
      <div>Loading...</div>
    );
  }

  loadServiceData() {
    const { fetchCallingPatternForService, service } = this.props;
    // todo: cancel any fetching in progress (axios?)
    fetchCallingPatternForService(service.callingPatternUrl);
  }
}

export default ServiceDetail;
