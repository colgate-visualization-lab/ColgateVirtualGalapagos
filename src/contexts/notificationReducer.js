import {
  ADD_NOTIFICATION,
  CLEAR_NOTIFICATIONS,
  REMOVE_NOTIFICATION,
  EDIT_NOTIFICATION,
} from "./types";

const notificationReducer = (state, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return [...state, action.payload];
    case EDIT_NOTIFICATION:
      return state.map((notification) =>
        notification.id === action.payload?.id
          ? { ...notification, ...action.payload }
          : notification
      );
    case REMOVE_NOTIFICATION:
      return state.filter((notification) => notification.id !== action.payload);
    case CLEAR_NOTIFICATIONS:
      return action.payload
        ? state.filter((notification) => notification.scope !== action.payload)
        : [];
    default:
      return state;
  }
};

export default notificationReducer;
