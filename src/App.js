import React from "react";
import Tracks from "./Components/Tracks";
import Search from "./Components/Search";
// import Lyrics from "./Components/Lyrics";
import "./App.css";
import { ContextController } from "./Context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <ContextController>
      <Router>
          <div className="container">
          <Search />
          <Tracks />
            {/* <Routes>
               <Route path="/lyrics" component={Lyrics} />
            </Routes> */}
          </div>
      </Router>
    </ContextController>
  
  );
};

export default App;









