import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <>
    <Link href="/" className="site-title">
        <div className="title">Stranger's Things</div>
      </Link>
    <nav className="nav">
      <ul>
        <>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/electronics">Electronics</Link>
          </li>
          <li>
            <Link to="/clothing">Clothing</Link>
          </li>
          <li>
            <Link to="/jewelry">Jewelry</Link>
          </li>
        </>
      </ul>
    </nav>
    </>
  )
}

export default Navbar