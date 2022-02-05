import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../Photos/error404.png';
const Error = `
    #button{
        position: relative;
        width: 200px;
        margin: 0 auto;
        // border: 2px solid black;
        
    }
    #button button{
        
        padding: 5px;
        border: 2px dashed red;
        border-radius: 20px;
        font-size: 20px;
    }
    .link{
        text-decoration: none;
    }
    body{
        background-image: url(${background});     
        background-size: 100%;
    }
`

const NotFound = () => (
  <div>
    <style>
        {Error}
    </style>
    <div id="button">
    <button>
        <Link className="link" to="/">Inapoi la pagina principala</Link>
    </button>
    </div>
    
  </div>
);

export default NotFound;