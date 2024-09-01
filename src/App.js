import './App.css';
import {LanguageProvider} from "./LanguageContext";
import LanguageSwitcher from "./components/language-switcher";
import LanguageText from "./components/language-text";

function App() {
  return (
      <LanguageProvider>
        <div className="App">
          <LanguageSwitcher />
          <LanguageText />
        </div>
      </LanguageProvider>
  );
}

export default App;
