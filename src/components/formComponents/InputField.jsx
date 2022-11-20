import styled from "styled-components"

const InputField = ({value, setState, placeHolder}) => {

const handleChange = (e) => {
    e.preventDefault()
    setState(e.target.value)
};

    return(
        <StyledInputField onChange={handleChange} value={value} placeholder={placeHolder}/>
    )
};


const StyledInputField = styled.input`

`


export default InputField;