import { useState, createContext, useContext } from "react";
import { tours } from "./data";

const AppContext = createContext();

export const AppProvider = ({ children}) => {    
    const [isModalOpen, setIsModalOpen] = useState(false);  
    const [road, setRoad] = useState({});  

    const openModal = () => {
        setIsModalOpen(true);        
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <AppContext.Provider
            value={{       
                tours,    
                road,
                setRoad,     
                isModalOpen,
                openModal,                
                closeModal
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

