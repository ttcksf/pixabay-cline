import React from "react";
import "./ImageGarallery.css";

const ImageGarallery = ({ fetchData }) => {
  return (
    <div>
      <div className="images-wrapper">
        {fetchData.map((data) => (
          <div className="image" key={data.id}>
            <a href={data.pageURL} target="_blank" rel="noreferrer">
              <img src={data.largeImageURL} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGarallery;
