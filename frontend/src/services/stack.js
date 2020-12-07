import axios from 'axios'
const baseUrl = '/api/stacks'

let token = null

const nullToken = () => {
  token = null
}

const setToken = newToken => {
  token = `bearer ${newToken}`
}


const getAll = () => {
  const req = axios.get(baseUrl)
  return req.then(res => res.data)
}

const update = async (id, newObject) => {
  const config = {
    headers: { Authorization: token },
  }

  const res = await axios.put(`${baseUrl}/${id}`, newObject, config)
  return res.data
}



const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  }

  const res = await axios.post(baseUrl, newObject, config)
  return res.data
}



const remove = async (id) => {
  const config = {
    headers: { Authorization: token },
  }
  const res = axios.delete(`${baseUrl}/${id}`, config)
  return res.data
}

export default { getAll, create, update, setToken, nullToken, remove }