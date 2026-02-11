import './Header.css'

function Header({children}) {
  return (
    <nav className='navbar'>
        <h1 className='headline'>{children}</h1>
    </nav>
  )
}

export default Header