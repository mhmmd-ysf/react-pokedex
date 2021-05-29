import axios from 'axios'

axios.create({
  // baseURL: 'https://graphql-pokemon2.vercel.app/',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default axios