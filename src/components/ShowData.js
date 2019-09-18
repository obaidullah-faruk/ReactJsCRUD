import React from "react";

class ShowData extends React.Component {
  constructor(props) {
    super(props);
    console.log("ShowData");

    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    console.log("component Did Mount");
    const url = "http://localhost:3000/contacts";
    fetch(url)
      .then(response => response.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  render() {
    return (
      <div>
        Hello! I'm Show Data Component. [Child Component of CRUD component.]
      </div>
    );
  }
}

export default ShowData;
