

import './App.css'
import Card from './components/Card.jsx'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/image3.jpg'

function App() {
  function handleRedirect(){
    window.location.href="https://www.google.com"
}

function handleRedirect2(){
    window.location.href="https://www.twitter.com"
}
  return (
    <div>
      <Card
     Img={img1}
     nbr="1"
     link={handleRedirect}
      
      
      />
      <Card
      Img={img2}
      nbr="2"
      link={handleRedirect2}
       
      
      />
      <Card
       nbr="3"
       Img={img3}
       
      
      />
    </div>
  )
}

export default App
