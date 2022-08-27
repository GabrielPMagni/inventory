import { createContext, ReactNode } from "react";

export const AuthContext = createContext({});
AuthContext.displayName = 'AuthContext';

type ContextPropsType = {
    children: ReactNode
}

export default function AuthContextProvider({ children }: ContextPropsType) {
    return (
        <AuthContext.Provider
            value={{}}
        >
            { children }
        </AuthContext.Provider>
    )
}