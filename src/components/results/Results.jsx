import { useEffect } from "react";
import { useResultContext } from "../../context/ResultContextProvider"
import Loading from "../loader/Loading";
import { NavLink } from "react-router-dom";

export default function Results() {
  const {getResults, isLoading, results} = useResultContext();
  
useEffect(()=>{
  getResults()
}, [])

  if (isLoading) return <Loading/>;

  return (
    <div className="flex flex-wrap justify-center items-center space-y-6 sm:px-56">
      { !results.length > 0 
          ? <div className="text-3xl"> Error fetching data 😒 </div>
          : results.map( (item, i)=>{
              return  <div key={i} className="md:w-2/5 w-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 mr-4 rounded-md">
                        <NavLink to={item.url} > 
                          <p className="text-sm"> 
                            {item.url.length > 30 ? item.url.substring(0, 30) : item.url}
                          </p>
                          <p className="text-lg hover:underline dark:text-blue-300 text-blue-700"> 
                            {item.title}
                          </p>
                        </NavLink>
                      </div>
      })}
    </div>
  )
}
