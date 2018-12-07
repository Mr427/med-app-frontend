import React from "react";
import Superagent from "superagent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="main-container">
      </div>
    );
  }
}

export default App;

/* Super Agent set-up
handleSubmit(e) {
  e.preventDefault();
  return Superagent.get("http://localhost:3030/movie")
    .then(res => {
      console.log(res.text);
      this.setState({
        label: "Clicked!",
        value: res.text,
      });
      {this.renderImage()}
    }).catch(err => {
      console.log(err);
      this.setState({
        label: "Error",
      });
    });
}
*/
