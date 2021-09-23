import React, { Component } from "react";
import "./editReview.css";
class EditReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editForm: false,
      review: "",
    };
  }

  updateReviewInput = (e) => {
    this.setState({ review: e.target.value });
  };

  render() {
    return (
      <div>
        {this.state.editForm ? (
          <div>
            <input
            className='Input-Review'
              onChange={this.updateReviewInput}
              placeholder="Edit Review"
            />
            <button
              className='Add-Button'
              onClick={() => this.props.updateShowReview(this.props.show.id)}
            >
              Add
            </button>
          </div>
        ) : (
          <button
            className="Edit-Button"
            onClick={() => this.setState({ editForm: true })}
          >
            Edit Review
          </button>
        )}
      </div>
    );
  }
}

export default EditReview;
