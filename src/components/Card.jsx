import Button from "./Button"
import '../css/Card.css'
import { useState } from "react"
const Card=({Img,nbr,link})=>{

    const [color, setColor] = useState('white');
    function changeColor(){
       if(color=='white'){    setColor('yellow');}
        else{setColor('white')}
    
        console.log("hello");
    }
  
    
    return(
<div className="container">
<div className="upper" style={{ backgroundColor: color }}>
  <div className="right"><img src={Img}/>  </div>
  <div className="left"> 
<h2>{nbr}</h2>
<h3>hello</h3>
<p>What happens when the older pcs are given the modern upgrades</p>
  </div>   
</div>
<div className="lower">
    <Button 
    name="color"
  hanldeClick={changeColor}
    />

    
    <Button
    name="read more"
    hanldeClick={link}
    />
</div>
</div>
    )
}
export default Card