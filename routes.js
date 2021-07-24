import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from './App';
import Loading from './components/loading/index'

const Routes = () => {

  return (
      <>
         <Router>
           <Route component={Loading} path="/" exact />
           <Route component={App} path="/app" exact />
         </Router>
      </>
  );
};

export default Routes;