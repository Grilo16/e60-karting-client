import { useContext, useEffect} from "react";
import { AppContext } from "../../App";
import SubmitButton from "../../components/formComponents/SubmitButton";
import ListDisplay from "../../components/ListDisplayComponents/ListDisplay";
import { addDriverToRace } from "../../repositories/raceDriverRepo";
import { getAllRaces } from "../../repositories/raceRepo";
import { ListContainerDiv } from "./DisplayAllDrivers";

const DisplayAllRaces = ({triggerUpdate}) => {

    const {state, dispatch} = useContext(AppContext)
 
    useEffect(()=>{

        getAllRaces().then((allRaces)=>{
           
            dispatch({type: "LoadAllRaces", allRaces: allRaces})
        })

    },[])


    const handleSignUp = (raceId) => {
        addDriverToRace(state.selectedDriver.id, raceId)
    };


    const data = state.allRaces.filter((race)=>{
            const {raceDate, ...rest} = race
            const date = new Date(raceDate).getTime()
            console.log(date)
            const time = Date.now()
            console.log(time)
            return date > time
    }).map((race) => {
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