import { createContext, Dispatch, ReactNode, useState } from "react";


interface ContextProps {
    userName?: string,
    setUserName: Dispatch<string>,
}

type ContextInputPropsType = {
    children: ReactNode
}

export const AuthContext = createContext({} as ContextProps);
AuthContext.displayName = 'AuthContext';

export default function AuthContextProvider({ children }: ContextInputPropsType) {
    const [ userName, setUserName ] = useState<string>();
    return (
        <AuthContext.Provider
            value={{
                userName,
                setUserName
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}