import React from "react";

const ImageList = ({ images }) => {
  const allImages = images.map((image) => {
    return (
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        key={image.id}
        style={{
          width: "250px",
          height: "300px",
          margin: "10px",
          borderRadius: "10px",
        }}
      />
    );
  });

  return <div>{allImages}</div>;
};

export default ImageList;
