import axios from 'axios'
const baseUrl = '/api/posts/'

export const getAllPosts = async (type) => {
  const res = await axios.get(baseUrl)
  const { data } = res
  return data
}

export const createPost = async (post) => {
  const res = await axios.post(baseUrl, post)
  const { data } = res
  return data
}

export const addComment = async (id, comment) => {
  const res = await axios.put(baseUrl + id + '/comments', comment)
  const { data } = res
  return data
}