import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import SubmitButton from "../../components/formComponents/SubmitButton";
import ListDisplay from "../../components/ListDisplayComponents/ListDisplay";
import { addDriverToRace } from "../../repositories/raceDriverRepo";
import { getAllRaces } from "../../repositories/raceRepo";
import { ListContainerDiv } from "./DisplayAllDrivers";

const DisplayAllRaces = ({triggerUpdate}) => {

    const {state, dispatch} = useContext(AppContext)
    const [races, setRaces] = useState([])

    useEffect(()=>{

        getAllRaces().then(setRaces)

    },[triggerUpdate])


    const handleSignUp = (raceId) => {
        console.log(raceId)
        console.log(state.selectedDriver.id)
        addDriverToRace(state.selectedDriver.id, raceId)
    };


    const data = races.map((race) => {
        const {id, raceDate, name, location, ...rest} = {...race}
        const date = new Date(raceDate)
        const raceObj = {id: id, raceDate: date.toUTCString(), name: name, location: location, signUp: <SubmitButton value={"signUp"} clickFunction={handleSignUp} target={id}/>}
        return raceObj
    })

    const columns = 2;
    const bgColor = "grey";
    const paddingRight = 3;
    

    const iconColumns = 1;
    const iconHeight = 100;
    const iconBgColor = "darkgrey";
  
    const keysToShow = null;


    return (
        <ListContainerDiv>

          <ListDisplay
            data={data}
            columns={columns}
            bgColor={bgColor}
            iconHeight={iconHeight}
            iconColumns={iconColumns}
            iconBgColor={iconBgColor}
            paddingRight={paddingRight}
            keysToShow={keysToShow}
            />
        </ListContainerDiv>
    )
};

export default DisplayAllRaces;