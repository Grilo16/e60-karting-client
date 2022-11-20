import { StyledGridDiv } from "./ListDisplay";

const ListIcon = ({
  columns,
  dataObj,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  keysToShow,
  bgColor,
  textAlign,
  alignItems,
  height,
  width,
  borderRadius,
  iconClickFunction,
}) => {

  const handleClick = (e) => {
    if (iconClickFunction){
      iconClickFunction(dataObj)
    }

  };

  let keys;
  let iconContents;
  if (dataObj) {
    keys = Object.keys(dataObj);
    if (keysToShow) {
      iconContents = keysToShow.map((key, index) => {
        return (
          <h2>
            {keys[key]} : {dataObj[keys[key]]}
          </h2>
        );
      });
    } else {
      iconContents = keys.map((entry, index) => {
        return (
          <h2>
            {entry} : {dataObj[entry]}
          </h2>
        );
      });
    }
  }

  return (
    <StyledGridDiv onClick={handleClick}
      columns={columns}
      bgColor={bgColor}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      marginBottom={marginBottom}
      textAlign={textAlign}
      alignItems={alignItems}
      height={height}
      width={width}
      borderRadius={borderRadius}
    >
      {iconContents}
    </StyledGridDiv>
  );
};

export default ListIcon;
