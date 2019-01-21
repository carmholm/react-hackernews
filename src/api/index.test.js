import mockAxios from "axios";
import { fetchItem, fetchTopStories } from "./index";

const PATH_BASE = 'https://hacker-news.firebaseio.com/v0'

it('fetches top stories', async () => {
  const mockData = [ 1357, 2468 ]
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: mockData
    })
  )

  const stories = await fetchTopStories()

  expect(stories).toEqual(mockData)
  expect(mockAxios.get).toHaveBeenCalledWith(`${PATH_BASE}/topstories.json`)
})

it('fetches single story', async () => {
  const itemId = 12345
  const mockStory = { id: itemId, by: 'author', title: 'Hacker News Story', score: 111 }

  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: mockStory
    })
  )

  const story = await fetchItem(itemId)

  expect(story).toEqual(mockStory)
  expect(mockAxios.get).toHaveBeenCalledWith(`${PATH_BASE}/item/${itemId}.json`)
})
