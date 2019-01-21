import React, { Component } from "react"
import PropTypes from 'prop-types'
import Story from "../../components/Story/index"

class StoryList extends Component {
  renderStories(items) {
    return items.map(item => <Story key={item.id} item={item} />)
  }

  render() {
    const items = this.props.items

    return (
      <div className="story-list">
        {items && items.length > 0
          ? this.renderStories(items)
          : <p className="errorMessage">No stories available</p>
        }
      </div>
    )
  }
}

StoryList.propTypes = {
  items: PropTypes.array.isRequired
}

export default StoryList
