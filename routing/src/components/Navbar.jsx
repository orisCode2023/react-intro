import { NavLink } from 'react-router'
// import Dashboard from './Dashboard'
import Nested from './Nested'

function Navbar() {
  return (
    <div> <nav>
        <h1>logo</h1>
        <div className='links'></div>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/dashboard/nested'><Nested /></NavLink>
       
      </nav></div>
  )
}

export default Navbar