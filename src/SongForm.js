import React from "react";
/*
This is a shared component between Gameplay and Home used to set Game via props
*/
let numTrack = {
  amount: [1, 2, 3],
};

class SongForm extends React.Component {
  constructor(p) {
    super(p);
    this.state = { selectedOption: "" };
  }
  handleClick(e) {
    console.log("selectedOption", e.target.value);
    this.setState({ selectedOption: e.target.value });
    localStorage.setItem("numTrack", JSON.stringify(numTrack));
  }

  render() {
    return (
      <section>
        <h2>How many Tracks?</h2>

        <input
          type="radio"
          name="numSong"
          value="1"
          onChange={(e) => this.handleClick(e)}
        />
        <label>1</label>
        <br />
        <input
          type="radio"
          name="numSong"
          value="2"
          onChange={(e) => this.handleClick(e)}
        ></input>
        <label>2</label>
        <br />
        <input
          type="radio"
          name="numSong"
          value="3"
          onChange={(e) => this.handleClick(e)}
        ></input>
        <label>3</label>
        <br />
      </section>
    );
  }
}
export default SongForm;
