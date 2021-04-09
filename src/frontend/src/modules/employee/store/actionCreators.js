import * as types from "./actionTypes";

export function requestFetchEmployees() {
  return {
    type: types.REQUEST_FETCH_EMPLOYEES,
  };
}

export function fetchEmployees(data) {
  return {
    type: types.FETCH_EMPLOYEES,
    payload: data,
  };
}

export function failFetchEmployees(data) {
  return {
    type: types.FAIL_FETCH_EMPLOYEES,
    payload: data,
  };
}
