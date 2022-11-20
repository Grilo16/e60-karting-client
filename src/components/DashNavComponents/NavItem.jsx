import { useContext } from "react";
import { AppContext } from "../../App";

const NavItem = ({item}) => {

    const {state, dispatch} = useContext(AppContext)

    const handleClick = ()=>{
        dispatch({type: "SetDashPage", dashPage: item.dashPage})
    }

    return (
        <h1 onClick={handleClick}>{item.label}</h1>
    )
};

export default NavItem;