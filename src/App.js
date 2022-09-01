import React from "react";
import Tracks from "./Components/Tracks";
import Search from "./Components/Search";
// import Lyrics from "./Components/Lyrics";
// import {  Route,Routes } from "react-router-dom";


import "./App.css";

import { ContextController } from "./Context";

const App = () => {
  return (
    <ContextController>
        <>
          <Search />
          <Tracks />
 {/* <Routes>
  <Route exact path="/lyrics/:id" element={<Lyrics/>} />
            </Routes> */}
         </>
    </ContextController>
  );
};

export default App;








// import './App.css';
// import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
// import Main from "./Components/Main";
// import Search from './Components/Search';

// function App() {
//   return (
//     <div className="App mt-4">
//       <h1> <LibraryMusicIcon/> Search For a Music</h1>

//       <div><Search/></div>
//       <div><Main/></div>
      

//     </div>
//   );
// }

// export default App;
