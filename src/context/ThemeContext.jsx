import { createTheme } from "@mui/material";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextComponent = ({ children }) => {
  const [dark, setDark] = useState(false);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#E3721E",
      },
      secondary: {
        main: "#00B2B6",
      },
    },
  });

  const handleClickTheme = () => {
    setDark(!dark);
  };

  let data = {
    dark,
    handleClickTheme,
    theme,
  };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default ThemeContextComponent;
