import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("About");
  }
  render() {
    return (
      <div>
        <h1>This is the About Component</h1>
      </div>
    );
  }
}

export default About;
