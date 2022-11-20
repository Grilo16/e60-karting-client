import styled from "styled-components"
import InputField from "../../components/formComponents/InputField";
import { useContext, useState } from "react";
import SubmitButton from "../../components/formComponents/SubmitButton";
import { getAllRaceDriversByDriversId, setRaceDriversPosition } from "../../repositories/raceDriverRepo";
import { AppContext } from "../../App";

const SetPositionForm = ({raceId}) => {
    const [startPosition, setStartPosition] = useState("")
    const [finishPosition, setFinishPosition] = useState("")
    const {state, dispatch} = useContext(AppContext)



    if (!raceId){
        raceId = null
    }
    let driver;
    if (!state.selectedDriver){
        driver = null
    }
    driver = state.selectedDriver
    const handleSetPositions = () => {
        
        const positionObj = {id: raceId, startPosition: startPosition, finishPosition: finishPosition}
        setRaceDriversPosition(positionObj).then(()=>{
            getAllRaceDriversByDriversId(driver.id).then((myRaces)=>{
                dispatch({type: "LoadMyRaces", myRaces})
            })
        })
    };

    return (
        <StyledForm>
            
            <InputField setState={setStartPosition} value={startPosition} placeHolder={"start position"}/>
            <br />
            <InputField setState={setFinishPosition} value={finishPosition}placeHolder={"finish position"}/>
            <br />
            <SubmitButton value ={"set positions"} clickFunction={handleSetPositions} />
        </StyledForm>            
    )
};

const StyledForm = styled.form`

` 
export default SetPositionForm;