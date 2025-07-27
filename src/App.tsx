import React from "react";
import "./App.css";

import AppBody from "./AppBody";
import {LanguageProvider} from "./context/LanguageContext";


function App() {

  return (
      <LanguageProvider>
        <AppBody/>
      </LanguageProvider>
  );

}

export default App;
