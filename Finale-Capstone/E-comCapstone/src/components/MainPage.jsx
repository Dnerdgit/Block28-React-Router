import React from 'react'
import SignIn from './SignIn'
import AllProducts from './AllProducts'
// import Navbar from './Navbar'

const MainPage = () => {
  return (
    <React.Fragment>
        <section>
            <div className="layout">
                {/* <div className="sign-in">
                    <SignIn/>
                </div> */}
                <div className="all-products">
                    <AllProducts/>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default MainPage