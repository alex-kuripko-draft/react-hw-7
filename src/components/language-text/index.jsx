import { useContext } from 'react';
import {LanguageContext} from '../../LanguageContext';

const texts = {
    en: 'Hello, World!',
    ru: 'Привет, мир!'
};

const LanguageText = () => {
    const { language } = useContext(LanguageContext);

    return <p>{texts[language]}</p>;
};

export default LanguageText;