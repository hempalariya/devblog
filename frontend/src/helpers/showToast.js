import {toast, Zoom} from 'react-toastify'

export const showTost = (type, message) => {

    const config = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
    }


    if(type === 'success'){
        toast.success(message, config)
    } else if(type === 'error'){
        toast.error(message, config)
    } else if(type === 'info'){
        toast.error(message, config)
    } else{
        toast(message, config)
    }

    // toast('🦄 Wow so easy!', {
    //     position: "top-right",
    //     autoClose: 5000,    
    //     hideProgressBar: false,
    //     closeOnClick: false,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     transition: Bounce,
    //     });
}