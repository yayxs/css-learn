import axios from 'axios'

export function getUserListApi () {
  return axios.get('http://jsonplaceholder.typicode.com/users')
}
