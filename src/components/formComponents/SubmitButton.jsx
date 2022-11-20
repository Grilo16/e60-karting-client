import styled from "styled-components"

const SubmitButton = ({value, clickFunction, target}) => {

    const handleClick = (e) => {
        e.preventDefault()
        clickFunction(target)
    };

    return (
        <StyledButton onClick={handleClick}>{value}</StyledButton>
    )
}; 

const StyledButton = styled.button`

`

export default SubmitButton;