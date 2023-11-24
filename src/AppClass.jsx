import { Component } from "react";
import "./App.css";

export default class AppClass extends Component {

  // code here
  render() {
    const data = this.props.data;
    // console.log(data);
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
