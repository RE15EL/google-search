import { Link } from "react-router-dom";
import Search from "../search/Search";


export default function Navbar({ darkTheme, setDarkTheme }) {
  return (
    <div className="p-8 pb-0 flex flex-wrap justify-center sm:justify-between items-center
                    border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <span className="text-2xl font-bold py-1 px-2 bg-gray-600 text-gray-200 rounded
                          dark:bg-gray-200 dark:text-gray-600"> 
            Search-App 
          </span>
        </Link>

        <button type="button" onClick={() => setDarkTheme(!darkTheme)}
                className="py-1 px-2 bg-gray-600 text-gray-200 rounded-full
                        dark:bg-gray-200 dark:text-gray-600 hover:shadow-lg" >
          { darkTheme ? '☀️' : '🌙' }
        </button>
      </div>

      <Search />
    </div>
  )
}
