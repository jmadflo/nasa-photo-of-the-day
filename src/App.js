import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"
import Header from "./components/Header"
import ImageContainer from "./components/ImageContainer"
import BottomContent from "./components/BottomContent"



function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => {
        setData(response.data)
        console.log(response.data)
      })
      .catch(error => {
        console.log("there was an error:", error)
      })
  }, [])

  return (
    <div className="App">
      <Header text={"NASA is very cool, but not as cool as SpaceX!"}/>
      <ImageContainer image={data.url} title={data.title}/>
      <BottomContent explanation={data.explanation}/>
    </div>
  );
}

export default App;
