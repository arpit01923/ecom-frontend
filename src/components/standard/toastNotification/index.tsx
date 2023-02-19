import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  status: string;
  message: string;
}
const ToastNotification = ({ status, message }: Props) => {
  switch (status) {
    case "success":
      return toast.success(message);
    case "error":
      return toast.error(message);
    case "warning":
      return toast.warning(message);
    case "info":
      return toast.info(message);
    default:
      return;
  }
};

export default ToastNotification;
