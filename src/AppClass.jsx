import { Component } from "react";
import "./App.css";
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component {
  imageData = () => {
    let data = [
      {
        id: 1,
        img: elephant,
      },
      {
        id: 2,
        img: elephant,
      },
      {
        id: 3,
        img: elephant,
      },
      {
        id: 4,
        img: elephant,
      },
    ];
    return data;
  };

  // code here
  render() {
    const data = this.imageData();

    return (
      <>
        <h1 className="heading">Kalvium gallary</h1>
        <div className="container">
          {data.map((ele) => {
            return (
              <div key={ele.id}>
                <img src={ele.img} alt={"elephant"} />
                <p>{ele.id}</p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
