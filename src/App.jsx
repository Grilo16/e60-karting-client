import { createContext, useReducer } from "react";
import {HashRouter as Router, Routes, Route, Link} from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserDashboard from "./pages/UserDashboard";
import styled from "styled-components"

export const AppContext = createContext(null)

const reducer = (state, action) => {
  switch(action.type){

      case "SelectDriver": 
        return {...state, selectedDriver: action.driver}

      case "LoadAllRaces": 
        return {...state, allRaces: action.allRaces}
  
      case "LoadDrivers": 
        return {...state, drivers: action.drivers}

      case "LoadMyRaces":
        return {...state, myRaces: action.myRaces}

      case "SelectRace": 
        return {...state, selectedRace: action.selectedRace}

      case "LoadRaceResults":
        return {...state, raceResults: action.raceResults}

      case "DisplayRaceResults":
        return {...state, displayRaceResults: action.bool}

      case "SetDashPage": 
        return {...state, dashPage: action.dashPage}
        
      default:
        return state
  }
}

function App() {

  const initialState = {
    selectedDriver : {},
    selectedRace: null,
    allRaces: [],
    drivers: [],
    myRaces: [],
    raceResults: [],
    displayRaceResults: false,
    dashPage: "upcomingRaces", 
    
  }


  const [state, dispatch] = useReducer(reducer, initialState)



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
