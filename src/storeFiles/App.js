//import logo from './logo.svg';
//import './App.css';
//import React from "react"
//import { UserProvider } from "./UserContext";
//import { useState } from "react";
//import {Routes, Route} from "react-router-dom"
//import LogInOutButton from './LogInOutButton';
//import Weekend from "./Weekend"
//import Weekdays from "./Weekdays"
//import ErrorComp from "./ErrorComp"


/*function Header(props) {
  return (
    <h1>Hello welcome to react {props.message}</h1>
  )
}

function App() {
  return (
    <Header message="and goodbye" />
  );
}*/

/*function App() {
  const days = new Date().getDay()
  const weekday = ((days >= 1) && (days <= 5))
  const weekend = ((days >= 6) && (days <= 7))
    const val = prompt("pls enter a value")
    if (val == weekday) {
      return <Weekdays message="Pls get it done"/>
    }
    else if(val == weekend) {
    return <Weekend what="pls get some rest"/>
    }
    else {
      return <ErrorComp talk="there is no day like this"/>
    }
}
*/ //not yet done with the bug above


/*function App() {
  return (
    <LogInOutButton />
  )
}*/
/*
import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value))
  	// Add the code for the minus function 
  };
 
  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
    // Add the code for the plus function 
  }; 
 
  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value))
    // Add the code for the divide function 
  };
 
  function resetInput(e) { 
    e.preventDefault();
    setResult((result) => Number(inputRef.current.value))
    // Add the code for the resetInput function 
  }; 
 
  function resetResult(e) {
    e.preventDefault();
    setResult((result) => Number(resultRef.current.value))
  	// Add the code for the resetResult function 
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        <button onClick={minus}>subtract</button> 
        <button onClick={times}>multiply</button> 
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button> 
        <button onClick={resetResult}>reset result</button> 
      </form> 
    </div> 
  ); 
} 
 
export default App; 
*/

/*const data = [
  {
      id : 1,
      title : "permission",
      description : "The best permission in time",
      Image : "./http://image.png",
      price : "$23.56",
  },
  {
      id : 2,
      title : "documentation",
      description : "The best documentation over time",
      Image : "./http://image.png",
      price : "$45.90",
  },
  {
      id : 3,
      title : "Impactation",
      description : "The best impartation in the world",
      Image : "./http://image.png",
      price : "$49.87",
  },
]

const topDessert = data.map(dessert => {
  return {
      content:`${dessert.title} - ${dessert.description}`,
      price: dessert.price,
  }
})

export default function App() {
  console.log(topDessert);
  return <h1>Examine the console output</h1>
}
*/

/*const data = [
  {
      id : 1,
      title : "permission",
      description : "The best permission in time",
      Image : "./http://image.png",
      price : "$23.56",
  },
  {
      id : 2,
      title : "documentation",
      description : "The best documentation over time",
      Image : "./http://image.png",
      price : "$45.90",
  },
  {
      id : 3,
      title : "Impactation",
      description : "The best impartation in the world",
      Image : "./http://image.png",
      price : "$49.87",
  },
]

const listItem = data.map(item => {
  const textItem = `${item.title} - ${item.description} - ${item.price}`
  return <li>{textItem}</li>
})

export default function App() {
  return (
    <div>
      <ul>
        <li>{listItem}</li>
      </ul>
    </div>
  )
}*/
// The code of the Dessert List Exercise is shown below
/*
import DessertsList from "./DessertsList";

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  return (
    <div className="App">
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={listItems} />
    </div>
  );
}
*/
/*
function Todo(props) {
  <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <input type="number" placeholder="Type a number"/>
    </td>
    <td>
      <label>{props.createdAt}</label>
    </td>
  </tr>;
} 

function App() {
  const [todos, setTodos] = useState([
    {
      id : "todo1",
      createdAt : "18:00",
    },
    {
      id : "todo2",
      createdAt : "20:30",
    },
  ])

  const reverseOrder = () => {
    setTodos([...todos].reverse())
  }

  return (
    <div>
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <tbody>
          {todos.map((todo, index) => {
          return  <Todo key={index} id = {todo.id} createdAt = {todo.createdAt} />
          })}
        </tbody>
      </table>
    </div>
  )
}
*/

