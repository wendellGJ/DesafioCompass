import "@fontsource/roboto";
// import { ptBR } from "@material-ui/core/locale";
import { createTheme } from "@mui/material";

export const appColors = {
  primaryColor: "#DB3F7A",
  secondaryColor: "#2196F3",
  pink: "#DB3F7A",
  black: "#000000",
  white: "#FFFFFF",
  Gray: "#4E4E4E",
  Red: "#E11919",
  warning: "#F44336",
  green: "#4CAF50",
  dividerBlue: "#66869B",
  blackColor: "#000000",
};
const AppTheme = createTheme(
  {
    palette: {
      primary: {
        main: appColors.primaryColor,
      },
      secondary: {
        main: appColors.secondaryColor,
      },
      warning: {
        main: appColors.warning,
      },
    },
    appColors,
    typography: {
      fontFamily: "Roboto",
      body1: {
        fontFamily: "Roboto",
      },
    },
  }
  // ptBR
);

export default AppTheme;
