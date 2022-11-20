import styled from "styled-components"

const InputField = ({value, setState}) => {

const handleChange = (e) => {
    e.preventDefault()
    setState(e.target.value)
};

    return(
        <StyledInputField onChange={handleChange} value={value}/>
    )
};


const StyledInputField = styled.input`

`


export default InputField;