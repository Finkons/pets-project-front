import { isRejectedWithValue } from "@reduxjs/toolkit";
import { notifyError } from "helpers/toastNotifications";

export const errorHandler = api => next => action => {
  if (!isRejectedWithValue(action)) {
    return next(action);
  }

  console.log(action.payload.status);
  notifyError(action.payload.data.message);
};
