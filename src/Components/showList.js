import Shows from './Shows';

const Showlist = (props) => {
    return props.filteredShows.map((show, i) => {
        return(
          <Shows show={show} showI={i}
          updateShowReview={props.updateShowReview}
          deleteShow={props.deleteShow}
        //   updateReviewInput={props.updateReviewInput}
          />
        )
      })
}

export default Showlist;