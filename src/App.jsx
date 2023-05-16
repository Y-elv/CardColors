

import './App.css'
import Card from './components/Card.jsx'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/image3.jpg'
import { useEffect,useState } from 'react'

function App() {
  function handleRedirect(){
    window.location.href="https://www.google.com"
}

function handleRedirect2(){
    window.location.href="https://www.twitter.com"
}
const [data,setData]=useState([])
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(dataResp => setData(dataResp))
},[])
  return (
    <div>
      {
        data.map((post,idx)=>{
          return(
            <div>
            {idx<2 ?( <Card
              key={idx}
              Img={img1}
              nbr={post.id}
              link={handleRedirect}
               
               
               />):""}
               </div>
           
          )
        })
      }
     
   
    </div>
  )
}

export default App
