import { actionTypes } from '../actions/services';

export const DEFAULT_STATE = {
  all: [],
  active: null
};

export default (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_ALL_SUCCESS:
      return { ...state, all: payload.services };
    case actionTypes.ACTIVATE:
      return { ...state, active: payload.service };
    case actionTypes.FETCH_ONE_SUCCESS:
      return { ...state, active: { ...state.active, ...payload.service } };
    default:
      return state;
  }
};
