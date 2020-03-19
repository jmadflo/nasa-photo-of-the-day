import React, { useState, useEffect } from "react";
// import "./App.css";
import axios from "axios"
import styled from "styled-components"
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

  const AppContainer = styled.div`
    box-sizing: border-box;
    text-align: center;
    margin: 2% 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 4px solid black;
    border-radius: 10px;
    padding: 5%;
  `

  return (
    <AppContainer >
      <Header text={"NASA is very cool, but not as cool as SpaceX!"}/>
      <ImageContainer image={data.url} title={data.title}/>
      <BottomContent explanation={data.explanation}/>
    </AppContainer>
  );
}

export default App;
