import * as actionCreators from '../actions/services';
import reducer, { DEFAULT_STATE } from './services';

describe('Services fetching reducer', () => {
  test('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(DEFAULT_STATE);
  });

  test('handles all services fetching', () => {
    const oneService = [{ id: 1 }];
    const twoServices = [{ id: 2 }, { id: 3 }];
    expect(reducer({}, actionCreators.fetchAllServicesSuccess(oneService))).toEqual({ all: oneService });
    expect(reducer({ all: oneService }, actionCreators.fetchAllServicesSuccess(twoServices))).toEqual({
      all: twoServices
    });
  });

  test('handles service activation', () => {
    const service = { id: 1 };
    expect(reducer({ active: null }, actionCreators.activateService(service))).toEqual({ active: service });
  });

  test('handles service details fetching', () => {
    const service = { id: 1 };
    const serviceDetail = { stops: [] };
    expect(reducer({ active: service }, actionCreators.fetchCallingPatternForServiceSuccess(serviceDetail))).toEqual({
      active: { ...service, ...serviceDetail }
    });
  });
});
