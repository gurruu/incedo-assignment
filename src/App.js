import { useState } from "react";
import Pages from "./components/Pages";
import { themeContext } from "./components/ThemeContextProvider";

function App() {
  const [theme,SetTheme]=useState('dark')
  const toggleTheme=()=>{
    SetTheme((prevTheme)=>{
      return prevTheme==='light'?'dark':'light'
    })
  }
  const ctxValue={
    theme:theme,
    toggleTheme:toggleTheme
  }
  return (
    <themeContext.Provider value={ctxValue}>
    
    <Pages/>
    </themeContext.Provider>
    
  );
}

export default App;
