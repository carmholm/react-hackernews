import React from "react"
import PropTypes from "prop-types"
import { createMarkup } from "../../utils"

const Comment = ({ item }) => (
  <div key={item.id} className="comment">
    <div dangerouslySetInnerHTML={createMarkup(item.text)} className="comment-body" />
    <p className="comment-author">{item.by}</p>
  </div>
)

Comment.propTypes = {
  item: PropTypes.object.isRequired
}

export default Comment
