import './styles/navbar.css'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'
import { Navbar, Nav } from 'react-bootstrap'
// import Avatar from '@mui/system'
import filterProducts  from './AllProducts'
// import { ProductConsumer } from './CartContext'

const Navigation = () => {
  return (

    <>
    <Navbar>
        <nav className="nav-header">
            <ul>
                <>
                    <li>
                        <Nav>
                            <Link to="/" className="site-title">
                                <div className="title">Stag's E-Commerce</div>
                            </Link>
                        </Nav>
                    </li>
                    <li>
                        <Nav>
                            <Link className="site-search">
                                <div className="search-bar"><Searchbar filterProducts={filterProducts}/></div>
                            </Link>
                        </Nav>
                    </li>
                    <li>
                        <Nav>
                            <Link to="/auth/login" className="site-log">
                                <div className="sign-in-link">Sign In</div>
                                    {/* <img className="sign-img"src="public/ECommerce photos/wjj8xils.bmp"/> */}
                            </Link>
                        </Nav>
                    </li>
                    <li>
                        <Nav>
                            <Link style={{color:"mediumspringgreen"}} to="/carts">
                                MyCart 
                            </Link>
                        </Nav>
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
                            <Link to="/products-list">All Products</Link>
                        </li>
                        <li>
                            <Link to="/category/electronics">Electronics</Link>
                        </li>
                        <li>
                            <Link to="/category/men's clothing">MensWear</Link>
                        </li>
                        <li>
                            <Link to="/category/women's clothing">WomensWear</Link>
                        </li>
                        <li>
                            <Link to="/category/jewelery">Jewelery</Link>
                        </li>
                    </>
                </ul>
            </nav>
        </Navbar>
    </>
  )
}

export default Navigation