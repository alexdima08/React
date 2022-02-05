import React,{useState} from 'react';
import Input from '../../Components/InputComponent';
import background from  "../../Photos/ImagineFundal.jpg";
import {Link} from 'react-router-dom';
import firebase from '../../Configurare/config';
import 'firebase/compat/firestore';


const ref = firebase.firestore().collection("Users")
const RegisterForm = () => {
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
        // box-shadow: 5px 5px 8px red, 10px 10px 8px yellow, 15px 15px 8px blue;
        box-shadow: 0 0 50px #000;
      }
      .register
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
      .register .linkbuton{
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
      body{
        background-image: url(${background});
      }
      h1{
        padding: 20px;
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
  `
  // const SignUp = () => {
  //   const email = document.getElementById("email") as HTMLInputElement;
  //   const password = document.getElementById("password") as HTMLInputElement;
  //   const username = document.getElementById("username") as HTMLInputElement;
  //   alert(email!.value+" "+password!.value+" "+username!.value+"")
  //   firebase.firestore().collection("Users").add(
  //   {
  //       email: email.value, 
  //       password: password.value, 
  //       username: username.value,
  //   }).then(() => alert('Account created!'))
  // } 
      
      var [username,setusername] = useState("")
      var[email,setemail] = useState("")
      var [password,setpassword] = useState("")
      function createDoc(username: string,email: string,password: string){
        // alert(username+email+password)
        ref.doc().set({username,email,password}).catch((err) => {
          alert(err)
          console.error(err);
        })
        alert("Ai creat contul, acum te poti loga :D")
      }
  return (
    <><style>
      {x}
    </style>
    <form>
        <h1>Sign up</h1>
        <label id="label">Username</label>
        <input type="text" id="username" placeholder="username" onChange={(e)=> setusername(e.target.value)} />
        <label id="label" >Email</label>
        <input type="text" id="email" placeholder="email" onChange={(e)=> setemail(e.target.value)} />
        <label id="label">Password</label>
        <input type="password" id="password" placeholder="password" onChange={(e)=> setpassword(e.target.value)} />

        <button type="button" className="register" onClick = {()=>{
          createDoc(username,email,password)
          const x = document.getElementById("username")! as HTMLInputElement;
          username = x.value = "";
          const y = document.getElementById("password")! as HTMLInputElement;
          password = y.value = "";
          const z = document.getElementById("email")! as HTMLInputElement;
          email = z.value = "";
        }}>Sign me up!</button>
        <button className="register"> <Link className="linkbuton"to="/signin"> Ai deja cont?Apasa aici</Link></button>
      </form></>
  );
};

export default RegisterForm;

{/* <Input id="username" placeholder={'Username'} />
<Input id="email" placeholder={'Email address'} />
 <Input id="password" placeholder={'Password'} type={'password'} /> */}