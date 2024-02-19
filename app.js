import React from "react";
import ReactDOM from "react-dom/client";

//creating html element with core react without the suppor of jsx
//just for understanding how is done with core react
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "Silamarasan"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "i am h2 tag"),
  ]),
]);

function calcu() {
  let a = 0;
  let b = 2;
  let c = a + b;
  console.log(c);
}

var number = 100;
var name = "alphasr";

//react component example
//pass react element inside component just as a variable by this syntax --- {headingjsx}
const HeadingComp = () => {
  return (
    <>
      <h1 className="header">this is rendered from react component</h1>;
      <Title />
      {calcu()}
      {number}
      <h1>{name}</h1>
      {headingjsx}
    </>
  );
};

const Title = () => {
  return <h1>this is title component</h1>;
};

//react component that as one statememt we can wrote like this also
const HeadingComp2 = () => (
  <h1 className="header">this is rendered from react component</h1>
);

//React element
const headingjsx = (
  <h1 className="head" tabIndex={1}>
    hello world from jsx
  </h1>
);

const Header = () => {
  return (
    <>
      <div className="header">
        <ul className="bar">
          <li>logo</li>
          <li>
            <input type="text" placeholder="search" />
          </li>
          <li>user</li>
        </ul>
      </div>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
