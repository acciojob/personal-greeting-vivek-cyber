import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";



ReactDOM.render(<App />, document.getElementById("root"));
document.getElementById("input").addEventListener("keyup",dis)

function dis(event)
{
  let d=document.getElementById("display")
  d.innerText="Hello "+event.target.value+"!"
}