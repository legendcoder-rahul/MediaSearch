import { fetchPhoto, fetchVideos } from "./api/mediaApi"
import SearchBar from "./components/SearchBar"


const App = () => {


  return (
    <div className='bg-gray-950 h-screen w-full text-white'>
      <SearchBar/>
    </div>
  )
}

export default App
