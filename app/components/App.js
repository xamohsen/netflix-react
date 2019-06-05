import React, {useEffect} from "react";
import MainView from "./MainView";
import Navbar from "./Navbar";



const App = () => {

  return <div>
    <Navbar />
    <MainView testid={"home"} text={"Hello World"}/>
  </div>;
};

export default App;