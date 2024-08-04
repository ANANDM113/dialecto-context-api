import { themeContext } from "./themeContext";
import { languageContext } from "./languageContext";
import { useContext } from "react";

export const Navbar =   ()  =>  {

    const {theme,setTheme}  =   useContext(themeContext);
    const {language}    =   useContext(languageContext);
    
    const changeTheme   =   ()  =>  {
        theme   === "light" ?   setTheme("dark")    :   setTheme("light");
    }

    return(
        <div className="navbar">
            <span>Dialecto</span>
            <div className="right">
                <button onClick={changeTheme}>
                    {theme === "light" ? "Dark":"light"} Theme
                </button>
                <span>{language}</span>
            </div>
        </div>
    );
}