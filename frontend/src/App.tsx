import './App.scss'
import {CreateUserDetailForm} from './users/CreateUserDetailForm.tsx'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import UserDetails from './users/UserDetails.tsx'
import PostsList from './posts/PostsList.tsx'


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/posts"
          element={<PostsList/>}/>
        <Route path="/users/:userId"
          element={<UserDetails/>}/>
        <Route path="/create_user" 
          element={<CreateUserDetailForm />}/>
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
