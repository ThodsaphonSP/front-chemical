
import './App.css';
import {createTheme, responsiveFontSizes, ThemeProvider} from "@mui/material";
import {MainPage} from "./page/admin/MainPage";


let theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif'
    ].join(','),
  },
  // other theme settings
});

theme = responsiveFontSizes(theme);

function App() {
  return (<>
    <ThemeProvider theme={theme} >
      <MainPage></MainPage>
    </ThemeProvider >
  </>);
}

export default App;
