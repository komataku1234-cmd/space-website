import { Routes, Route } from 'react-router-dom'
import Home from './component/Home.tsx'
import Destination from './component/Destination.tsx'
import Layout from './Layout'

function App() {

  return (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="destination" element={<Destination />} />
      </Route>
    </Routes>
  </>
  )
}

export default App
