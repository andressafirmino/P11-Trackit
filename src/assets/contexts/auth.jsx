import React, {createContext, useState} from "react";

export const AuthContext = createContext({})

export default function AuthProvider({children}) {

    const [token, setToken] = useState('');
    const [image, setImage] = useState('');
    const [URL, setURL] = useState('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit');
    const [counter, setCounter] = useState(0);
    const [update, setUpdate] = useState(false);
    
    return (
        <AuthContext.Provider value={{token, setToken, 
        image, setImage, URL, 
        counter, setCounter,
        update, setUpdate}}>
            {children}
        </AuthContext.Provider>
    )
}