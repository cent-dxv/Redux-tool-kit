import React from "react";
import "./App.css";
import Profile from "./components/profile";
import Login from "./components/login";
import User_profile from "./components/users_container"
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">start </header> */}
    
     <Profile/>
     <Login/>
     <User_profile/>
    </div>
  );
}

export default App;
