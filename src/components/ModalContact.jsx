import React from 'react'
import ReactDOM from 'react-dom'
import "../styles/ModalBackground.css"

const ModalContact = ({children}) => {
        return ReactDOM.createPortal(
            <div className="ModalBackground">
                {children}
            </div>,
            document.getElementById("modal--contact")
    );
}

export default ModalContact;