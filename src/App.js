import React, { useState /*useRef, useEffect*/ } from "react";
import { ThemeProvider } from "styled-components";
import Footer from "./Components/Footer/Footer.jsx";
import Navigation from "./Components/Navigation/Navigation.jsx";
import Home from "./Page/Home.jsx";
import { GlobalStyles /*Cursor*/ } from "./Theme/Global.magic.jsx";
import { lightTheme, darkTheme } from "./Theme/Theme";

function App() {
  const [theme, setTheme] = useState("light");

  /* let cursor = useRef();
  useEffect(() => {
    window.addEventListener("mousemove", cursorLocate);
  }, []);

  let cursorLocate = (e) => {
    cursor.current.style.top = e.pageY + "px";
    cursor.current.style.left = e.pageX + "px";
  } */

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      {/* <Cursor ref={cursor}></Cursor> */}
      <Navigation changeMode={themeToggler} theme={theme} />
      <Home theme={theme} />
      <Footer />
    </ThemeProvider>
  );
}
export default App;
