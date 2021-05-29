import Type from '../components/type'

function Card(props) {
  return (<div className={`flex flex-col justify-between max-w-sm mx-auto my-8 overflow-hidden border rounded shadow-lg h-80 w-80`}>
    <div className={`flex justify-center w-80`}>
      <img className={`h-60`} src={ props.pokemon.image } alt={ props.pokemon.name } />
    </div>
    <div>
      <div className="px-6 py-1">
        <div className="text-xl font-bold">{ props.pokemon.name }</div>
      </div>
      <div className="px-4 py-1">
        {
          props.pokemon.types.map((item, idx) => {
            return <Type key={ idx } type={ item }></Type>
          })
        }
      </div>
    </div>
  </div>)
}

export default Card