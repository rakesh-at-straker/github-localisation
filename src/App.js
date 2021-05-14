import logo from "./logo.svg";
import "./App.css";
import { withTranslation } from "react-i18next";

const App = (props) => {
  const { t } = props;

  const onLanguageChanged = (event) => {
    let language = event.currentTarget.value;
    props.i18n.changeLanguage(language);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button value="en" onClick={(value) => onLanguageChanged(value)}>
          English
        </button>
        <button Value="sv" onClick={(value) => onLanguageChanged(value)}>
          Swedish
        </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t("Hi")}</p>
        <p>{t("Welcome")}</p>
      </header>
    </div>
  );
};

export default withTranslation()(App);
