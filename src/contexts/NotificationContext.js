import React, { createContext, useReducer } from "react";
import notificationReducer from "./notificationReducer";
import {
  ADD_NOTIFICATION,
  CLEAR_NOTIFICATIONS,
  EDIT_NOTIFICATION,
  REMOVE_NOTIFICATION,
} from "./types";
import { makeContextHook } from "./utils";

/*
notification model:
{
  id: String // unique identifier to micro manage notifications
  msg: String // text to display to the user
  type: String, // success, warning, or failure - used as a prop to Alert
  scope: String, // login, register or other strings clarifying context of the message
  field: String // useful in notifications regarding forms - error in specefic form field, for instance
  expiry: Number // milliseconds to expire notification in
};
*/

const initialState = [];

export const NotificationContext = createContext(initialState);

export const useNotificationContext = makeContextHook(
  "useNotificationContext",
  NotificationContext
);

const NotificationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notificationReducer, initialState);

  function addNotification(notification) {
    console.log("adding notification:", notification);
    dispatch({
      type: ADD_NOTIFICATION,
      payload: notification,
    });
    if (notification.expiry) {
      setTimeout(
        () => removeNotification(notification.id),
        notification.expiry
      );
    }
  }

  function updateNotification(updatedNotification) {
    console.log("modifying notification:", updatedNotification);
    dispatch({
      type: EDIT_NOTIFICATION,
      payload: updatedNotification,
    });
    if (updatedNotification.expiry) {
      setTimeout(
        () => removeNotification(updatedNotification.id),
        updatedNotification.expiry
      );
    }
  }

  /**
   * Clear all notifications for the given scope
   * Will clear everything if no scope provided
   * @param {String} scope
   */
  function clearNotifications(scope) {
    dispatch({
      type: CLEAR_NOTIFICATIONS,
      payload: scope,
    });
  }

  function removeNotification(id) {
    dispatch({
      type: REMOVE_NOTIFICATION,
      payload: id,
    });
  }

  return (
    <NotificationContext.Provider
      value={{
        notifications: state,
        addNotification,
        clearNotifications,
        removeNotification,
        updateNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;
