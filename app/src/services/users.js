import axios from 'axios'
const baseUrl = 'http://localhost:3000/api/users/'

export const registerUser = async (data) => {
  const res = await axios.post(baseUrl, data);
  return res.data
}