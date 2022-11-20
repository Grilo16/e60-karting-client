import { useContext } from "react";
import styled from "styled-components"
import { AppContext } from "../../App";

const DropDownBox = () => {

    const {state, dispatch} = useContext(AppContext)

    let options;
    if (state.drivers){
        options = state.drivers.map((driver)=>{
            return  <StyledOption key={driver.id} value={driver.id}>{driver.name}</StyledOption> 
        })
    }

    return (
        <StyledDropdown>
            <StyledOption> </StyledOption>
            {options}
        </StyledDropdown>
    )    

};

const StyledDropdown = styled.select`

`

const StyledOption = styled.option`

`

export default DropDownBox

