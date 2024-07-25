import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Myfetch from './data/fetchPosts.tsx'
import FetchUser from './data/fetchUserDetails.tsx'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0);
  const userId = "1";
//  <Link to={`/user/${userId}`}>Go to User Details</Link>
  return (
    <>
    <Router>
      <h1>MyFace</h1>

      <Routes>
        <Route path="/posts"
          element={<Myfetch/>}/>
        <Route path="/users/:userId"
          element={<FetchUser />}/>
        <Route path="*"
          element={<div>
             Sorry - that page doesn't exist, try these:
            <Link to="/posts"/>
            <Link to="/users"/>
        </div>}/>
    </Routes>
  </Router>

    </>
  )
}

export default App
