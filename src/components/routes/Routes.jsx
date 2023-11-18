import { Route, Routes } from 'react-router-dom'
import Results from '../results/Results'
import Notfound from '../notfound/Notfound'

export default function Routing() {
  return (
    <div>
      <Routes>        
          <Route path='' element={<Results/>} />
          <Route path='search' element={<Results/>} />
          <Route path='*' element={<Notfound/>} />
      </Routes>
    </div>
  )
}
