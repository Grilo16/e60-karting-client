import styled from "styled-components";
import ListIcon from "./ListIcon";

const ListDisplay = ({
  columns,
  gap,
  height,
  width,
  bgColor,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  textAlign,
  borderRadius,
  iconHeight,
  iconWidth,
  alignItems,
  iconPaddingLeft,
  iconPaddingRight,
  iconPaddingTop,
  iconPaddingBottom,
  iconAlignItems,
  iconTextAlign,
  iconBgColor,
  iconMarginLeft,
  iconMarginRight,
  iconMarginTop,
  iconMarginBottom,
  iconColumns,
  iconBorderRadius,
  iconClickFunction,
  keysToShow,
  data,
}) => {

    if (!paddingLeft){
        paddingLeft = 2
    }
    if (!paddingRight){
        paddingRight = 2
    }
    if (!paddingTop){
        paddingTop = 2
    }
    if (!paddingBottom){
        paddingBottom = 2
    }
    if (!borderRadius){
        borderRadius = 2
    }
    if (!iconBorderRadius){
        iconBorderRadius = 1
    }

  let iconList;
  if (data) {
    iconList = data.map((dataObj, index) => {
      return (
        <ListIcon
          key={index}
          dataObj={dataObj}
          columns={iconColumns}
          keysToShow={keysToShow}
          marginLeft={iconMarginLeft}
          marginRight={iconMarginRight}
          marginTop={iconMarginTop}
          marginBottom={iconMarginBottom}
          bgColor={iconBgColor}
          textAlign={iconTextAlign}
          alignItems={iconAlignItems}
          height={iconHeight}
          width={iconWidth}
          paddingLeft={iconPaddingLeft}
          paddingRight={iconPaddingRight}
          paddingTop={iconPaddingTop}
          paddingBottom={iconPaddingBottom}
          borderRadius={iconBorderRadius}
          iconClickFunction={iconClickFunction}
        />
      );
    });
  }

  return (
    <StyledGridDiv
      columns={columns}
      bgColor={bgColor}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      marginBottom={marginBottom}
      gap={gap}
      height={height}
      width={width}
      alignItems={alignItems}
      textAlign={textAlign}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      borderRadius={borderRadius}
    >
      {iconList}
    </StyledGridDiv>
  );
};

export const StyledGridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => (props.columns ? props.columns : 3)},
    1fr
  );
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft + "%" : null)};
  padding-right: ${(props) => (props.paddingRight ? props.paddingRight + "%" : null)};
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop + "%" : null)};
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom + "%" : null};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft + "%" : null)};
  margin-right: ${(props) =>
    props.marginRight ? props.marginRight + "%" : null};
  margin-top: ${(props) => (props.marginTop ? props.marginTop + "%" : null)};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom + "%" : null};
  gap: ${(props) => (props.gap ? props.gap + "%" : "1%")};
  background-color: ${(props) => (props.bgColor ? props.bgColor : null)};
  height: ${(props) => (props.height ? props.height + "%" : null)};
  width: ${(props) => (props.width ? props.width + "%" : null)};
  min-height: max-content;
  min-width: max-content;
  border-radius: ${(props) => props.borderRadius ? props.borderRadius + "vw" : null};
`;

export default ListDisplay;
