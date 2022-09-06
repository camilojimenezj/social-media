import axios from 'axios'
const baseUrl = 'http://localhost:3000/api/posts/'

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