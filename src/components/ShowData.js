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
    console.log("Faruk");
    const { contact_lists } = this.state;
    let x = (
      <ul>
        {contact_lists.map(individual_list => (
          <li key={individual_list.id}>
            {individual_list.name} {individual_list.email}
          </li>
        ))}
      </ul>
    );
    return x;
  };

  render() {
    return (
      <div>
        Hello! I'm Show Data Component. [Child Component of CRUD component.]
        {this.contact_info_list()}
      </div>
    );
  }
}

export default ShowData;
