import Button from "./Button"
import '../css/Card.css'
import { useState,useEffect } from "react"
const Card=({Img,nbr,link})=>{

    const [color, setColor] = useState('white');
    function changeColor(){
       if(color=='white'){   
         setColor('yellow');}
        else{setColor('yellow')}// for here if we turn this white to yellow the useEffect will not console color is changed cz the color won't be changed but if we turn them into white of cz it will run the function console color is changed 
    
        console.log("hello");
    }
  useEffect(()=>{
console.log("color is changed")
  },[color]) 

    useEffect(()=>{
console.log("when is empty in array . is to track the function of console once on first load")
  },[])
    
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