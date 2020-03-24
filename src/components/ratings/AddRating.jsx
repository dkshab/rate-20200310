import React, { Component } from "react";
import StarRating from "../stars/StarRating";
import Star from "../stars/Star";

class AddRating extends Component {
  state = { content: "", defaultStars: 5, starsSelected: 0 };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onCreate(this.state);

    this.setState({ content: "" });
  };

  handleClick = count => {
    this.setState({ starsSelected: count }, () => {
      console.log(this.state.starsSelected);
    });
  };

  render() {
    const { content, defaultStars, starsSelected } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="AddRating">
        <textarea
          name="content"
          id=""
          cols="30"
          rows="10"
          placeholder="Remember, be honest..."
          value={content}
          onChange={this.handleChange}
        ></textarea>
        <div className="star-rating">
          {[...Array(defaultStars)].map((n, i) => (
            <Star
              key={i}
              selected={i < starsSelected}
              onClick={e => this.handleClick(i + 1, e)}
            />
          ))}
        </div>

        <input className="create" type="submit" value="Create Rating" />
      </form>
    );
  }
}

export default AddRating;
