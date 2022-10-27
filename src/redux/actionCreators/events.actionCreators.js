import axios from "axios";
import * as types from "../actionTypes/events.actionTypes";

// actions
const setEvents = (events) => ({
  type: types.GET_EVENTS,
  payload: events,
});

const setEventsLoading = (data) => ({
  type: types.SET_EVENTS_LOADING,
  payload: data,
});

// action creators
export const getEvents = () => (dispatch) => {
  dispatch(setEventsLoading(true));
  const BACKEND_URL = import.meta.env.QUAGRI_ENDPOINT_URL;
  axios
    .get(`${BACKEND_URL}/api/event/all/get`)
    .then((res) => {
      dispatch(setEvents(res.data.events.rows));
      dispatch(setEventsLoading(false));
    })
    .catch((err) => {
      dispatch(setEvents([]));
      dispatch(setEventsLoading(false));
    });
};
