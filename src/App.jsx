import { createContext, useEffect, useReducer, useState } from "react";
import DisplayAllDrivers from "./containers/ListContainers/DisplayAllDrivers";
import NewRaceForm from "./containers/formContainers/NewRaceForm";
import SignUpForm from "./containers/formContainers/SignUpForm";
import DisplayAllRaces from "./containers/ListContainers/DisplayAllRaces";
import {HashRouter as Router, Routes, Route, Link} from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserDashboard from "./pages/UserDashboard";
import styled from "styled-components"
import { getAllDrivers } from "./repositories/driverRepo";

export const AppContext = createContext(null)

const reducer = (state, action) => {
  switch(action.type){

      case "SelectDriver": 
        return {...state, selectedDriver: action.driver}
  
      case "LoadDrivers": 
        return {...state, drivers: action.drivers}

      case "SetDashPage": 
        return {...state, dashPage: action.dashPage}
        
      default:
        return state
  }
}

function App() {

  const initialState = {
    selectedDriver : {},
    drivers: [],
    dashPage: "upcomingRaces", 
  }


  const [state, dispatch] = useReducer(reducer, initialState)


  useEffect(()=>{
    getAllDrivers().then((drivers) => dispatch({type: "LoadDrivers", drivers}))
  },[])



  const [triggerUpdate, setTriggerUpdate] = useState(true)
  const [driver, setDriver] = useState({})

  return (
    <AppContext.Provider value={{state, dispatch}}>

    <Router>
      <StyledNav> 
      <nav>
        <Link to={"/"}>Home </Link>
        <Link to={"/dashboard"}>Dashboard </Link>
      </nav>
      </StyledNav>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/dashboard" element={<UserDashboard/>}/>
    </Routes>
    </Router>
    </AppContext.Provider>
    /* <hr />
    <h1>sup</h1>
    <SignUpForm setTriggerUpdate={setTriggerUpdate} triggerUpdate={triggerUpdate}/>
    <NewRaceForm setTriggerUpdate={setTriggerUpdate} triggerUpdate={triggerUpdate}/>
    <DisplayAllDrivers triggerUpdate={triggerUpdate} setDriver={setDriver}/>
    <DisplayAllRaces triggerUpdate={triggerUpdate}/> */

  );
}


const StyledNav = styled.nav`
background-color: lightGrey;
text-align: center;
`
export default App;
