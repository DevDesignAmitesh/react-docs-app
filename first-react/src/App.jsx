import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Background from "./component/background";
import Foreground from "./component/foreground";
import Addbtn from "./component/addbtn";
import Addscreen from "./component/addscreen";
import { useState } from "react";
import Context from "./store/card-store";

function App() {
  const [tab, setTab] = useState("notAdded");

  const changeToAdd = () => {
    setTab("added");
  };

  const changeToNotAdd = (e) => {
    setTab("notAdded");
  };

  const data = [
    {
      id: new Date().toLocaleTimeString,
      desc: "Tommorow we will do push day in gym and cardio also.",
      fileSize: Math.floor(Math.random() * 10) + "mb",
      title: "Do later.",
    },
  ];

  const [initialData, setInitialData] = useState(data);

  const inputValue = (dscValue, titValue) => {
    const newData = {
      id: new Date(),
      desc: dscValue,
      fileSize: Math.floor(Math.random() * 10) + "mb",
      title: titValue,
    };

    setInitialData((prev) => [newData, ...prev]);
  };

  return (
    <Context.Provider value={{ initialData, inputValue }}>
      <div id="bg" className="w-full h-screen bg-zinc-800 relative">
        <Background></Background>
        {tab === "added" ? (
          <Addscreen changeToNotAdd={changeToNotAdd}></Addscreen>
        ) : (
          [
            <Foreground></Foreground>,
            <Addbtn changeToAdd={changeToAdd}></Addbtn>,
          ]
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
