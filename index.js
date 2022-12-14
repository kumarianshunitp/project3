//  lectt23 props in reactjs and 25 and 26
 import React from "react";
import  ReactDOM  from "react-dom";
import Card from "./Cards";
import "./index.css";
import Sdata from"./Sdata";
// function Card(props){
//   console.log(props)
//   return(
//     <>
// <div className="cards">
// <div className="card">
// <img src={props.imgsrc} alt="mypic" className="card_img"/>
// <div className="card_info">
// <span className="card _category">{props.title}</span>
// <h3 className="card_title">{props.sname}</h3>
// <a href={props.link} target="_blank">
//   <button>Watch Now</button>
// </a>
// </div>
// </div>
// </div>

// </>
//   )
// }
function ncard(val){
return(
  <Card 
imgsrc={val.imgsrc}
  title={val.title}
  sname={val.sname}
  link={val.link}
  />
);
}

ReactDOM.render(
<>
<h1  className="heading_style">List of top 5 netflix series in 2022</h1>
{/* <Card 
imgsrc={Sdata[0].imgsrc}
  title={Sdata[0].title}
  sname={Sdata[0].sname}
  link={Sdata[0].link}
/> */}
{/* <Card 
imgsrc={Sdata[1].imgsrc}
  title={Sdata[1].title}
  sname={Sdata[1].sname}
  link={Sdata[1].link}
  />
<Card */}
{/* imgsrc={Sdata[2].imgsrc}
title={Sdata[2].title}
sname={Sdata[2].sname}
link={Sdata[2].link}
/> */}
  {/* <Card
   imgsrc={Sdata[3].imgsrc}
  title={Sdata[3].title}
  sname={Sdata[3].sname}
  link={Sdata[3].link}
/>
<Card
imgsrc={Sdata[4].imgsrc}
title={Sdata[4].title}
sname={Sdata[4].sname}
link={Sdata[4].link}
/> */}
{Sdata.map(ncard)};
</>,
document.getElementById("root")
);
