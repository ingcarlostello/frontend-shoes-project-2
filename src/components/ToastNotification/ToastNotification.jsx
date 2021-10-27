import React, { useEffect } from 'react';

// @redux
import { useDispatch, useSelector } from 'react-redux';

// @actions
import { hideToastNotification } from '../../actions/toastNotificationsActions';

const ToastNotification = () => {

    const dispatch = useDispatch()

    const { toastNotification } = useSelector(state => state.toastNotification)

    useEffect(() => {
        setTimeout(() => {
            dispatch(hideToastNotification())
        }, 3000);
    }, [toastNotification])

    return (
        <>
            {
                toastNotification === false ? null : (
                    <div className="static z-20">
                        <div class={`${toastNotification ?
                            "animate__animated animate__slideInRight absolute top-16 right-4 flex items-center text-white max-w-sm w-full bg-green-400 shadow-md rounded-lg overflow-hidden mx-auto" :
                            "animate__animated animate__slideOutRight absolute top-16 right-4 flex items-center text-white max-w-sm w-full bg-green-400 shadow-md rounded-lg mx-auto"}`} >
                            <div class='w-10 border-r px-2'>
                                <i class="far fa-check-circle"></i>
                            </div>
                            <div class='flex items-center px-2 py-3'>
                                <div class='mx-3'>
                                    <p>Producto agregado al carrito</p>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }

        </>


    );
};

export default ToastNotification;
