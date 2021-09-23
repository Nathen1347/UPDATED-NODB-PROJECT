import React, { Component } from "react";
import axios from "axios";
import "./addShow.css";

class AddShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTitle: "",
      imgUrl: "",
      review: "",
      episodesWatched: ''
    };
  }
  handleNameInput = (e) => {
    this.setState({ showTitle: e.target.value });
  };

  handleImgInput = (e) => {
    this.setState({ imgUrl: e.target.value });
  };

  handleReviewInput = (e) => {
    this.setState({ review: e.target.value });
  };

  handleWatchedInput = (e) => {
    this.setState({episodesWatched: e.target.value})
  }

  addNewShow = () => {
    const body = {
      title: this.state.showTitle,
      imgUrl: this.state.imgUrl,
      review: this.state.review,
      episodesWatched: this.state.episodesWatched
    };
    axios
      .post("/api/shows", body)
      .then((res) => this.props.updateShows(res.data))
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className='Container-addShow'>
        <div>
          <h2 className='Add-show-title'>REVIEW YOUR FAVORITE SHOW</h2>
        </div>
        <div>
            <input onChange={this.handleWatchedInput}
            placeholder='Total Watched Episodes'
            className='Input1'
            type='text' />
        </div>
        <div>
          <input
            onChange={this.handleNameInput}
            placeholder={"Title of Show"}
            className='Input1'
          />
        </div>
        <div>
          <input 
          onChange={this.handleImgInput} 
          placeholder={"Image Url"}
          className='Input1' />
        </div>
        <div>
          <input
            onChange={this.handleReviewInput}
            placeholder={"Leave Review"}
            className='Input-review'
          />
        </div>
        <div>
          <button className='Button' onClick={this.addNewShow}>Add Show</button>
        </div>
      </div>
    );
  }
}

export default AddShow;
