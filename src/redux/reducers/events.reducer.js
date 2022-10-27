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
    default:
      return state;
  }
};

export default eventsReducer;
