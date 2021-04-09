import * as types from "./actionTypes";

const initialState = {
  items: [],
  meta: {},
  fetching: false,
  failed: false,
  errors: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REQUEST_FETCH_EMPLOYEES:
      return {
        ...state,
        fetching: true,
        failed: false,
      };

    case types.FETCH_EMPLOYEES:
      return {
        ...state,
        items: payload.data,
        meta: payload.meta,
        fetching: false,
        failed: false,
      };

    case types.FAIL_FETCH_EMPLOYEES:
      return {
        ...state,
        fetching: false,
        failed: true,
        errors: payload,
      };

    default:
      return state;
  }
};

export default reducer;
