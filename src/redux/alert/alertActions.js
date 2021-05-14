import {HIDE_ALERT, SHOW_ALERT} from "./alertTypes";

export function showAlert(alert) {
  return (dispatch) => {
    dispatch({type: SHOW_ALERT, payload: alert});
    setTimeout(() => dispatch(hideAlert()), 5000)
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  }
}