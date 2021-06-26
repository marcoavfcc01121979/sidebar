import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSideBar = () => {
        setIsSidebarOpen(true)
    }

    const closeSideBar = () => {
        setIsSidebarOpen(false)
    }

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return(
        <AppContext.Provider value={{
            isModalOpen,
            isSidebarOpen,
            openModal,
            openSideBar,
            closeModal,
            closeSideBar,
        }}>
            {children}
        </AppContext.Provider>
    )
}

// custom hooks
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }