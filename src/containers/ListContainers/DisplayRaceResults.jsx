import { useContext } from "react";
import { AppContext } from "../../App";
import styled from "styled-components"
import ListDisplay from "../../components/ListDisplayComponents/ListDisplay";
import SubmitButton from "../../components/formComponents/SubmitButton";

const DisplayRaceResults = ({raceId}) => {

    raceId = 1 

    const columns = 1;
    const bgColor = "grey";
    const paddingRight = 3;
    const iconColumns = 1;
    const iconHeight = 100;
    const iconBgColor = "darkgrey";
    const keysToShow = null;
  

    const {state, dispatch} = useContext(AppContext)

   

    let resultObj;
    if (state.raceResults.length > 0){
        resultObj = state.raceResults.filter((result) => {
            return result.finishPosition > 0
        }).map((result)=>{
            const resultObj = {Driver: result.drivers.name, position: result.finishPosition}
            return resultObj
        })
    }

    const handleHideResults = () => {
        dispatch({type: "DisplayRaceResults", bool: false})
    };

    return ( 
        <RaceResultDiv>
            <ListDisplay data={resultObj}
              columns={columns}
              bgColor={bgColor}
              paddingRight={paddingRight}
              iconColumns={iconColumns}
              iconHeight={iconHeight}
              iconBgColor={iconBgColor}
              keysToShow={keysToShow}
            />
            <SubmitButton clickFunction={handleHideResults} value={"hide results"}/>

        </RaceResultDiv>
    )
};

const RaceResultDiv = styled.div`
background-color: darkGrey;
position: absolute;
height : 40vw;
width: 20vw;
text-align: center;
top:10vw;
left:40vw;
border-radius: 2vw;
`


export default DisplayRaceResults;