//creating a  form component in React
/*
function App(){
  const [name, setName] = useState("")
  function HandleChange(e){
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()// to prevent default behaviour
    setName('')
    console.log("form Submitted")
  }
  return (
<div className="App">
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div className="Field">
          <label htmlFor="name">Name:</label>
          <input 
          id="name"
          onChange={HandleChange} 
          type="text"
          placeholder="name" 
          name="name"/>
        </div>
        <button disabled={!name} type="submit">Submit</button>
       //  The disable attribute means if a name is not provided, the submit button will not show up }
      </fieldset>
    </form>
    </div>
  )
}
*/

/*
//Feedback form in React
function App() {
  const [score, setScore] = useState("10")
  const handleChange = (e) => {
    setScore(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
    if(Number(score) < 5 && Number.length <= 10){
      alert("please provide a comment explaining why the experience was poor")
      return;
    }
    console.log("Form submitted")
    setComment("")
    setScore("10")
  }
  const [comment, setComment] = useState("")
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h1>Feedback Form</h1>
          <div className="Field">
            <label>Score: {score}*</label>
            <input type="range" 
            min="0" 
            max="10"
            value={score}
            onChange={handleChange}
            />
            </div>
            <div>
            <label>Comment:</label>
            <textarea
            type="text"
            placeholder={comment}
            onChange={e => setComment(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  )
}
*/


/*
//Exercise Create a registration for

import './App.css'; 
import {useState} from "react"; 
//import {validateEmail} from "../src/utils"; 
 
const PasswordErrorMessage = () => { 
 return ( 
   <p className="FieldError">Password should have at least 8 characters</p> 
 ); 
}; 
 
function App() { 
 const [firstName, setFirstName] = useState(""); 
 const [lastName, setLastName] = useState(""); 
 const [email, setEmail] = useState(""); 
 const [password, setPassword] = useState({ 
   value: "", 
   isTouched: false, 
 }); 
 const [role, setRole] = useState("role"); 

 const getIsFormValid = () => { 
   return ( 
     firstName && 
     validateEmail(email) && 
     password.value.length >= 8 && 
     role !== "role" 
   ); 
 }; 
 
 const clearForm = () => { 
   setFirstName(""); 
   setLastName(""); 
   setEmail(""); 
   setPassword({ 
     value: "", 
     isTouched: false, 
   }); 
   setRole("role"); 
 }; 
 
 const handleSubmit = (e) => { 
   e.preventDefault(); 
   alert("Account created!"); 
   clearForm(); 
 }; 
 
 return ( 
   <div className="App"> 
     <form onSubmit={handleSubmit}> 
       <fieldset> 
         <h2>Sign Up</h2> 
         <div className="Field"> 
           <label> 
             First name <sup>*</sup> 
           </label> 
           <input 
             value={firstName} 
             onChange={(e) => { 
               setFirstName(e.target.value); 
             }} 
             placeholder="First name" 
           /> 
         </div> 
         <div className="Field"> 
           <label>Last name</label> 
           <input 
             value={lastName} 
             onChange={(e) => { 
               setLastName(e.target.value); 
             }} 
             placeholder="Last name" 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Email address <sup>*</sup> 
           </label> 
           <input 
             value={email} 
             onChange={(e) => { 
               setEmail(e.target.value); 
             }} 
             placeholder="Email address" 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Password <sup>*</sup> 
           </label> 
           <input 
             value={password.value} 
             type="password" 
             onChange={(e) => { 
               setPassword({ ...password, value: e.target.value }); 
             }} 
             onBlur={() => { 
               setPassword({ ...password, isTouched: true }); 
             }} 
             placeholder="Password" 
           /> 
           {password.isTouched && password.value.length < 8 ? ( 
             <PasswordErrorMessage /> 
           ) : null} 
         </div> 
         <div className="Field"> 
           <label> 
             Role <sup>*</sup> 
           </label> 
           <select value={role} onChange={(e) => setRole(e.target.value)}> 
             <option value="role">Role</option> 
             <option value="individual">Individual</option> 
             <option value="business">Business</option> 
           </select> 
         </div> 
         <button type="submit" disabled={!getIsFormValid()}> 
           Create account 
         </button> 
       </fieldset> 
     </form> 
   </div> 
 ); 
} 
*/
/*
//Context Api in Action

import { UserProvider } from "./UserContext";
const LoggedInUse = () => {
  const [user] = useUser()
  return (
    <p>
      Hello: <span className="username">{user.name}</span>
    </p>
  );
};

const Header = () => {
  return (
    <header>
      <h2>Blog User</h2>
      <LoggedInUse />
    </header>
  );
};

const Page = () => {
  const [user] = useUser();
  return (
    <div>
      <h2>What is Lorem Ipsum</h2>
      <p>
        Lorem
      </p>
      <p>Written by {user.name}</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Page />
    </div>
  )
}

function Root(){
  return <UserProvider><App/></UserProvider>
}
export default Root;
*/
/*
function GoalForm(props){
 const [formData, setFormData] = React.useState({
  goal: "",
  by: "",
})

 function changeHandler(e) {
  setFormData({...formData, [e.target.name]: e.target.value})
 }

 function submitHandler(e) {
  e.preventDefault();
  props.onAdd(formData);
  setFormData({goal: "", by: ""});
 };

 return (
  <>
  <h1>My little Lesson Goal</h1>
  <form onSubmit={submitHandler}>
  <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler} />
  <input type="text" name="by" placeholder="By..." value={formData.by} onChange={changeHandler} />
  <button>Submit Goal</button>
  </form>
  </>
 )
}

function ListOfGoal(props){
  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>My goal is to {g.goal}, by {g.by} </span>
        </li>
      ))}
    </ul>
  )
}

export default function App() {
  const [allGoals, updateAllGoals] = React.useState([])

  function addGoal(goal) {
    updateAllGoals([...allGoals, goal]);
  }

  return(
  <div className="App">
    <GoalForm onAdd={addGoal} />
    <ListOfGoal allGoals={allGoals} />
  </div>
  )
}*/

