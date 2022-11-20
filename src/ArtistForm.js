import React from "react";
/*
This is a shared component that will be set from Home and used to set Game via props
*/

class ArtistForm extends React.Component {
  constructor(p) {
    super(p);
    this.state = { selectedOption: "" };
  }
  handleClick(e) {
    console.log("selectedOption", e.target.value);
    this.setState({ selectedOption: e.target.value });
  }
  render() {
    return (
      <section>
        <h2>How many Artists?</h2>

        <input
          type="radio"
          value="2"
          name="numArtist"
          id="2"
          onChange={(e) => this.handleClick(e)}
        ></input>
        <label>2</label>

        <input
          type="radio"
          value="3"
          name="numArtist"
          id="3"
          onChange={(e) => this.handleClick(e)}
        ></input>
        <label>3</label>

        <input
          type="radio"
          value="4"
          name="numArtist"
          id="4"
          onChange={(e) => this.handleClick(e)}
        ></input>
        <label>4</label>
      </section>
    );
  }
}
export default ArtistForm;
