import React, { Component } from "react"
import PropTypes from "prop-types"
import * as api from "../../api/index"
import Comment from "../../components/Comment/index"

class CommentList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: null
    }

    this.fetchComments = this.fetchComments.bind(this)
  }

  componentDidMount() {
    const comments = this.props.item.kids ? this.props.item.kids : []
    
    if (comments && comments.length > 0) {
      this.fetchComments(comments)
    } else this.setState({ comments })
  }

  fetchComments(items) {
    let comments = items.slice(0, 20).map(api.fetchItem)
      Promise.all(comments)
        .then(data => this.setState({ comments: data }))
  }

  renderList(items) {
    return items.map(item => <Comment key={item.id} item={item} />)
  }

  render() {
    const { comments } = this.state

    return (
      <div className="comment-list">
        {comments && comments.length > 0
          ? this.renderList(comments)
          : <p className="errorMessage">No comments</p>
        }
      </div>
    )
  }
}

CommentList.propTypes = {
  item: PropTypes.object.isRequired
}

export default CommentList
