import React from 'react';
import {Link} from "react-router-dom";
import background from  "../../Photos/ImagineFundal.jpg"

const stylewelcome = `
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@1,200&display=swap');
  .welcome{
    position: relative;
    top: 40vh;
    
  }
  h1{
    font-family: 'Source Sans 3';
    font-size: 40px;
    color: #546de5;
  }
  #h1
  {
    width: 72%;
    height: 8vh;
    background-color: #f3f4f8;
    border-radius: 30px;
    display:flex;
    align-items: center;
    text-align:center;
    position: relative;
    margin: 0 auto;
  }
  #div{
    position: relative;
    border: solid black 1px;
    border-radius: 20px;
    top: 50px;
    background-color: #FD7272;
    width: 30%;
    margin: auto;
    
  }
  #div .link
  {
    text-decoration: none;
    
  }
  #div .link p
  {
    text-align: center;
    font-size: 20px;
  }
  body{
    background-image: url(${background});
  }
`
const WelcomePage = () => {
  return( 
    <div className="welcome">
      <style>
        {stylewelcome}
      </style>
          <div id="h1">
            <h1>Bine ati venit la QuizTime, Apasati pe linkul de mai jos pentru a va loga</h1>
          </div>
          <div id="div">
            <Link to='/signin' className="link"> <p>Logheaza-te acum!</p></Link>
          </div>
        
      
    </div>
    );
};

export default WelcomePage;