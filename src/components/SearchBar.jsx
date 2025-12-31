import { useState } from "react"

const SearchBar = () => {

  const [first, setfirst] = useState('')

  const submitHandler = ()=>{
    
  }
  return (
    <div>
      <form className="flex bg-gray-900 gap-5 p-10">
        <input 
        required
        className="w-full border-2 px-4 py-2 text-xl rounded outline-none"
        type="text"
        placeholder='Search anything...'
         />
        <button className="active:scale-95 cursor-pointer border-2 px-4 py-2 text-xl rounded outline-none">Search</button>
      </form>
    </div>
  )
}

export default SearchBar
