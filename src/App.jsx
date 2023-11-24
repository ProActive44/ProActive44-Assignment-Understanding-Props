import "./App.css";

function App({ data }) {
  // console.log(data)
  return (
    <>
      <h1 className="heading">Kalvium gallary</h1>
      <div className="container">
        {data.map((ele) => {
          return (
            <div key={ele.id}>
              <img src={ele.img} alt="elephant" />
              <p>{ele.id}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
