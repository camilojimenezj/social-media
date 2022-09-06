import axios from 'axios'
const baseUrl = 'http://localhost:3000/api/users/'

export const registerUser = async (data) => {
  const res = await axios.post(baseUrl, data);
  return res.data
}

export const getAUser = async (id) => {
  const res = await axios.get(baseUrl + id);
  return res.data
}

export const editUser = async (id, data) => {
  const res = await axios.put(baseUrl + id, data);
  return res.data
}