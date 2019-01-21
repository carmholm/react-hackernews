import React from "react"
import PropTypes from "prop-types"
import CommentList from "../../containers/CommentList/index"

const Story = ({ item }) => (
  <div key={item.id} className="story">
    <div className="story-score">
      <div className="story-score--circle">
        <p>{item.score}</p>
      </div>
    </div>
    <div className="story-details">
      <div className="story-body">
        <a href={item.url} className="story-title">{item.title}</a>
        <p className="story-author">by {item.by}</p>
      </div>
      <CommentList item={item} />
    </div>
  </div>
)

Story.propTypes = {
  item: PropTypes.object.isRequired
}

export default Story
