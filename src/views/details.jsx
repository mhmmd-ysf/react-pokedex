import Minicard from '../components/minicard'
import Type from '../components/type'

function Details(props) {
  function seeDetail(id) {
    props.seeDetails(id)
  }

  return (<div>
    <div className="flex justify-center p-3 space-x-10 md:p-10">
      {/* Kiri - Gambar & evolution */}
      <div className="">
        <h1 className="text-2xl font-bold">{props.pokemon.name}</h1>
        <p>The {props.pokemon.classification}</p>
        <h2 className="my-4 text-xl font-bold">
          {
            props.pokemon.types.map((item, idx) => {
              return <Type key={ idx} type={ item }></Type>
            })
          }
        </h2>

        <img src={props.pokemon.image} alt={props.pokemon.name} />
      </div>
      {/* Kanan - Details */}
      <div className="hidden space-y-4 text-left md:block">
        {/* Weakness */}
        <h1 className="text-2xl font-bold">Weaknesses and Resistances</h1>
        <div className="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          {
            props.pokemon.weaknesses.map((item, idx) => {
              return <Type key={ idx } type={ item }></Type>
            })
          }
        </div>
        {/* Resistances */}
        <div className="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {
            props.pokemon.resistant.map((item, idx) => {
              return <Type key={idx} type={ item }></Type>
            })
          }
        </div>
        <h1 className="text-2xl font-bold">Attacks</h1>
        {/* Fast Attacks */}
        <div className="flex items-center space-x-3">
          <p>
            Fast
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
          {
            props.pokemon.attacks.fast.map((item, idx) => {
              return <Type key={idx} damage={ item.damage } name={ item.name } type={ item.type }></Type>
            })
          }
        </div>
        {/* Special Attacks */}
        <div className="flex items-center space-x-3">
          <p>
            Special
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
          </svg>
          {
            props.pokemon.attacks.special.map((item, idx) => {
              return <Type key={idx} name={ item.name } type={ item.type } damage={ item.damage }></Type>
            })
          }
        </div>
        <h1 className="text-2xl font-bold">More details</h1>
        <p>
          Height range: {props.pokemon.height.minimum} - {props.pokemon.height.maximum}
        </p>
        <p>
          Weight range: {props.pokemon.weight.minimum} - {props.pokemon.weight.maximum}
        </p>
        <h1 className="text-2xl font-bold">Evolutions</h1>
        <div className="flex space-x-5">
          {
            props.pokemon.evolutions ?
              props.pokemon.evolutions.map((item, idx) => {
                return (
                  <a href="/" onClick={e => { e.preventDefault(); seeDetail(item.id) }}>
                    <Minicard pokemon={item} key={idx}></Minicard>
                  </a>
                )
              })
              :
              <h1 className="text-xl">This pokemon cannot be evolved</h1>
          }
        </div>
      </div>
    </div>
    {/* Details Mobile */}
    <div className="p-5 space-y-4 text-left md:hidden">
      {/* Weakness */}
      <h1 className="text-2xl font-bold">Weaknesses and Resistances</h1>
      <div className="flex items-center space-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
        <div className="flex flex-wrap space-y-1">
          {
            props.pokemon.weaknesses.map((item, idx) => {
              return <Type key={idx} type={ item }></Type>
            })
          }
        </div>
      </div>
      {/* Resistances */}
      <div className="flex items-center space-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        <div className="flex flex-wrap space-y-1">
          {
            props.pokemon.resistant.map((item, idx) => {
              return <Type key={idx} type={ item }></Type>
            })
          }
        </div>
      </div>
      <h1 className="text-2xl font-bold">Fast & Special Attacks</h1>
      {/* Fast Attacks */}
      <div className="flex items-center space-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
        <div className="flex flex-wrap space-y-1">
          {
            props.pokemon.attacks.fast.map((item, idx) => {
              return <Type key={idx} name={ item.name } damage={ item.damage } type={ item.type }></Type>
            })
          }
        </div>
      </div>
      {/* Special Attacks */}
      <div className="flex items-center space-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
        </svg>
        <div className="flex flex-wrap space-y-1">
          {
            props.pokemon.attacks.special.map((item, idx) => {
              return <Type key={idx} name={ item.name } type={ item.type } damage={ item.damage }></Type>
            })
          }
        </div>
      </div>
      <h1 className="text-2xl font-bold">More details</h1>
      <p>
        Height range: {props.pokemon.height.minimum} - {props.pokemon.height.maximum}
      </p>
      <p>
        Weight range: {props.pokemon.weight.minimum} - {props.pokemon.weight.maximum}
      </p>
      <h1 className="text-2xl font-bold">Evolutions</h1>
      {
        props.pokemon.evolutions ?
          props.pokemon.evolutions.map((item, idx) => {
            return (
              <a href="/" onClick={e => { e.preventDefault(); seeDetail(item.id) }}>
                <Minicard pokemon={item} key={idx} h={20}></Minicard>
              </a>
            )
          })
          :
          <h1 className="text-xl">This pokemon cannot be evolved</h1>
      }
    </div>
  </div>)
}

export default Details