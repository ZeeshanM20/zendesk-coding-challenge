import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import TicketList from "./pages/TicketList";
import Ticket from "./pages/Ticket";

const App = () => {
  return (
    <Router>
      <Route exact path="/">
        <TicketList />
      </Route>
      <Route path="/tickets">
        <Ticket />
      </Route>
    </Router>
  );
};

export default App;
