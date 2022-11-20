import { useContext } from "react";
import { AppContext } from "../App";
import { ContentDiv, PageContainerDiv, PageTitleH1 } from "./HomePage";
import styled from "styled-components"
import DisplayAllRaces from "../containers/ListContainers/DisplayAllRaces";
import NavItem from "../components/DashNavComponents/NavItem";
import NewRaceForm from "../containers/formContainers/NewRaceForm";
import DisplayMyRaces from "../containers/ListContainers/DisplayMyRaces";
import DisplayMyHistory from "../containers/ListContainers/DisplayMyHistory";

const UserDashboard = () =>{

    const {state, dispatch} = useContext(AppContext)

    const navItems = [{dashPage: "upcomingRaces", label: "Upcoming Races"}, {dashPage: "myRaces", label: "My Races"}, {dashPage: "myHistory", label: "My history"}, {dashPage: "createEvent", label: "Create Event"}].map((item, index) => {
        return <NavItem item={item} key={index}/>
    })

    return (
        <PageContainerDiv> 
        <PageTitleH1>Welcome! {state.selectedDriver ? state.selectedDriver.name : null}</PageTitleH1>

        <StyledGridDiv>
        {navItems}
        </StyledGridDiv>
        <ContentDiv>
        {
        state.dashPage === "upcomingRaces"
        ? <DisplayAllRaces/>
        : state.dashPage === "myRaces"
        ? <DisplayMyRaces/>
        : state.dashPage === "myHistory"
        ? <DisplayMyHistory/>
        : state.dashPage === "createEvent"
        ? <NewRaceForm/>
        : null
        }
        </ContentDiv> 

        </PageContainerDiv>
    )
};

const StyledGridDiv = styled.div`
display: grid;
text-align: center;
grid-template-columns: repeat(4, 1fr);
background-color: darkgrey;
width: 80vw;
`

export default UserDashboard;