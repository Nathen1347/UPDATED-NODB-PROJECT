import axios from "axios";
import React, { Component } from "react";
import AddShow from "./Components/addShow";
import Showlist from "./Components/showList";
import Search from "./Components/navSearch";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      shows: [],
      // review: "", 
      searchShow: ''
    };
  }
  componentDidMount() {
    axios
      .get("/api/shows")
      .then(({ data }) => this.setState({ shows: data }))
      .catch((err) => console.log(err));
  }

  updateShows = (shows) => {
    this.setState({ shows });
  };

  // updateReviewInput = (e) => {
  //   this.setState({ review: e.target.value });
  // };

  updateShowReview = (id) => {
    axios
      .put(`/api/shows/${id}/${this.state.review}`)
      .then(({ data }) => this.setState({ shows: data }))
      .catch((err) => console.log(err));
  };

  deleteShow = (id) => {
    axios
      .delete(`/api/shows?deleteId=${id}`)
      .then(({ data }) => this.setState({ shows: data }))
      .catch((err) => console.log(err));
  };
  handleSearchInput = (search) => {
    this.setState({searchShow: search});
  }

  render() {
    let filteredShows = this.state.shows.filter((show, index)=>{
      return show.title.toString().toLowerCase().includes(this.state.searchShow.toString().toLowerCase());
    })
    return (
      <div className='App'>
        <div><Search handleSearchInput={this.handleSearchInput} /></div>
        <div className='Show-list'>
          <div className="Show">
          <Showlist
            filteredShows={filteredShows}
            deleteShow={this.deleteShow}
            updateShowReview={this.updateShowReview}
            // updateReviewInput={this.updateReviewInput}
          />
        </div>
        <div className="Add-show">
          <AddShow updateShows={this.updateShows} />
        </div>
        </div>
      </div>
    );
  }
}
export default App;
