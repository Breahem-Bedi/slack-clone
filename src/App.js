import React ,{ useState } from "react";
import  Chat from './Chat';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      <Router> 
        {! user? (
          <Login/>
        ) : (
          <>
          <Header/>
          <div className="app__body">
            <Sidebar/>
              <Switch>
                  <Route path = "/room/:roomId">
                    <Chat/>
                  </Route>
                  <Route path = "/">
                    {/* <Chat/> */}
                    <h1>Welcome</h1>
                  </Route>
                
              </Switch>
          </div>
          </>
        )}        
      </Router>  
    </div>
  );
}

export default App;
