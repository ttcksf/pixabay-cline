import "./App.css";
import React, { useRef, useState } from "react";
import ImageGarallery from "./ImageGarallery";

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    //fetch api
    const API_KEY = "";
    const endpointURL =
      "https://pixabay.com/api/?key=" +
      API_KEY +
      `&q=${ref.current.value}&image_type=photo&pretty=tru`;
    fetch(endpointURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //オブジェクトの中からhits部分が必要になる
        setFetchData(data.hits);
      });
  };
  return (
    <div className="container">
      <h2>My Pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="画像を探す" ref={ref} />
      </form>
      <ImageGarallery fetchData={fetchData} />
    </div>
  );
}

export default App;
