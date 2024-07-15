import React, { useState } from "react";
import "./index.css"
import GitHub from "./assets/github.png";
import Instagram from "./assets/instagram.png";
import Html from "./assets/html-5.png"
import Css from "./assets/css-3.png"
import Js from "./assets/js.png";
import react from "./assets/science.png";
import Php from "./assets/php.png"
import Projects from "./components/Projects/projects";
function App() {
  const [state, setState] = useState()
  // let str = "ggezcom991gh@gmail.com"
  // let array = []

  // let loop = () => {for(let i = 0; str.length[i] < i; i++){
  //   array.push(str[i])
  // }}
  // loop()
  // setState(array.join(""))
  // console.log(state)
  return (
    <div id="body">

      <header>

      <h1 id="consoleLog">
      <span style={{color: '#00FBFF'}}>console</span>
      <span style={{color:'white'}}>.</span>
      <span style={{color: '#FFDD00'}}>log</span>
      <span style={{color:'#FFDD00'}}>(</span>
      <span style={{color: '#C45E11', fontSize:"5vh"}}><br/>"Hello world,<br/> eu sou Gabriel Matias"<br/></span>
      <span style={{color:'#FFDD00'}}>)</span></h1>

      <div id="redesSociais">
        <a href="https://github.com/GabrielMFC"><img src={GitHub}></img></a>
        <a href=""><img src={Instagram}></img></a>
        <p style={{color: "rgb(107, 107, 107)", fontWeight: "bold"}}>ggezcom991gh@gmail.com</p>
      </div>
      <div id="div1">
        <div id="basicPrograming">
          <img id="js" src={Js}></img>
          <img src={Html}></img>
          <img src={Css}></img>
        </div>
        <div><img src={react}></img></div>
        <div id="php"><img src={Php}></img>
        <p>Em breve</p>
        </div>
      </div>
      <Projects/>
      </header>
    </div>
  );
}
export default App;