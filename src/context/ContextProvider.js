import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [thememode, setThememode] = useState(true)


    const toggleTheme = ()=>{
        thememode === false ? setThememode(true) : setThememode(false)
        localStorage.setItem("ThemeMode")

    }

  return (
    <AppContext.Provider
      value={{
        thememode,setThememode,toggleTheme
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppState = () => {
  return useContext(AppContext);
};

export default AppProvider;