import { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import ListDisplay from "../../components/ListDisplayComponents/ListDisplay";
import { ContentDiv } from "../../pages/HomePage";
import { getAllRaceDriversByDriversId, getRaceResulByRaceId } from "../../repositories/raceDriverRepo";
import SelectDriverForm from "../formContainers/SelectDriverForm";
import SetPositionForm from "../formContainers/SetPositionForm";
import DisplayRaceResults from "./DisplayRaceResults";

const DisplayMyHistory = () => {
  const { state, dispatch } = useContext(AppContext);

  const columns = 2;
  const bgColor = "grey";
  const paddingRight = 3;
  const iconColumns = 1;
  const iconHeight = 100;
  const iconBgColor = "darkgrey";
  const keysToShow = null;

  let myRaces = [];
  let userId;
  if (state.selectedDriver) {
    userId = state.selectedDriver.id;
  }
  useEffect(() => {
    getAllRaceDriversByDriversId(userId).then((myRaces) => {
      dispatch({ type: "LoadMyRaces", myRaces });
    });
  }, []);

  if (state.myRaces.length > 0) {
    myRaces = state.myRaces.filter((raceObj)=>{
        const {raceDate, ...rest} = raceObj.race
        const date = new Date(raceDate).getTime()
        const now = Date.now()
        return date < now
    }).map((myRace) => {
      const { race, drivers, startPosition, finishPosition, ...rest } = myRace;
      const {  id: raceId, name: raceName, raceDate, location, finished, ...raceRest } = race;
      const { name: driverName, ...driverRest } = drivers;
      const date = new Date(raceDate);
      let positions;
      if(!startPosition && !finishPosition){
        positions = {setPositions: <SetPositionForm raceId={rest.id}/> }
      }else{
          positions = {start: startPosition, finish: finishPosition}
    }

      const myRaceObj = {
        raceId: raceId,
        raceName: raceName,
        raceDate: date.toUTCString(),
        location: location,
        driverName: driverName,
        ...positions
      };
      return myRaceObj;
    });
  }

  const handleClick = (iconData) => {
    const id = iconData.raceId
    
    getRaceResulByRaceId(id).then((raceResults)=>{
        dispatch({type: "LoadRaceResults", raceResults})
    }) 
        
    dispatch({type:"SelectRace", selectedRace: id})
    dispatch({type: "DisplayRaceResults", bool: true})


  };


  return (
    <ContentDiv>
      <h1>my races</h1>

      {myRaces.length > 0 ? (
        <ListDisplay
          data={myRaces}
          columns={columns}
          bgColor={bgColor}
          paddingRight={paddingRight}
          iconColumns={iconColumns}
          iconHeight={iconHeight}
          iconBgColor={iconBgColor}
          keysToShow={keysToShow}
          iconClickFunction ={handleClick}
        />
      ) : state.selectedDriver.name ? (
        <h1>You are not signed up to any races</h1>
      ) : (
        <>
          <h1>No driver selected soz</h1>
          <SelectDriverForm />
        </>
      )}
      {state.displayRaceResults 
      ? <DisplayRaceResults/>
    :null
    }
    </ContentDiv>
  );
};

export default DisplayMyHistory;
