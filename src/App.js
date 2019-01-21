import React, { Component } from "react"
import * as api from "./api/index"
import StoryList from "./containers/StoryList/index"
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      results: []
    }

    this.fetchStories = this.fetchStories.bind(this)
  }

  componentDidMount() {
    this.fetchStories()
  }

  fetchStories() {
    api.fetchTopStories()
      .then(result => {
        let stories = result.slice(0, 10).map(api.fetchItem)
        Promise.all(stories)
          .then(data => this.setState({ results: data }))
      })
  }

  render() {
    const { results } = this.state
    return (
      <div className="app">
        <h1 className="title">Hacker News Top Stories</h1>
        {results && results.length > 0 
          ? <StoryList items={results} />
          : <p>Whoops, something went wrong</p>
        }
      </div>
    )
  }
}

export default App
