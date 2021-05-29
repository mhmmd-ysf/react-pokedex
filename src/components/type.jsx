function Type(props) {
  const type = props.type
  return <span className={`inline-block px-3 py-1 my-1 mr-2 text-sm font-semibold text-white rounded-full ${ 'bg-' + type }`}>{ props.damage ? props.damage + ' ' : null }{ props.name || type }</span>
}

export default Type