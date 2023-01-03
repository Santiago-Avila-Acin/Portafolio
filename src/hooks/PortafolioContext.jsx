import React from 'react';

const PortafolioContext = React.createContext();

const PortafolioProvider = (props) => {
    const [openModalContact, setOpenModalContact] = React.useState(false)

    return (
        <PortafolioContext.Provider value={{
            openModalContact,
            setOpenModalContact
        }}>
            {props.children}
        </PortafolioContext.Provider>
    );
}

export {PortafolioContext, PortafolioProvider};