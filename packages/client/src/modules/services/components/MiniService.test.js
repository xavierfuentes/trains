import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import MiniService from './MiniService';

describe('Test MiniService component', () => {
  const service = {
    serviceIdentifier: 'W13317',
    serviceOperator: 'SW',
    transportMode: 'TRAIN',
    scheduledInfo: { scheduledTime: '2018-05-29T13:06:00+01:00', scheduledPlatform: '2' },
    callingType: 'PickUp',
    destinationList: [{ crs: 'HMC' }],
    realTimeUpdatesInfo: {
      realTimeServiceInfo: {
        realTime: '2018-05-29T13:06:00+01:00',
        realTimePlatform: '2',
        realTimeFlag: 'Estimate'
      }
    },
    callingPatternUrl: 'https://realtime.thetrainline.com/callingPattern/W13317/2018-05-29'
  };

  it('renders correctly', () => {
    const tree = renderer.create(<MiniService service={service} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Tests click event', () => {
    const mockCallBack = jest.fn();

    const tree = shallow(<MiniService service={service} activateService={mockCallBack} />);
    tree.find('.service').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
