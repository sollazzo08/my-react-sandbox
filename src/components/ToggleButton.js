import React from "react";

class ToggleButton extends React.Component {
  state = {
    p: false
  };

  showParagraph = (toggle) => {
    this.setState({ p: !toggle });
  };

  render() {
    return (
      <>
        <button onClick={() => this.showParagraph(this.state.p)}>
          Toggle Paragraph
        </button>
        {this.state.p && <p>This is a paragraph, heello there sir</p>}
      </>
    );
  }
}

export default ToggleButton;
