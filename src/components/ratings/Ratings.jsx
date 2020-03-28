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
    const { ratings } = this.props;
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
          <div className="flex">
            <div className="flex-item one">
              <div className="row">
                <div className="side">
                  <div>5 star</div>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div className="bar-5"></div>
                  </div>
                </div>
                <div className="side right">
                  <div>150</div>
                </div>
                <div className="side">
                  <div>4 star</div>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div className="bar-4"></div>
                  </div>
                </div>
                <div className="side right">
                  <div>63</div>
                </div>
                <div className="side">
                  <div>3 star</div>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div className="bar-3"></div>
                  </div>
                </div>
                <div className="side right">
                  <div>15</div>
                </div>
                <div className="side">
                  <div>2 star</div>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div className="bar-2"></div>
                  </div>
                </div>
                <div className="side right">
                  <div>6</div>
                </div>
                <div className="side">
                  <div>1 star</div>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div className="bar-1"></div>
                  </div>
                </div>
                <div className="side right">
                  <div>20</div>
                </div>
              </div>
            </div>
            <div className="flex-item two">
              <div className="stars">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
              </div>
              <div className="ratings-number">4/5 stars</div>
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
