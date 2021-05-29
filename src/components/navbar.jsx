function Navbar(props) {
  return (
    <div className="bg-gray-100">
      <a href="/" className="flex items-center px-8 py-2 space-x-4">
        <img className="w-10 h-10" src="https://pngimg.com/uploads/pokeball/small/pokeball_PNG19.png"
        alt="Pokeball" />
        <span className="font-bold">Pokedex</span>
      </a>
    </div>
  )
}

export default Navbar