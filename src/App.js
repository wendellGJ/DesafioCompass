import { ThemeProvider } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Provider } from "react-redux";
import "./index.css";
import Routes from "./routes";
// import store from './store';
import appTheme from "./theme/index";
// import Footer from './utils/components/Footer/index';
// import Header from './utils/components/Header/index';

export default function App() {
  return (
    <h1>teste</h1>
    // // <Provider store={store}>
    // <ThemeProvider theme={appTheme}>
    //   <Grid container direction="column" justifyContent="space-between" alignItems="stretch">
    //     {/* <Header /> */}
    //     <Routes />
    //     {/* <Footer /> */}
    //   </Grid>
    // </ThemeProvider>
    // // </Provider>
  );
}
