import React from 'react';
import {Switch, Route} from "react-router-dom";
import {MuiThemeProvider} from '@material-ui/core/styles';
import Header from "../../containers/header/Header";
import routes from "../../routes/routes";
import {theme} from "./theme";

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Header/>
      <Switch>
        {routes.map(({path, component, exact}) =>
          <Route
            key={path}
            path={path}
            component={component}
            exact={exact}
          />
        )}
      </Switch>
    </MuiThemeProvider>
  );
};

export default App;
