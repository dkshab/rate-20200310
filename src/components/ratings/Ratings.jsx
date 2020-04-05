import React, { Component } from "react";

import Rating from "./Rating";
import Modal from "../Modal";
import Star from "../stars/Star";

import "../../css/ratings.css";

class Ratings extends Component {
  state = {
    title: "",
    content: "",
    defaultStars: 5,
    starsSelected: 0,
    showModal: false
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  handleStarClick = count => {
    this.setState({ starsSelected: count }, () => {
      //console.log(this.state.starsSelected);
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, content, starsSelected } = this.state;
    const rating = {
      title,
      content,
      starsSelected,
      createdAt: new Date()
    };

    this.props.onCreate(rating);
    this.setState({
      title: "",
      content: "",
      defaultStars: 5,
      starsSelected: 0,
      showModal: false
    });
    // console.log(content);
  };

  render() {
    const { ratings, ratingsMeta } = this.props;
    //console.log(ratingsMeta.fiveStar / ratingsMeta.numberOfRatings);
    //console.log(ratingsMeta.ratingsValue / ratingsMeta.numberOfRatings);
    // const averageRating = ? (ratingsMeta.ratingsValue / ratingsMeta.numberOfRatings) > 0: 0;
    const averageRating =
      ratingsMeta.ratingsValue / ratingsMeta.numberOfRatings > 0
        ? ratingsMeta.ratingsValue / ratingsMeta.numberOfRatings
        : 0;

    //console.log(averageRating);

    const {
      showModal,
      title,
      content,
      defaultStars,
      starsSelected
    } = this.state;
    return (
      <div className="Ratings">
        <section>
          <h3>Ratings & Reviews</h3>
          <h4 className="Ratings--number">
            {ratingsMeta.numberOfRatings} reviews
          </h4>
          <div className="flex">
            <div className="flex-item one">
              <div className="row">
                <div className="side">
                  <div>5 star</div>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div
                      className="bar-5"
                      style={{
                        width: `${(ratingsMeta.fiveStar /
                          ratingsMeta.numberOfRatings) *
                          100}%`
                      }}
                    ></div>
                  </div>
                </div>
                <div className="side right">
                  <div>{ratingsMeta.fiveStar}</div>
                </div>
                <div className="side">
                  <div>4 star</div>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div
                      className="bar-4"
                      style={{
                        width: `${(ratingsMeta.fourStar /
                          ratingsMeta.numberOfRatings) *
                          100}%`
                      }}
                    ></div>
                  </div>
                </div>
                <div className="side right">
                  <div>{ratingsMeta.fourStar}</div>
                </div>
                <div className="side">
                  <div>3 star</div>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div
                      className="bar-3"
                      style={{
                        width: `${(ratingsMeta.threeStar /
                          ratingsMeta.numberOfRatings) *
                          100}%`
                      }}
                    ></div>
                  </div>
                </div>
                <div className="side right">
                  <div>{ratingsMeta.threeStar}</div>
                </div>
                <div className="side">
                  <div>2 star</div>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div
                      className="bar-2"
                      style={{
                        width: `${(ratingsMeta.twoStar /
                          ratingsMeta.numberOfRatings) *
                          100}%`
                      }}
                    ></div>
                  </div>
                </div>
                <div className="side right">
                  <div>{ratingsMeta.twoStar}</div>
                </div>
                <div className="side">
                  <div>1 star</div>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div
                      className="bar-1"
                      style={{
                        width: `${(ratingsMeta.oneStar /
                          ratingsMeta.numberOfRatings) *
                          100}%`
                      }}
                    ></div>
                  </div>
                </div>
                <div className="side right">
                  <div>{ratingsMeta.oneStar}</div>
                </div>
              </div>
            </div>
            <div className="flex-item two">
              <div className="stars">
                {[...Array(defaultStars)].map((n, i) => (
                  <Star key={i} selected={i < averageRating} />
                ))}
              </div>
              <div className="ratings-number"> {averageRating} / 5 stars</div>
            </div>
            <div className="flex-item three">
              <p onClick={this.toggleModal}>Add Rating</p>
            </div>
          </div>
          <div className="filter-bar">
            <div className="right">
              <select>
                <option defaultChecked>Sort by:</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Last long option</option>
              </select>
            </div>
          </div>
          {ratings.map(rating => (
            <Rating {...rating} key={rating.id} />
          ))}
        </section>
        {showModal ? (
          <Modal>
            <form onSubmit={this.handleSubmit}>
              <fieldset>
                <legend>Add Rating</legend>
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor="type">Rating Type</label>
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
                      onClick={e => this.handleStarClick(i + 1, e)}
                    />
                  ))}
                </div>
                <button type="submit">Create</button>
                <button className="close-btn" onClick={this.toggleModal}>
                  Close
                </button>
              </fieldset>
            </form>
          </Modal>
        ) : null}
      </div>
    );
  }
}

export default Ratings;
