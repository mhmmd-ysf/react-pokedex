import Type from './type'

function Minicard(props) {
  return (<div className={`p-2 flex flex-col items-center justify-between max-w-sm mx-auto my-8 overflow-hidden border rounded shadow-lg h-40 w-40`}>
    <div className={`flex justify-center w-40`}>
      <img className={`h-24`} src={ props.pokemon.image } alt={ props.pokemon.name } />
    </div>
    <div>
      <div className="px-6 py-1">
        <div className="text-xl font-bold">{ props.pokemon.name }</div>
      </div>
      {/* <div className="px-4 py-1">
        {
          props.pokemon.types.map((item, idx) => {
            return <Type key={idx} type={ item }></Type>
          })
        }
      </div> */}
    </div>
  </div>)
}

export default Minicard