import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log("Home");
  }

  render() {
    return (
      <div>
        <h1>Hello! ! Welcome to Home Component.</h1>
      </div>
    );
  }
}

export default Home;
