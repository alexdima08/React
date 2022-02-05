import React,{useState,useEffect} from 'react';
import Input from '../../Components/InputComponent';
import background from  "../../Photos/ImagineFundal.jpg";
import {Link,Navigate,useNavigate} from 'react-router-dom';
import 'firebase/compat/firestore';
import firebase from "../../Configurare/config";

// firebase.initializeApp(firebaseConfig);
var vectordate: any[] = []
const getAllUsers = async () => {
  const events =  await firebase.firestore().collection('Users').get().then((allUsers) => {   
      allUsers.forEach((user) => {
          vectordate.push({...user.data() }) // pune toti userii intr un dictionar
      })
  })
}
getAllUsers();


const LoginForm = () => {
  const x =  `
      form
      {
        display: flex;
        flex-direction: column;
        background: transparent;
        border: 1px solid black;
        border-radius: 15px;
        align-items: center;
        width: 25%;
        margin: auto;
        vertical-align: 
        // box-shadow: 5px 5px 8px red, 10px 10px 8px yellow, 15px 15px 8px blue;
        box-shadow: 0 0 50px #000;
      }
      .signin
      {
        font-size: 30px;
        text-decoration: none;
        border-radius : 15px;
        color : red;
        margin-top: 30px;
        padding: 10px;
        width: 50% ;
        cursor: pointer;
      }
      .signin .linkbuton{
        text-decoration: none;
      }

      input
      {
        padding: 5px;
        outline: none;
        width: 80%;
        border: 2px dashed red;
        margin-top: 5px;
      }
      #label
      {
        margin-top: 40px;
        font-size: 25px;
        // margin-right: 200px;
        color: white;
        // float: left;
        align-self: flex-start;
        margin-left: 30px;
        // float: left;
        // width: 10em;
        // margin-right: 3em;
      }
      body{
        background-image: url(${background});
      }
      h1{
        padding: 20px;
      }
  `
  getAllUsers();
  var [ok,setOk] = useState(false);
  const Signin = async () => {
    const password = document.getElementById("password") as HTMLInputElement;
    const username = document.getElementById("username") as HTMLInputElement;
    
    let findedUser = vectordate.find(user => user.username === username.value && user.password === password.value)
        if (findedUser !== undefined)
        {
            sessionStorage.setItem('loggedUser', JSON.stringify({loggedId: findedUser.id, loggedName: findedUser.username}))
            setOk(true);
        } 
        else alert("Login failed. Probabil nu ai scris bine numele de utilizator sau parola")
    
      
  }
  var [username,setusername] = useState("")
  var [password,setpassword] = useState("")
  useEffect(() => {
    setTimeout(() =>{},1000)
  })
  return (
    
    <><style>
      {x}
    </style>
    {ok && <Navigate to="/user" />}
        <form>
          <h1>Log In</h1>
          <label id="label">Username</label>
          <input type="text" id="username" placeholder="username" onChange={(e)=> setusername(e.target.value)} /> 
          <label id="label">Password</label>
          <input type="password" id="password" placeholder="password" onChange={(e)=> setpassword(e.target.value)} />
          {/* <Input id="username" placeholder={'Username'} />
          <Input id="password" placeholder={'Password'} type={'password'} /> */}
          <button className="signin"  type='submit' onClick={Signin}>Login</button>
          <button className="signin"> <Link className="linkbuton" to="/registerpage"> Nu ai cont?Apasa aici</Link></button>
        </form>
      </>
  );
};

export default LoginForm;


function sleep(arg0: number) {
  throw new Error('Function not implemented.');
}

function timeout(delay: number) {
  return new Promise( res => setTimeout(res, delay) );
}
