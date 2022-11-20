import { useContext, useState } from "react";
import styled from "styled-components"
import { AppContext } from "../../App";
import DropDownBox from "../../components/formComponents/DropdownBox";
import SubmitButton from "../../components/formComponents/SubmitButton";
import { getDriverById } from "../../repositories/driverRepo";
import {useNavigate} from "react-router-dom"

const SelectDriverForm = () => {

    const [selected, setSelected] = useState("")

    const {state, dispatch} = useContext(AppContext)

    const navigate = useNavigate()
    
    const handleSelectDriver = () => {
        getDriverById(selected).then((driver)=>dispatch({type: "SelectDriver", driver}))
            
        navigate("/dashboard")        
    };

    const handleChange = (e) => {
        setSelected(e.target.value)
    };

    return (
        <StyledForm onChange={handleChange}>
            <h1>select driver</h1>
            <DropDownBox />
            <SubmitButton value="Select Driver" clickFunction={handleSelectDriver}/>

        </StyledForm>
    )
}; 
const StyledForm = styled.form`

` 
export default SelectDriverForm;