import React from "react";
import "./App.css";
import UberPage from "../UberPage/UberPage";
import data from "../../data";

function App() {
  const defaultItem = {
    link: "https://apps.appili.dev",
    description: "View my mobile Apps",
    background_logo: "box6.png",
    background_logo_size: "16%",
    background_picture: "appleApp.jpg",
    background_picture_size: "cover",
    background_color: "#FFFFFF",
  };
  if (data.settings.default_item === undefined || data.settings.default_item) {
    data.items.push(defaultItem);
  }
  return (
    <div className="App">
      <UberPage items={data.items} settings={data.settings} />
    </div>
  );
}

export default App;
