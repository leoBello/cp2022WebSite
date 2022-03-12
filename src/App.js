import { useMemo, useState } from "react";

import { Home } from "./components/Home/Home";
import "./App.css";
import { LanguageContext } from "./components/Home/LanguageContext";

function App() {

  let [language, setLanguage] = useState("fr");

  const value = useMemo(() => ({ language, setLanguage }), [language]);


  return (
    <LanguageContext.Provider value={value}>
      <div className="App">
        <Home />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
