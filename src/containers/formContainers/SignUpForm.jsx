import { useContext, useState } from "react";
import styled from "styled-components"
import { AppContext } from "../../App";
import InputField from "../../components/formComponents/InputField";
import SubmitButton from "../../components/formComponents/SubmitButton";
import { PageTitleH1 } from "../../pages/HomePage";
import { addNewDriver, getAllDrivers } from "../../repositories/driverRepo";

const SignUpForm = ({setTriggerUpdate, triggerUpdate}) => {

    const [userName, setUserName] = useState("")
    const {state, dispatch} = useContext(AppContext)

    const handleSignUp = () => {
        const driverObj = {
            name : userName
        }
        addNewDriver(driverObj).then(()=>{
            getAllDrivers().then((drivers)=> dispatch({type: "LoadDrivers", drivers}))
        })
    };

    return (

        <StyledForm>
            <PageTitleH1>Add new driver</PageTitleH1>
                <InputField value={userName} setState={setUserName}/>
                <SubmitButton value={"Add Driver"} clickFunction={handleSignUp}/>
        </StyledForm>
    )
};

const StyledForm = styled.form`

` 


export default SignUpForm;