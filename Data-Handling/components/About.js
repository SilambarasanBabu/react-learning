import User from "./User";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Did Mount parrnt");
  }
  render() {
    console.log("Parent render");
    return (
      <>
        <h1>About us</h1>
        <p>This is about us page</p>
        <User />
      </>
    );
  }
}

export default About;
