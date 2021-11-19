import React from "react";
import BackgroundImage from "./features/backgroundImage/BackgroundImage";
import Weather from "./features/weather/Weather";
import Quote from "./features/quote/Quote";
import Error from "./features/error/Error";
import Journal from "./features/journal/Journal";
import BackgroundImageLeftControl from "./features/backgroundImage/components/BackgroundImageLeftControl";
import BackgroundImageRightControl from "./features/backgroundImage/components/BackgroundImageRightControl";
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
      <main> 
        <Journal />
      </main>
      <aside className="right-wallpaper-control wallpaper-control">
        <BackgroundImageRightControl />
      </aside>
      <footer>
        <Quote />
      </footer>
    </div>
  );
}

export default App;
