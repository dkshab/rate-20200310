import React, { Component } from "react";
import Modal from "../Modal";
import { auth, firestore, storage } from "../../firebase";

class WineList extends Component {
  state = { type: "", grape: "", title: "", description: "", showModal: false };
  imageInput = null;

  get file() {
    return this.imageInput && this.imageInput.files[0];
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { type, grape, title, description } = this.state;
    const { uid, displayName, email, photoURL } = auth.currentUser || {};

    const wine = {
      title,
      type,
      grape,
      description,
      user: { uid, displayName, email, photoURL },
      createdAt: new Date()
    };

    const resp = await firestore.collection("wines").add(wine);
    const wineId = resp.id;
    const wineRef = firestore.doc(`wines/${wineId}`);

    if (this.file) {
      await storage
        .ref()
        .child("wine-profiles")
        .child(wineId)
        .child(this.file.name)
        .put(this.file)
        .then(response => response.ref.getDownloadURL())
        .then(winePhotoURL => wineRef.update({ winePhotoURL }));
    }

    this.setState({
      showModal: !this.state.showModal,
      type: "",
      grape: "",
      title: "",
      description: ""
    });
  };

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  render() {
    const { showModal, title, type, grape, description } = this.state;
    return (
      <div>
        <button onClick={this.toggleModal}>Add Wine</button>
        <section>Wine List</section>
        {showModal ? (
          <Modal>
            <form onSubmit={this.handleSubmit}>
              <fieldset>
                <legend>Add Wine</legend>
                <label htmlFor="type">Type</label>
                <select name="type" onChange={this.handleChange} value={type}>
                  <option defaultValue>Select one...</option>
                  <option value="red">Red</option>
                  <option value="white">White</option>
                  <option value="sparkling">Sparkling</option>
                  <option value="rose">Rose</option>
                  <option value="port">Port</option>
                </select>
                <label htmlFor="grape">Grapes</label>
                <select name="grape" onChange={this.handleChange} value={grape}>
                  <option defaultValue>Select one...</option>
                  <option value="cabernet-sauvignon">Cabernet Sauvignon</option>
                  <option value="shiraz">Shiraz/Syrah</option>
                  <option value="merlot">Merlot</option>
                  <option value="chardonnay">Chardonnay</option>
                  <option value="sauvignon-blanc">Sauvignon Blanc</option>
                </select>
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  cols="30"
                  rows="10"
                  value={description}
                  onChange={this.handleChange}
                ></textarea>
                <input type="file" ref={ref => (this.imageInput = ref)} />
                <button type="submit">Add</button>{" "}
              </fieldset>
            </form>
            <button onClick={this.toggleModal}>Close</button>
          </Modal>
        ) : null}
      </div>
    );
  }
}

export default WineList;
