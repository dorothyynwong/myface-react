import './App.scss'
import {CreateUserDetailForm} from './users/CreateUserDetailForm.tsx'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import UserDetails from './users/UserDetails.tsx'
import PostsList from './posts/PostsList.tsx'
import HamburgerBtn from './menu/HamburgerBtn.tsx';
import Menu from './menu/Menu.tsx';
import {useState} from 'react';

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);  
  const toggleMenu = () => {
    setIsMenuVisible(prevState => !prevState);
  };
  
  return (
    <>
    <HamburgerBtn onClick={toggleMenu} />
    <div><Menu isVisible = {isMenuVisible}/></div>
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
