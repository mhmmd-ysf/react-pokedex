import { useState, useEffect } from 'react'
import './App.css';
import Navbar from './components/navbar'
import Home from './views/home'
import Details from './views/details'
import axios from './API/axios'

function App() {
  const [page, setPage] = useState('home')
  const [pokemon, setPokemon] = useState([])
  const [count, setCount] = useState(10)
  const [detail, setDetail] = useState({})

  useEffect(() => {
    fetchMore()
  }, [])

  function fetchMore() {
    axios({
      url: 'https://graphql-pokemon2.vercel.app/',
      method: 'post',
      data: {
        query: `query {
          pokemons(first: ${count}) {
            id, name, types, image
          }
        }`
      }
    })
      .then(({ data }) => {
        setCount(count + 10)
        console.log({ data })
        setPokemon(data.data.pokemons)
      })
      .catch(err => {
        console.log({ err })
      })
  }

  function seeDetails(id) {
    // alert(id+ 'ini dari app.js')
    axios({
      url: 'https://graphql-pokemon2.vercel.app/',
      method: 'post',
      data: {
        query: `query {
          pokemon(id: "${id}") {
            id, name, types, image,
            weight {
              minimum, maximum
            }
            height {
              minimum, maximum
            }
            classification, resistant, weaknesses,
            evolutions {
              id, name, types, image
            }
            attacks {
              fast { name, type, damage }
              special { name, type, damage }
            }
          }
        }`
      }
    })
      .then(({ data }) => {
        setDetail(data.data.pokemon)
        setPage('details')
      })
      .catch(err => {
        console.log({ err })
      })
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      {
        page === 'home' ?
        <Home pokemon={pokemon} fetchMore={fetchMore} seeDetails={seeDetails}></Home>
        : page === 'details' ?
        <Details pokemon={detail} seeDetails={seeDetails}></Details>
        : <div>404 Page Not Found :( </div>
      }
    </div>
  );
}

export default App;
