import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Button, createMuiTheme, ThemeProvider } from "@material-ui/core";
import Create from "./pages/Create";
import { purple } from "@material-ui/core/colors";
import { fontFamily } from "@material-ui/system";
import NoteData from "./pages/NoteData";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "./components/Layout";
import { ReactQueryDevtools } from 'react-query/devtools'

const queriClient = new QueryClient();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#D2691E",
    },
    secondary: purple,
  },
  typography: {
    fontFamily: "sans-serif",
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 400,
    fontWeightBold: 400,
  },
});

function App() {
  return (
   
    <QueryClientProvider client={queriClient}>
       <ReactQueryDevtools initialIsOpen={false}/>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/create">
                <Create />
              </Route>
              <Route path="/">
                <NoteData />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
