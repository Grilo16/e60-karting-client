import { useContext, useEffect } from "react";
import styled from "styled-components";
import { AppContext } from "../../App";
import ListDisplay from "../../components/ListDisplayComponents/ListDisplay";
import { ContentDiv } from "../../pages/HomePage";
import { getAllRaceDriversByDriversId } from "../../repositories/raceDriverRepo";
import SelectDriverForm from "../formContainers/SelectDriverForm";

const DisplayMyRaces = () => {
  const { state, dispatch } = useContext(AppContext);

  const columns = 2;
  const bgColor = "grey";
  const paddingRight = 3;
  const iconColumns = 1;
  const iconHeight = 100;
  const iconBgColor = "darkgrey";
  const keysToShow = [0,1,2,3];

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
        console.log(raceObj)
        const {raceDate, ...rest} = raceObj.race
        const date = new Date(raceDate).getTime()
        const now = Date.now()
        console.log(now, date)
        return date > now
    }).map((myRace) => {
      const { race, drivers, startPosition, finishPosition, ...rest } = myRace;
      const { name: raceName, raceDate, location, finished, ...raceRest } = race;
      const { name: driverName, ...driverRest } = drivers;
      const date = new Date(raceDate);
      const myRaceObj = {
        raceName: raceName,
        raceDate: date.toUTCString(),
        location: location,
        driverName: driverName,
        startPosition: startPosition,
        finishPosition: finishPosition,
      };
      return myRaceObj;
    });
  }

  // console.log(myRaces)
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
        />
      ) : state.selectedDriver.name ? (
        <h1>You are not signed up to any races</h1>
      ) : (
        <>
          <h1>No driver selected soz</h1>
          <SelectDriverForm />
        </>
      )}
    </ContentDiv>
  );
};

export default DisplayMyRaces;
