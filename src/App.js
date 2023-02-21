import './App.css';
import {Navbar, HomePage, MenuPage, ContactPage, EventPage, Footer} from './components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {createTheme, ThemeProvider} from '@material-ui/core/styles'

function App() {
  const theme =  createTheme({
      typography: {
        fontFamily: ['Encode Sans Condensed','sans-serif'].join(','),
        h1: { fontWeight: 600, letterSpacing: '2px'},
        h2: { fontWeight: 600, letterSpacing: '2px'},
        h5: { fontWeight: 600, letterSpacing: '2px'},
        h6: { fontWeight: 600, letterSpacing: '2px'},
        body2:{fontWeight: 100, letterSpacing: '2px'},
        button:{fontWeight: 400, letterSpacing: '2px'},
      },
      palette: {
        primary: {
          main: "#fff",
        },
        secondary: {
          main: "#000",
        },

      }
  });
  return (
    <Router>
      <ThemeProvider theme={theme}>

      <Navbar/>

      <Switch>

        <Route exact path="/"> 
            <HomePage />
        </Route>

        <Route exact path="/Menu"> 
            <MenuPage />
        </Route>

        <Route exact path="/Contact"> 
            <ContactPage />
        </Route>

        <Route exact path="/Event"> 
            <EventPage />
        </Route>

        <Route path="/*"> 
            <HomePage />
        </Route>

      </Switch>

      <Footer />

      </ThemeProvider>
    </Router> 
  );
}

export default App;
