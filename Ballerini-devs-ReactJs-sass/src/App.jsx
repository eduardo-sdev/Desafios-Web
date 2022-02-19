import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import  { Home } from '../src/pages/Home'
import { Devs } from '../src/pages/Devs'

const App = () => {
  return (
        <>
            <Router>
                <Routes>
                     <Route exact path="/" element={<Home />} />
                     <Route path="/devs" element={<Devs />} />
                </Routes>
            </Router>
        </>
  )
}

export default App

