import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import moment from 'moment';

import { TIME_FORMAT } from '../constants/visualization';

const StyledMiniService = styled.article`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.071em;
  background: #ffffff;
  padding: 0.714em;
  border-left: 0.357em solid transparent;

  .scheduled-time,
  .service-info,
  .service-realtime {
    padding: 0.357em;
  }

  .scheduled-time {
    flex: 1;
    font-weight: 700;
    font-size: 1.143em
  }

  .service-info {
    flex: 3;
  }

  .service-realtime {
    flex: 2;
    text-align: right
  }

  .service-identifier {

  }

  .service-operator {
    color: #9b9f9e
    font-size: 0.857em
  }

  &.active {
    background: #d8f3ec;
    border-left-color: #244774;
  }
`;

class MiniService extends React.PureComponent {
  static propTypes = {
    service: PropTypes.shape({
      realTimeUpdatesInfo: PropTypes.shape({
        realTimeServiceInfo: PropTypes.shape({
          realTime: PropTypes.string
        })
      }),
      serviceIdentifier: PropTypes.string.isRequired,
      scheduledInfo: PropTypes.shape({
        scheduledTime: PropTypes.string.isRequired,
        scheduledPlatform: PropTypes.string
      }).isRequired,
      serviceOperator: PropTypes.string.isRequired
    }),
    activateService: PropTypes.func
  };

  handleClick = () => {
    const { service, activateService } = this.props;
    activateService && activateService(service);
  };

  render() {
    const { active, service } = this.props;
    const isActive = active && service.serviceIdentifier === active.serviceIdentifier;
    const scheduledTime = moment(service.scheduledInfo.scheduledTime);
    const realTime =
      service.realTimeUpdatesInfo &&
      service.realTimeUpdatesInfo.realTimeServiceInfo &&
      moment(service.realTimeUpdatesInfo.realTimeServiceInfo.realTime);
    const formattedScheduledTime = scheduledTime.format(TIME_FORMAT);
    const formattedRealTime = realTime && realTime.format(TIME_FORMAT);
    const isOnTime = realTime && (realTime.isAfter(scheduledTime) || realTime.isSame(scheduledTime));
    const isDelayed =
      service.realTimeUpdatesInfo &&
      service.realTimeUpdatesInfo.realTimeServiceInfo &&
      service.realTimeUpdatesInfo.realTimeServiceInfo.realTime;
    const isCancelled =
      service.realTimeUpdatesInfo &&
      service.realTimeUpdatesInfo.cancelled &&
      service.realTimeUpdatesInfo.cancelled.isCancelled;
    return (
      <StyledMiniService onClick={this.handleClick} className={classNames('service', { active: isActive })}>
        <div className="scheduled-time">{formattedScheduledTime}</div>

        <div className="service-info">
          <div className="service-identifier">{service.serviceIdentifier}</div>
          <div className="service-operator">{service.serviceOperator}</div>
        </div>

        <div className="service-realtime">
          {service.realTimeUpdatesInfo &&
            service.realTimeUpdatesInfo.realTimeServiceInfo && (
              <div className="service-platform">
                Plat.
                {service.realTimeUpdatesInfo.realTimeServiceInfo.realTimePlatform ||
                  service.scheduledInfo.scheduledPlatform}
              </div>
            )}
          {
            <div
              className={classNames('service-status', {
                ontime: isOnTime,
                delayed: !isOnTime
              })}
            >
              {isOnTime ? 'On Time' : isDelayed ? `Exp. ${formattedRealTime}` : isCancelled ? 'Cancelled' : 'Unknown'}
            </div>
          }
        </div>
      </StyledMiniService>
    );
  }
}

export default MiniService;