/*
import { useState } from "react";

export default function App() {
  const [giftCard, setGiftCard] = useState(
    {
        firstName: "Jennifer",
        lastName: "Smith",
        text: "Free dinner for 4 guests",
        valid: true,
        instructions: "To use your coupon, click the button below.",
    }
  );

  function spendGiftCard() {
    setGiftCard(prevState => {
        return {
          ...prevState,
          text: "Your coupon has been used.",
          valid: false,
          instructions: "Please visit our restaurant to renew your gift card.",
        }
    });
  }

  return (
    <div style={{padding: '40px'}}>
      <h1>
        Gift Card Page
      </h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>
        {giftCard.text}
      </h3>
      <p>
        {giftCard.instructions}
      </p>
      {
        giftCard.valid && (
          <button onChange={spendGiftCard}>
            Spend Gift Card
          </button>
        )
      }
    </div>
  );
}
*/
/*
//using the useEffect hook
export default function App() {
  const [toggle, setToggle] = React.useState(false)

  const clickHandler = () => {
    setToggle(!toggle)
  }

  React.useEffect(() =>{
    document.title = toggle ? "welcome to little lemon" : "Using the useEffect hook"
  }, [toggle])  

  return (
    <div>
      <h1>Using the useEffect Hook</h1>
      <button onClick={clickHandler}>Toggle Message</button>
      {toggle && <h2>welcome to Little Lemon</h2>}
    </div>
  )
}*/
/*
//Fetching Data, Putting it altogether
import { useState, useEffect } from "react";

export default function App(){
  const [user, setUser] = React.useState()

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
    .then(response => response.json)
    .then(data => setUser(data))
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  return Object.keys(user).length > 0 ? (
    <div>
      <h1>Data Returned</h1>
      <h2>First Name: {user.results[0].name.first} </h2>
      <h2>Last Name: {user.results[0].name.last} </h2>
    </div>
  )
  : (
    <h1>Data pending...</h1>
  )
}
*/

