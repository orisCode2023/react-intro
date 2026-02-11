import './Footer.css' 

function Footer({children}) {
  return (
    <footer className='footer-name'>
        <p className='footer-context'>{children}</p>
    </footer>
  )
}

export default Footer