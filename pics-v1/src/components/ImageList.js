import React from "react";

const ImageList = (props) => {
  const pictures = props.pictures.map(({ description, id, urls }) => {
    return <img alt={description} key={id} src={urls.regular} />;
  });
  return <div>{pictures}</div>;
};

export default ImageList;
