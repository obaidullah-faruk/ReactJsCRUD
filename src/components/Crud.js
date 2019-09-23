import React from "react";
import ShowData from "./ShowData";
import DataInputForm from "./DataInputForm";

class Crud extends React.Component {
  render() {
    return (
      <div>
        <h1>This is the CRUD Component.</h1>
        <DataInputForm></DataInputForm>
        <ShowData></ShowData>
      </div>
    );
  }
}

export default Crud;
