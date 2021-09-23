import "./Show.css";
import EditReview from "./editReview";
const Shows = (props) => {
  return (
    <div className="Shows">
      <div>
        <img src={props.show.imgUrl} alt="" className="img" />
      </div>
      <div>
        <div className="Button-container">
          <button
            className="Delete-button"
            onClick={() => props.deleteShow(props.show.id)}
          >
            DELETE
          </button>
        </div>
        <h2 className="Show-title">{props.show.title}</h2>
        <div className="Review-container">
          <h4 className="Show-review1">Review</h4>
          <p className="Username">Episodes Watched: {props.show.episodesWatched}</p>
          <div className="Show-review2">"{props.show.review}"</div>
          <EditReview
            updateShowReview={props.updateShowReview}
            show={props.show}
            // updateReviewInput={props.updateReviewInput}
          />
        </div>
      </div>
    </div>
  );
};

export default Shows;
