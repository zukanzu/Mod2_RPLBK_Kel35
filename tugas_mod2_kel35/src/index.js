import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CardList from "./components/CardList";
import Quotes from "./components/Quotes";
import quimage from "./assets/images/tailwind.png";
const quotes="Hati tetap bahagia, walaupun praktikum belum tatap muka :)";
const students = [
  {nama :'Dzakwan',nim:'211201181300xx',kelompok:'35',image:'https://randomuser.me/api/portraits/men/23.jpg'},
  {nama :'Diego',nim:'211201181301xx',kelompok:'35',image: 'https://randomuser.me/api/portraits/men/65.jpg'},
  {nama :'Kanzu',nim:'211201181200xx',kelompok:'35',image: 'https://randomuser.me/api/portraits/men/66.jpg'},
  {nama :'Khoiron',nim:'211201181201xx',kelompok:'35',image: 'https://randomuser.me/api/portraits/men/67.jpg'},
  ]

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div style={{display:'flex', flex:1,flexDirection:'row'}}>
    {students.map((item,index)=>(
  <CardList id={index} name={item.nama} nim={item.nim} kelompok={item.kelompok} image={item.image} />
  ))
  }
  </div>
    <Quotes author="Kelompok 35" quotes={quotes} quimage={quimage} />
  </React.StrictMode>,
  document.getElementById("root")
);