import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DataPerson from "./components/DataPerson";
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/" exact>
            <DataPerson />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
