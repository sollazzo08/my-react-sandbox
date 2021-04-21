import React, { createRef } from "react";
import Button from "./ButtonRef";

class Form extends React.Component {
  state = {
    data: {
      username: "",
      password: ""
    }
  };
  inputRef = createRef();

  componentDidMount() {
    this.inputRef.current.focus();
  }

  handleChange = ({ target: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.data.password);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Username"
          />

          <input
            name="password"
            ref={this.inputRef}
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <button>Submit</button>
        </form>
        <Button />
      </>
    );
  }
}

export default Form;
