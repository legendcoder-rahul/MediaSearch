import { useDispatch, useSelector } from "react-redux"
import { setActiveTabs, } from "../redux/features/searchSlice"

const Tabs = () => {
  const tabs = ['photos','videos', 'GIF']

  const dispatch = useDispatch()
  const activeTab = useSelector((state)=>state.search.activeTab)
  
  return (
    <div className="flex gap-10 p-10">
      {tabs.map((elem,idx)=>{
        return (
         <button 
         className={`${activeTab==elem?'bg-blue-700':'bg-gray-500'} cursor-pointer active:scale-95 px-5 py-2 rounded uppercase`}
         key={idx} 
         onClick={()=>{
          dispatch(setActiveTabs(elem))

        }}
        >
          {elem}
          </button>
        )
      })}
    </div>
  )
}
export default Tabs
