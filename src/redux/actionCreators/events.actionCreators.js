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

const addEvent = (event) => ({
  type: types.CREATE_EVENT,
  payload: event,
});

const updateEvent = (event) => ({
  type: types.UPDATE_EVENT,
  payload: event,
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

export const createEvent = (event, token, setSuccess) => (dispatch) => {
  const BACKEND_URL = import.meta.env.QUAGRI_ENDPOINT_URL;
  axios
    .post(`${BACKEND_URL}/api/event/create`, event, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch(addEvent(res.data.event));
      setSuccess(true);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateEventAction =
  (event, id, token, setSuccess) => (dispatch) => {
    const BACKEND_URL = import.meta.env.QUAGRI_ENDPOINT_URL;
    axios
      .post(`${BACKEND_URL}/api/event/update/${id}`, event, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(updateEvent({ id, doc: event }));
        setSuccess(true);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
