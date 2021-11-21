import React from "react";
import BackgroundImage from "./features/Image/Image";
import Weather from "./features/weather/Weather";
import Quote from "./features/quote/Quote";
import Error from "./features/error/Error";
import Journal from "./features/journal/Journal";
import BackgroundImageLeftControl from "./features/Image/components/BackgroundImageLeftControl";
import BackgroundImageRightControl from "./features/Image/components/BackgroundImageRightControl";
function App() { 
  return (
    <div className="App">
      <BackgroundImage />
      
      <header>
        <Error />
        <Weather />
      </header>
      <aside className="left-wallpaper-control wallpaper-control">
        <BackgroundImageLeftControl />
      </aside>
      <div className="central"> 
        <Journal />        
        <Quote />
      </div>
      <aside className="right-wallpaper-control wallpaper-control">
        <BackgroundImageRightControl />
      </aside> 
    </div>
  );
}

export default App;
