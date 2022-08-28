import { useContext } from "react";
import { I18N } from "../../context/i18n";
import { LanguageFlagImage, SwitchLanguageDiv } from "./style";

export function SwitchLanguage() {
    const { setLanguage } = useContext(I18N);
    
    return (
        <SwitchLanguageDiv>
            <button onClick={() => setLanguage('ptBR')}><LanguageFlagImage src="/imgs/icons8-brasil-48.webp" alt="BR" /></button>
            <button onClick={() => setLanguage('en')}><LanguageFlagImage src="/imgs/icons8-eua-48.webp" alt="EN" /></button>
        </SwitchLanguageDiv>
    )
}