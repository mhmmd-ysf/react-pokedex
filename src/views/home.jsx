import { useState } from 'react'
import Card from '../components/card'
import InfiniteScroll from 'react-infinite-scroll-component';
import Type from '../components/type'

function Home(props) {
  let arr = [ 'Normal', 'Grass', 'Fire', 'Water', 'Flying', 'Fighting', 'Psychic', 'Ghost',
    'Rock', 'Ground', 'Fairy', 'Steel', 'Bug', 'Electric', 'Dark', 'Ice', 'Dragon', 'Poison'
  ]
  
  const [ filtered, setFiltered ] = useState([])
  const [ triggered, setTriggered ] = useState(false)
  function seeDetail(id) {
    props.seeDetails(id)
  }

  function fetchMore() {
    props.fetchMore()
  }

  function filterType(type) {
    let filterState = props.pokemon.filter(item => {
      if(item.types.includes(type)) {
        return true
      } else {
        return false
      }
    })
    setTriggered(true)
    if(!type) {
      setTriggered(false)
    }
    setFiltered(filterState)
  }

  return (<div className="flex flex-wrap p-5 md:p-10">
    <div className="flex flex-wrap justify-between break-all">
      <a href="/" onClick={ e => {e.preventDefault(); filterType('')}}>
        <span className="flex items-center inline-block px-3 py-1 mr-2 space-x-2 text-sm font-semibold border rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p>
            Clear
          </p>
        </span>
      </a>
      {
        arr.map((item, idx) => {
          return (
            <a href="/" key={ idx } className="my-1" onClick={ e => { e.preventDefault(); filterType(item) }}>
              <Type type={ item }></Type>
            </a>
          )
        })
      }
    </div>
    {
      <InfiniteScroll
        className="flex flex-wrap justify-center space-x-5"
        dataLength={props.pokemon.length} //This is important field to render the next data
        next={fetchMore}
        hasMore={true}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }>{
          filtered.length ?
            filtered.map((item, idx) => {
              return (
                <a href="/" onClick={ e => {e.preventDefault(); seeDetail(item.id)}}>
                  <Card pokemon={item} key={idx}></Card>
                </a>
              )
            })
          : !filtered.length && !triggered ?
          props.pokemon.map((item, idx) => {
            return (
              <a href="/" onClick={ e => {e.preventDefault(); seeDetail(item.id)}}>
                <Card pokemon={item} key={idx}></Card>
              </a>
            )
          })
          : null
        }</InfiniteScroll>
    }
  </div>)
}

export default Home