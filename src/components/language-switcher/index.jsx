import { useContext } from 'react';
import {LanguageContext} from '../../LanguageContext';

import styles from './language-switcher.module.css';

const LanguageSwitcher = () => {
    const { toggleLanguage } = useContext(LanguageContext);

    return (
        <button className={styles.btn} onClick={toggleLanguage}>
            Switch Language
        </button>
    );
};

export default LanguageSwitcher;