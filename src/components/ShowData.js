import React from "react";
import axios from "axios";

class ShowData extends React.Component {
  constructor(props) {
    super(props);
    console.log("ShowData");

    this.state = {
      contact_lists: []
    };
  }

  componentDidMount() {
    console.log("component Did Mount");
    const url = "http://localhost:3000/contacts";

    axios.get(url).then(result => {
      this.setState({
        contact_lists: result.data
      });
      console.log(this.state.contact_lists);
    });
  }

  contact_info_list = () => {
    const { contact_lists } = this.state;
    let x = (
      <ul>
        {contact_lists.map(individual_list => (
          <li key={individual_list.id}>
            {individual_list.name} {individual_list.email}
            <br></br>
          </li>
        ))}
      </ul>
    );
    return x;
  };

  render() {
    return (
      <div>
        <h4>Hello! I'm Show Data Component.</h4>
        <span>[Child Component of CRUD component.]</span>
        <h4>{this.contact_info_list()}</h4>
      </div>
    );
  }
}

export default ShowData;
