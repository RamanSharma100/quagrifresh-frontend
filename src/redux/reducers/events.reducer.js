import * as types from "../actionTypes/events.actionTypes";

const initialState = {
  events: [],
  isLoading: true,
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_EVENTS:
      return {
        ...state,
        events: action.payload,
        isLoading: false,
      };
    case types.SET_EVENTS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case types.CREATE_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case types.UPDATE_EVENT:
      const currentEvent = state.events.find(
        (event) => event.id === action.payload.id
      );
      const index = state.events.indexOf(currentEvent);
      currentEvent.doc = { ...currentEvent.doc, ...action.payload.doc };

      return {
        ...state,
        events: state.events.map((event, i) =>
          i === index ? currentEvent : event
        ),
      };

    default:
      return state;
  }
};

export default eventsReducer;
