import React from "react";

class DataInputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert("You are submitting " + this.state.name + " " + this.state.email);
  };

  render() {
    return (
      <div>
        <h4>Hello! I'm Data Input Form Component</h4>
        <span>[Child Component of CRUD component.]</span>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleChange} />
            <br />
            <br />
          </label>
          <label>
            Email:
            <input type="email" name="email" onChange={this.handleChange} />
          </label>
          <br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default DataInputForm;
