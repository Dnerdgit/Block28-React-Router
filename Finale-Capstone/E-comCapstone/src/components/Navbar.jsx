import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'
// import Avatar from '@mui/system'

const Navbar = () => {
  return (

    <>
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
                        <div className="search-bar"><Searchbar/></div>
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