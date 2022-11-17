import { toast } from "react-toastify";

const toastConfig = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  style: {
    backgroundColor: "#f59256",
    color: "black",
  },
};

export const notifySuccess = message => toast.success(message, { ...toastConfig, toastId: message });

export const notifyWarning = message => toast.warning(message, { ...toastConfig, toastId: message });

export const notifyError = message => toast.error(message, { ...toastConfig, toastId: message });
