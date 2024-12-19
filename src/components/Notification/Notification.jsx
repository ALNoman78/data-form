import React from 'react'
import PropTypes from 'prop-types'
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { Store } from 'react-notifications-component';

const Notification = () => {
    Store.addNotification({
        title: "Wonderful!",
        message: "teodosii@react-notifications-component",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 5000,
            onScreen: true
        }
    });
    return (
        <div className="app-container">
            <ReactNotifications></ReactNotifications>

            {/* <Application /> */}
        </div>
    )
}

Notification.propTypes = {}

export default Notification