import axios from 'axios'
const baseUrl = 'http://localhost:3000/api/login/'

export const loginUser = async (data) => {
  const res = await axios.post(baseUrl, data);
  return res.data
}