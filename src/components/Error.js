import React from "react";

class Error extends React.Component {
  constructor(props) {
    super(props);
    console.log("Error");
  }

  render() {
    return <div>Error Component. Path is not exist.</div>;
  }
}

export default Error;
