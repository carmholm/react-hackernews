import axios from 'axios'

const PATH_BASE = 'https://hacker-news.firebaseio.com/v0'

export async function fetchTopStories() {
  try {
    const response = await axios.get(`${PATH_BASE}/topstories.json`)
    return response.data
  } catch (err) { 
    console.error(err)
  }

}

export async function fetchItem(item) {
  try {
    const response = await axios.get(`${PATH_BASE}/item/${item}.json`)
    return response.data
  } catch (err) {
    console.error(err)
  }
}
