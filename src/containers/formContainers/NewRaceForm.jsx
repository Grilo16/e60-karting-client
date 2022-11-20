import { useState } from "react";
import styled from "styled-components"
import DatePicker from "../../components/formComponents/DatePicker";
import InputField from "../../components/formComponents/InputField";
import SubmitButton from "../../components/formComponents/SubmitButton";
import { addNewRace } from "../../repositories/raceRepo";

const NewRaceForm = ({setTriggerUpdate, triggerUpdate}) => {

    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [location, setLocation ] = useState("")

    const handleSignUp = () => {
        const dateObj = new Date(date+" "+time)
        const raceObj = {
            name : name, 
            raceDate: dateObj, 
            location: location,
        }
        addNewRace(raceObj)
        setTriggerUpdate(!triggerUpdate)
    };

    return (

        <StyledForm>
            <h1>PH New Race Title</h1>
                <InputField value={name} setState={setName}/>
                <InputField value={location} setState={setLocation}/>

                <DatePicker setDate={setDate} setTime={setTime}/>

                <SubmitButton value={"Sign up"} clickFunction={handleSignUp}/>
        </StyledForm>
    )
};

const StyledForm = styled.form`
background-color: grey;
` 


export default NewRaceForm;