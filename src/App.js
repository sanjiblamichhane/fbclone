import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import {useStateValue} from './StateProvider';
 

function App() {
  const [{ user }, dispatch] = useStateValue();
  
  return (
    <div className="app">
      {/* If it's a user, render the login page: */}
      {!user? (
      <Login />
      // otherwise do the following
      ):(
        // rest of the app
        <div>
          {/* Header */}
          <Header />
          {/* App body */}
            <div className="app_body">
            {/* sidebar */}
              <Sidebar />
            {/* Feed */}
              <Feed />
            {/* Widget */}
              <Widgets />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
