import { Routes, Route } from 'react-router-dom'
import Home from './component/Home.tsx'
import Destination from './component/Destination.tsx'
import Crew from './component/Crew.tsx'
import Layout from './Layout'


function App() {

  return (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
      </Route>
    </Routes>
  </>
  )
}

export default App
