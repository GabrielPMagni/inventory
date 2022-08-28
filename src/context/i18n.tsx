import { createContext, Dispatch, ReactNode, useState } from "react";
import { i18n } from "../components/shared/Constants";

interface i18nProps {
    translate: (keyName: string) => any,
    language: string,
    setLanguage: Dispatch<string>
}

export const I18N = createContext({} as i18nProps);
I18N.displayName = 'I18N';

type ContextPropsType = {
    defaultLanguage: string,
    children: ReactNode
}

export default function I18NProvider({ children, defaultLanguage }: ContextPropsType) {
    const [ language, setLanguage ] = useState<string>(defaultLanguage);

    function translate(keyName: string) {        
        switch (language) {
            case 'en':
                return i18n.en.find(item => item.key === keyName)?.value ?? '';
            case 'ptBR':
                return i18n.ptBR.find(item => item.key === keyName)?.value ?? '';
        }        
    }

    return (
        <I18N.Provider
            value={{
                translate,
                language,
                setLanguage
            }}
        >
            { children }
        </I18N.Provider>
    )
}
