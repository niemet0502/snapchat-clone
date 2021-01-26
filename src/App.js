import React from 'react';
import './App.css';
import WebcamCapture from "./WebcamCapture"
import Preview from "./Preview"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/preview">
            <Preview />
          </Route>
          <Route path="/">
            <WebcamCapture />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
