import React from 'react';
import './App.css';
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
            <div>
                <div className="jumbotron">
                    <Link className="main-title" to="/"><h1>Office Mail Templates</h1></Link>
                    <div className="btn-group">
                        <Link className="btn-group-lg btn btn-primary" to="/leave">Leave</Link>
                        <Link className="btn-group-lg btn btn-primary" to="/work-from-home">Work From Home</Link>
                        <Link className="btn-group-lg btn btn-primary" to="/work-log">Work log</Link>
                    </div>
                </div>
                <Switch>
                    <Route exact path="/">
                        <div>
                            <h4>Generate different office applications quickly</h4>
                            <p>Click one of the buttons to get started</p>
                        </div>
                    </Route>
                    <Route exact path="/leave">
                        <div>
                            <h2>Leave</h2>
                        </div>
                    </Route>
                    <Route exact path="/work-from-home">
                        <div>
                            <h2>WFH</h2>
                        </div>
                    </Route>
                    <Route exact path="/work-log">
                        <div>
                            <h2>Work Log</h2>
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
