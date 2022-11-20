import { useEffect, useState } from "react";
import ListDisplay from "../../components/ListDisplayComponents/ListDisplay";
import ListIcon from "../../components/ListDisplayComponents/ListIcon";
import styled from "styled-components";

const DisplayAllDrivers = ({ triggerUpdate , setDriver}) => {
  const [drivers, setDrivers] = useState([]);

  // useEffect(() => {
  //   getAllDrivers().then(setDrivers);
  // }, [triggerUpdate]);

  const data = drivers;

  const columns = 4;
  const bgColor = "grey";
  
  const textAlign = null;
  const alignItems = null;
  const gap = null;
  const height = null;
  const width = null;
  const marginLeft =null;
  const marginRight = null;
  const marginTop = null;
  const marginBottom = null;
  const paddingLeft = null;
  const paddingRight = null;
  const paddingTop = null;
  const paddingBottom = null;
  const borderRadius = null;

  const iconColumns = 1;
  const iconHeight = 100;
  const iconBgColor = "darkgrey";

  const iconBorderRadius = null;
  const iconWidth = null;
  const iconAlignItems = null;
  const iconTextAlign = null;
  const iconPaddingLeft = null;
  const iconPaddingRight = null;
  const iconPaddingTop = null;
  const iconPaddingBottom = null;
  const iconMarginLeft = null;
  const iconMarginRight = null;
  const iconMarginTop = null;
  const iconMarginBottom = null;
  const keysToShow = null;



  return (
    <ListContainerDiv>
      <h1>display all drivers</h1>
      <ListDisplay
        data={data}
        columns={columns}
        marginLeft={marginLeft}
        marginRight={marginRight}
        marginTop={marginTop}
        marginBottom={marginBottom}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        alignItems={alignItems}
        textAlign={textAlign}
        gap={gap}
        height={height}
        width={width}
        bgColor={bgColor}
        borderRadius={borderRadius}
        iconBorderRadius={iconBorderRadius}
        iconHeight={iconHeight}
        iconWidth={iconWidth}
        iconAlignItems={iconAlignItems}
        iconTextAlign={iconTextAlign}
        iconBgColor={iconBgColor}
        iconPaddingLeft={iconPaddingLeft}
        iconPaddingRight={iconPaddingRight}
        iconPaddingTop={iconPaddingTop}
        iconPaddingBottom={iconPaddingBottom}
        iconMarginLeft={iconMarginLeft}
        iconMarginRight={iconMarginRight}
        iconMarginTop={iconMarginTop}
        iconMarginBottom={iconMarginBottom}
        iconColumns={iconColumns}
        keysToShow={keysToShow}
      />
      <ListIcon />
    </ListContainerDiv>
  );
};

export const ListContainerDiv = styled.div`
  width: max-content;
  height: max-content;
`;

export default DisplayAllDrivers;
