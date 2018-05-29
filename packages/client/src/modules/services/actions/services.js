export const actionTypes = {
  FETCH_ALL_REQUEST: '@TRAINS/ROOT/SERVICES/ALL/FETCH_REQUEST',
  FETCH_ALL_SUCCESS: '@TRAINS/ROOT/SERVICES/ALL/FETCH_SUCCESS',
  FETCH_ALL_FAILURE: '@TRAINS/ROOT/SERVICES/ALL/FETCH_FAILURE',
  FETCH_ONE_REQUEST: '@TRAINS/ROOT/SERVICES/ONE/FETCH_REQUEST',
  FETCH_ONE_SUCCESS: '@TRAINS/ROOT/SERVICES/ONE/FETCH_SUCCESS',
  FETCH_ONE_FAILURE: '@TRAINS/ROOT/SERVICES/ONE/FETCH_FAILURE',
  ACTIVATE: '@TRAINS/ROOT/SERVICES/ONE/ACTIVATE'
};

export const fetchAllServices = () => async dispatch => {
  dispatch(fetchAllServicesRequest());

  try {
    const response = await fetch('/departures');
    const data = await response.json();
    const onlyTrainData = data.services.filter(service => service.transportMode === 'TRAIN');
    dispatch(fetchAllServicesSuccess(onlyTrainData));
  } catch (error) {
    console.error('Error!', error);
    dispatch(fetchAllServicesFailure(error));
  }
};

export const fetchAllServicesRequest = () => ({ type: actionTypes.FETCH_ALL_REQUEST });
export const fetchAllServicesSuccess = services => ({ type: actionTypes.FETCH_ALL_SUCCESS, payload: { services } });
export const fetchAllServicesFailure = error => ({ type: actionTypes.FETCH_ALL_FAILURE, payload: { error } });

export const activateService = service => ({ type: actionTypes.ACTIVATE, payload: { service } });

export const fetchCallingPatternForService = callingPatternUrl => async dispatch => {
  dispatch(fetchCallingPatternForServiceRequest());

  try {
    const response = await fetch(`/callingPattern?url=${callingPatternUrl}`);
    const data = await response.json();
    dispatch(fetchCallingPatternForServiceSuccess(data.service));
  } catch (error) {
    console.error('Error!', error);
    dispatch(fetchCallingPatternForServiceFailure(error));
  }
};

export const fetchCallingPatternForServiceRequest = () => ({ type: actionTypes.FETCH_ONE_REQUEST });
export const fetchCallingPatternForServiceSuccess = service => ({
  type: actionTypes.FETCH_ONE_SUCCESS,
  payload: { service }
});
export const fetchCallingPatternForServiceFailure = error => ({
  type: actionTypes.FETCH_ONE_FAILURE,
  payload: { error }
});
