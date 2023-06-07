import React from "react";
import "./App.css";
import UberPage from "../UberPage/UberPage";
import data from "../../data";

function App() {
  const defaultItem = {
    link: "https://sftp-status.appili.io/",
    text_color: "#FFFFFF",
    description: "status of SFTP pipeline",
    background_logo: "sftp-status.png",
    background_logo_size: "20%",
    background_picture: "",
    background_picture_size: "cover",
    background_color: "#74ee15",
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
