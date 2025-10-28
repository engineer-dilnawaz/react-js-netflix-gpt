import { Bounce, toast } from "react-toastify";

export const TOAST_TYPE = Object.freeze({
  ERROR: "error",
  WARN: "warn",
  SUCCESS: "success",
  INFO: "info",
  DEFAULT: "default",
});

const toastConfig = {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
};

export const ShowToast = (
  message,
  type = TOAST_TYPE.DEFAULT,
  config = toastConfig
) => {
  switch (type) {
    case "error":
      return toast.error(message, config);
    case "warn":
      return toast.warn(message, config);
    case "success":
      return toast.success(message, config);
    case "info":
      return toast.info(message, config);
    default:
      return toast(message, config);
  }
};
