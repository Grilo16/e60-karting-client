import { useContext } from "react";
import styled from "styled-components"
import { AppContext } from "../App";
import SelectDriverForm from "../containers/formContainers/SelectDriverForm";
import SignUpForm from "../containers/formContainers/SignUpForm";

const HomePage = () => {

    const {state, dispatch} = useContext(AppContext)


    return (
        <PageContainerDiv>
            <PageTitleH1>Welcome to E60 GoKarting</PageTitleH1>
            <FlexContainerDiv>
                <ContentDiv>
                <SignUpForm />
                </ContentDiv>
                <ContentDiv>
            <SelectDriverForm/>

            
                </ContentDiv>
            </FlexContainerDiv>

        </PageContainerDiv>
    )
};

export const PageTitleH1 = styled.h1`

`

export const FlexContainerDiv = styled.div`
background-color: darkGrey;
display: flex;
justify-content: space-evenly;
align-items: center;
height: 80vh;
width: 100vw;
`

export const PageContainerDiv = styled.div`
background-color: grey;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const ContentDiv = styled.div`

`


export default HomePage; 