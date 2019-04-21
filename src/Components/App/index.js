//node modules
import React from 'react';
import { Switch, Route } from "react-router-dom";

//material components
import { MuiThemeProvider } from '@material-ui/core/styles';

//local files
import Header from "../../Containers/Header/Index";
import routes from "../../routes/routes";
import { theme } from "./theme";

const App = () => {
    return (
      <MuiThemeProvider theme={theme}>
        <Header/>
        <Switch>
          {routes.map(({path, component, exact}) =>
            <Route key={path} path={path} component={component} exact={exact}/>
          )}
        </Switch>
      </MuiThemeProvider>
    );
};

export default App;
