import React, { Component } from 'react'

class EditReview extends Component{
    constructor(props){
        super(props)
        this.state = {
            editForm: false,
            review: ''
         }
    }

    updateReviewInput = (e) => {
        this.setState({ review: e.target.value });
      };

    render(){
        return(
            <div>
                {this.state.editForm ?
                 <div>
                 <input onChange={this.updateReviewInput} placeholder='Edit Review'/>
                 <button onClick={()=> this.props.updateShowReview(this.props.show.id)}>Add</button>
                 </div>:   
                <button onClick={()=> this.setState({editForm: true})}>Edit Review</button>}
            </div>
        )
    }
}

export default EditReview