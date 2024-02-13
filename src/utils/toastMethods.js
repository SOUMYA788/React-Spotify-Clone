import { toast } from "react-toastify"

const toastOptions = {
    position:'bottom-center',
    autoClose: 1000,
    hideProgressBar:false,
    closeOnClick:true,
    pauseOnHover:true,
    draggable:true,
}

export const showSuccessToast = (message) => {
    toast.success(message, toastOptions);
    return
}

export const showWarningToast = (message) => {
    toast.warn(message, toastOptions);
    return
}

export const showErrorToast = (message) => {
    toast.error(message, toastOptions);
    return
}

export const showInfoToast = (message) => {
    toast.info(message, toastOptions);
    return
}