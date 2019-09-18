import React from "react";
import ShowData from "./ShowData";

class Crud extends React.Component {
  constructor(props) {
    super(props);
    console.log("Crud");
  }

  render() {
    return (
      <div>
        <h1>This is the CRUD Component.</h1>
        <ShowData />
      </div>
    );
  }
}

export default Crud;
