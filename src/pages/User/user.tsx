import React from 'react';
import {Link,Navigate} from 'react-router-dom';
import firebase from '../../Configurare/config';
import 'firebase/compat/firestore';

var gbArray: any[] = []
const getAllQuestions = async () => {
  const events =  await firebase.firestore().collection('Questions').get().then((allUsers) => {   
      allUsers.forEach((user) => {
          gbArray.push({...user.data() }) // pune toti userii intr un dictionar
      })
  })
}
getAllQuestions();
console.log(gbArray)
var cnt = 0
const events= ()=>  {
    const quizstart = document.getElementById("zonaquizz") as HTMLDivElement
    firebase.firestore().collection('Questions').get().then((allUsers) => {   allUsers.forEach((user) => {
           
          let ul = document.createElement("ul")
          let li = document.createElement("li");
          let QuestionName = document.createElement("p");
          let a = document.createElement("input");
          a.type ="radio"
          a.name=cnt.toString()
          a.id = "1"
          let Answer1 = document.createElement("label");
          let b = document.createElement("input");
          b.type ="radio"
          b.name=cnt.toString()
          b.id = "2"
          let Answer2 = document.createElement("label");
          let c = document.createElement("input");
          c.type ="radio"
          c.name=cnt.toString()
          c.id = "3"
          let Answer3 = document.createElement("label");
          let d = document.createElement("input");
          d.type ="radio"
          d.name=cnt.toString()
          d.id = "4"
          let Answer4 = document.createElement("label");
          let AnswerButton = document.createElement("button");
          AnswerButton.type ="button"
          AnswerButton.id = "check"
          AnswerButton.textContent = "Confirma"
        //   let Answer1 = document.createElement("input");
        //   Answer1.type ="radio"
          
          li.setAttribute('data-id',user.id);
          const x = user.data()!
          QuestionName.textContent = x.QuestionName;
          Answer1.textContent = x.Answer1;
          Answer2.textContent = x.Answer2;
          Answer3.textContent = x.Answer3;
          Answer4.textContent = x.Answer4;

          ul.appendChild(li);
          li.appendChild(QuestionName);
          li.appendChild(a);
          li.appendChild(Answer1);
          li.appendChild(b);
          li.appendChild(Answer2);
          li.appendChild(c);
          li.appendChild(Answer3);
          li.appendChild(d);
          li.appendChild(Answer4);
          li.appendChild(AnswerButton);

          quizstart?.appendChild(li);
          cnt +=1 
          AnswerButton.onclick = () =>{
            let ConfirmSign = document.createElement("label")
            li.appendChild(ConfirmSign);
            if(a.checked)
            {
              let findedQuestion = gbArray.find(user => user.QuestionName === QuestionName.textContent && user.CorrectAnswer === a.id)
              console.log(findedQuestion)
              if (findedQuestion !== undefined)
              {
                  ConfirmSign.textContent = "Raspuns Corect"
              } 
              else {ConfirmSign.textContent = "Raspuns Gresit"}
            }
            if(b.checked)
            {
              let findedQuestion = gbArray.find(user => user.QuestionName === QuestionName.textContent && user.CorrectAnswer === b.id)
              if (findedQuestion !== undefined)
              {
                  ConfirmSign.textContent = "Raspuns Corect"
              } 
              else {ConfirmSign.textContent = "Raspuns Gresit"}
            }
            if(c.checked)
            {
              let findedQuestion = gbArray.find(user => user.QuestionName === QuestionName.textContent && user.CorrectAnswer === c.id)
              if (findedQuestion !== undefined)
              {
                  ConfirmSign.textContent = "Raspuns Corect"
              } 
              else {ConfirmSign.textContent = "Raspuns Gresit"}
            }
            if(d.checked)
            {
              let findedQuestion = gbArray.find(user => user.QuestionName === QuestionName.textContent && user.CorrectAnswer === d.id)
              if (findedQuestion !== undefined)
              {
                  ConfirmSign.textContent = "Raspuns Corect"
              } 
              else {ConfirmSign.textContent = "Raspuns Gresit"}
            }
            AnswerButton.disabled = true;
        }

        })
    })}

const UserPage = () => {
    const x = JSON.parse(sessionStorage.getItem("loggedUser")!)
    const css=`
        nav{
            display: flex;
            justify-content: space-evenly;
            background-color: #cccccc;
        }
        #dateuser{
            height: 20vh;
            width: 100%;
            background-color: blue;
            display: flex;
        }
        #zonaquizz{
            height: 80vh;
            width: 100%;
            background-color: #807f00;
            position: relative;
            display: flex;
            align-items: center;
            flex-direction: column;
        }
        h3{
            position: relative;
            color: turquoise;
            margin: auto;
            font-size: 35px;
        }
        :root{
            overflow: hidden;
        }
        .deconectare
        {
            font-size: 20px;
            text-decoration: none;
            border-radius : 15px;
            color : red;
            padding: 10px;
            cursor: pointer;
        }
        .deconectare .link{
            text-decoration: none;
        }
        li{
            width: 650px;
            style-list: none;
        }
        #check{
            font-size: 20px;
            text-decoration: none;
            border-radius : 15px;
            color : red;
            cursor: pointer;
        }
    `
    // const ref = firebase.firestore().collection("Questions")
    

    // function QuizMaker(doc: any) {
    //     let li = document.createElement("li");
    //     let QuestionName = document.createElement("p");
    //     let Answer1 = document.createElement("button");
    //     let Answer2 = document.createElement("button");
    //     let Answer3 = document.createElement("button");
    //     let Answer4 = document.createElement("button");

    //     li.setAttribute('data-id',doc.id);
    //     const x = doc.data()
    //     QuestionName.textContent = x.QuestionName;
    //     Answer1.textContent = x.Answer1;
    //     Answer2.textContent = x.Answer2;
    //     Answer3.textContent = x.Answer3;
    //     Answer4.textContent = x.Answer4;

    //     li.appendChild(QuestionName);
    //     li.appendChild(Answer1);
    //     li.appendChild(Answer2);
    //     li.appendChild(Answer3);
    //     li.appendChild(Answer4);

    //     quizstart.appendChild(li);
    // }
    
    // ref.get().then((snapshot) =>{
    //     snapshot.docs.forEach(doc =>{
    //         QuizMaker(doc);
    //     })
    // })
    function clearBox()
        {
            document.getElementById("zonaquizz")!.innerHTML = "";
        }
    return(
        <>
        <style>
            {css}
        </style>
        <nav>
            <button className="deconectare" onClick={events}> 
                Genereaza un Quizz
            </button>
            <button className="deconectare" onClick={clearBox}> 
                Sterge Chestionarul
            </button>
            <button className="deconectare" onClick={()=>{
                sessionStorage.removeItem("loggedUser")
                alert("V-ati deconectat de pe site")
                }}>
                <Link className="link" to="/signin"> Deconectare</Link>
            </button>
        </nav>
        <div id="dateuser">
            <h3>Bine ai venit , {x.hasOwnProperty("loggedName") ? x.loggedName: <Navigate to="*"/>}</h3>
        </div>

        <div id="zonaquizz">

        </div>
        </>
    );
};

export default UserPage;