/*
//using useReducer hooks
import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "buy_ingredient") return {money : state.money - 10}
  if (action.type === "sell_a_meal") return {money : state.money + 10}
  if (action.type === "celebrity_visit") return{money : state.money + 5000}
  return state;
}

export default function App() {
  const initialState = {money: 100}
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Wallet: {state.money}</h1>
      <div>
      <button onClick={() => dispatch({type: "buy_ingredient"})}>Shopping for veggie</button>
      <button onClick={() => dispatch({type: "sell_a_meal"})}>Serve a meal to the customer</button>
      <button onClick={() => dispatch({type : "celebrity_visit"})}>Celebrity visit</button>
      </div>
    </div>
  )
}
*/
/*
//Using useRef to access underlying Dom
import { useRef } from "react";
export default function App() {
  const formInputRef = React.useRef(null)
  const focusButton = () => {
    formInputRef.current.focus();
  }
  return (
    <div>
      <h1>Using useRef to access underlying Dom</h1>
      <input ref={formInputRef} type="text" />
      <button onClick={focusButton}>
        focus  input
      </button>
    </div>
  )
}*/


/*
//creating your own custom hook to create and update user working days
import { useState, useEffect, useRef } from "react";
export default function App() {
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday")
    } else if (day === "Tuesday") {
      setDay("Wednesday")
    } else if (day === "Wednesday") {
      setDay("Thursday")
    } else if (day === "Thursday") {
      setDay("Friday")
    } else if (day === "Friday") {
      setDay("Monday")
    }
  }
  return (
    <div style={{padding: "40px"}}>
      <h1>
        Today is: {day}<br />
        {
          prevDay && (
            <span>Previous work day was: {prevDay}</span>
          )
        }
      </h1>
      <button onClick={getNextDay}>
        Get next day
      </button>
    </div>
  );
}
function usePrevious(val) {
  const ref = useRef();
  useEffect(() => {
    ref.current = val;
  }, [val]);
  return ref.current;
}*/
/*
const button = ({children, backgroundColor}) => {
  return <button style={{backgroundColor}}> {children}</button>
};

const Alert = ({children}) => {
 return (
 <>
  <div className="Overlay" />
  <div className="Alert">{children}</div>
  </>
 )
}

const deleteButton = () => {
  <button style={backgroundColor="red"}>Delete</button>
}
export default function App(){
  return (
    <div className="App">
      <header>Little Lemon Restaurant</header>
      <Alert>
        <h1>Delete Account</h1>
        <p>Are you sure you want to proceed with the deletion of account</p>
        <deleteButton />
      </Alert>
    </div>
  )
}**/


/*
import React from "react"

const Row = ({children, spacing}) => {

  const childStyle = {
    marginLeft: `${spacing}px`
  };

  return (
    <div className="Row">
    {React.Children.map(children, [child, index] => {
      return React.cloneElement(child, {
        style: {
          ...child.props.style
          ...{index > 0 ? childStyle : {}}
        }
      })
    })}
    </div>
  )
}

export default function LiveOrders() {
  return (
    <div className="App">
      <Row spacing={32}>
        <p>Pizza Magarita</p>
        <p>2</p>
        <p>38$</p>
        <p>18:30</p>
        <p>John</p>
      </Row>
    </div>
  )
} */
/*
//index.js file
//import * as React from "react";
import { useState } from "react";
export const RadioGroup = ({ onChange, selected, children }) => { 
 const RadioOptions = React.Children.map(children, (child) => { 
   return React.cloneElement(child, { 
     onChange, 
     checked: child.props.value === selected, 
   }); 
 }); 
 return <div className="RadioGroup">{RadioOptions}</div>; 
}; 
 
export const RadioOption = ({ value, checked, onChange, children }) => { 
 return ( 
   <div className="RadioOption"> 
     <input 
       id={value} 
       type="radio" 
       name={value} 
       value={value} 
       checked={checked} 
       onChange={(e) => { 
         onChange(e.target.value); 
       }} 
     /> 
     <label htmlFor={value}>{children}</label> 
   </div> 
 ); 
}; 

//App.js file

//import "./App.css";
//import { RadioGroup, RadioOption } from "./Radio";


function App() {
  const [selected, setSelected] = useState("");
  return (
    <div className="App">
      <h2>How did you hear about Little Lemon?</h2>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Submit</button>
    </div>
  );
}

export default App;
*/


