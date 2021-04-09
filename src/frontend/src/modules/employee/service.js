import * as actions from "./store/actionCreators";
import Http from "../../utils/Http";
import queryString from "querystring";

export const getAllEmployees = (params = {}) => {
  return (dispatch) => {
    dispatch(actions.requestFetchEmployees());

    return Http.get(`/api/employees?${queryString.stringify(params)}`)
      .then((res) => {
        if (res.data) {
          dispatch(actions.fetchEmployees(res.data));
        }
      })
      .catch((err) => {
        dispatch(actions.failFetchEmployees(err));
      });
  };
};
