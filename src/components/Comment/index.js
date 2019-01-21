import React from "react"
import PropTypes from "prop-types"

const Comment = ({ item }) => (
  <div key={item.id} className="comment">
    <p className="comment-body">{item.text}</p>
    <p className="comment-author">{item.by}</p>
  </div>
)

Comment.propTypes = {
  item: PropTypes.object.isRequired
}

export default Comment