/*
//using Spread operator in React

const Button = ({type, children, ...buttonProps}) => {
  const className = type === "primary" ? "primaryButton" : "secondaryButton";
  return ( 
    <button className={`button ${className}`} {...buttonProps}>
      {children}
    </button>
  )
}

const LoginButton = ({type, children, ...buttonProps}) => {
  return (
    <Button 
    type="seconday"
    {...buttonProps}
    onClick={() => {
      alert("logging in")
    }}
    >
      {children}
    </Button>
  )
}

function App() {
  return (
    <div>
      <header>Little Lemon Restaurant</header>
      <Button  
      type="primary"
      onClick={() => alert("sign in")}>
        Sign up
      </Button>
      <LoginButton type="secondary"
      onClick={() => alert("logging in")}>
        login
      </LoginButton>
    </div>
  )
}
*/
/*
//Create a HIGHER ORDER COMPONENT for cursor position

import { useState, useEffect } from "react";
const withMousePosition = (wrappedComponent) => {
  return (props) => {
    const [MousePosition, setMousePosition] = useState({
      x : 0,
      y : 0,
    })

    useEffect(() => {
      const handleMousePositionChange = (e) => {
        x : e.clientX,
        y : e.clientY,
      }
      window.addEventListener("mousemove", handleMousePositionChange)

      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange)
      }
    }, [])
    return (
      <wrappedComponent {...props} MousePosition={MousePosition}/>
    )
  }
}

const PanelMouseLogger = ({MousePosition}) => {
  if (!MousePosition) {
    return null
  }
  return (
    <div>
      <p>Mouse Position</p>
      <div>
        <span>x: {MousePosition.x}</span>
        <span>y: {MousePosition.y}</span>
      </div>
    </div>
  )
}

const PointMouseLogger = ({MousePosition}) => {
  if (!MousePosition) {
    return null
  }
  return (
    <p>
      {{MousePosition.x}, {MousePosition.y}}
    </p>
  )
}

const PanelMouseTracker = withMousePosition(PanelMouseLogger)
const PointMouseTracker = withMousePosition(PointMouseLogger)

export default function App(){
  return (
    <div>
      <header>Little Lemon Restaurant</header>
      <PanelMouseTracker />
      <PointMouseTracker />
    </div>
  )
}
*/

/*
//Using RENDER PROPS
import React, {useState, useEffect} from "react";
const DataFetcher = ({render, url}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (url.include("dessert")) {
      setData('cake', 'ice cream', 'pie', 'chocolate')
    }
    else {
      setData('water', 'soda', 'juice')
    }
  }, [])
  return render(data)
}

const DessertCount = () => {
  return (
    <DataFetcher
    url="https://littlelemon/desserts"
    render={(data) => <p>{data.length} desserts</p>}
    />
  )
}

const DrinksCount = () => {
  return (
    <DataFetcher
    url="https://littlelemon/drinks"
    render={(data) => <h3>{data.length} drinks</h3>}
    />
  )
}

export default function App(){
  return(
    <div>
      <header>Little Lemon Restaurant</header>
      <DessertCount />
      <DrinksCount />
    </div>
  )
}
*/
//what HOC does Render Props do the same thing with same code
/*
import React, { useEffect, useState } from "react";
const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  return render({ mousePosition });
};

const PanelMouseLogger = () => {
  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <MousePosition
        render={({ mousePosition }) => (
          <div className="Row">
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
          </div>
        )}
      />
    </div>
  );
};

const PointMouseLogger = () => {
  return (
    <MousePosition
      render={({ mousePosition }) => (
        <p>
          ({mousePosition.x}, {mousePosition.y})
        </p>
      )}
    />
  );
};

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default App;
*/

import { ChakraProvider } from "@chakra-ui/react";
import {AlertProvider} from "./context/alertContext"
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
export default function App() {
  return (
     <ChakraProvider>
        <AlertProvider>
           <main>
              <Header />
              <LandingSection />
           </main>
        </AlertProvider>
     </ChakraProvider>
  )
  }