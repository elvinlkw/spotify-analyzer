import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import moment from "moment";
import { useDispatch } from "react-redux";
import { loadUser, authError } from "./actions/auth";
// Styled Components
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import "./App.css";
// Components
import PrivateRoute from "./components/routing/PrivateRoute";
import Index from "./containers";
import Login from "./containers/login";
import Dashboard from "./containers/dashboard";
import setAuthToken from "./api/setAuthToken";

const token = JSON.parse(sessionStorage.getItem("token"));
if (token?.access_token) {
  setAuthToken(token.access_token);
}

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const now = moment().unix();
    if (token?.access_token && now < token.expires_at) {
      dispatch(loadUser(token.access_token));
    } else {
      dispatch(authError());
    }
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
