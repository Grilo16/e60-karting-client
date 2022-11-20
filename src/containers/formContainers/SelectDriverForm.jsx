import { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import { AppContext } from "../../App";
import DropDownBox from "../../components/formComponents/DropdownBox";
import SubmitButton from "../../components/formComponents/SubmitButton";
import {useNavigate} from "react-router-dom"
import driverRepo from "../../repositories/driverRepo";

const SelectDriverForm = () => {

    const [selected, setSelected] = useState("")

    const {state, dispatch} = useContext(AppContext)

    
    useEffect(()=>{
        driverRepo.getAllDrivers().then((drivers) => dispatch({type: "LoadDrivers", drivers}))
      },[])
    

    const navigate = useNavigate()
    
    const handleSelectDriver = () => {
        driverRepo.getDriverById(selected).then((driver)=>{
            dispatch({type: "SelectDriver", driver})
            
        })
        
            
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