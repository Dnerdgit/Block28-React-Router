import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'
import { Navbar, Nav } from 'react-bootstrap'
// import Avatar from '@mui/system'
import filterProducts  from './AllProducts'

const Navigation = () => {
  return (

    <>
    <Navbar>
            <nav className="nav-header">
                <ul>
                    <>
                    <li>
                        <Link to="/" className="site-title">
                            <div className="title">Stag's E-Commerce</div>
                        </Link>
                    </li>
                    <li>
                        <Link className="site-search">
                            <div className="search-bar"><Searchbar filterProducts={filterProducts}/></div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/auth/login" className="site-log">
                            <div className="sign-in-link"><div>Sign In</div></div>
                                {/* <img className="sign-img"src="public/ECommerce photos/wjj8xils.bmp"/> */}
                        </Link>
                    </li>
                    </>
                </ul>
            </nav>
    
            <nav className="nav">
                <ul>
                    <>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/category/electronics">Electronics</Link>
                    </li>
                    <li>
                        <Link to="/category/clothing">Clothing</Link>
                    </li>
                    <li>
                        <Link to="/category/jewelry">Jewelry</Link>
                    </li>
                    </>
                </ul>
            </nav>
        </Navbar>
    </>
  )
}

export default Navigation