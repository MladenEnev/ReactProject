import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
import {ButtonContainer} from './Button'

class Navbar extends React.Component{
    render(){
        return(
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk  */}
                <Link to='/'>
                    <img src={logo} alt='store' className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml5"></li>
                    <Link to="/productlist" className="nav-link">
                        products
                    </Link>
                </ul>
                <Link to='/login' className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-sign-in-alt"></i>
                        </span>
                    </ButtonContainer> 
                </Link>
                <Link to='/register' className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-registered"></i>
                        </span>
                    </ButtonContainer> 
                </Link>
                <Link to='/cart' className="ml-auto">
                    <ButtonContainer>
                      <span className="mr-2">
                      <i className="fas fa-cart-plus" />
                         my cart
                        </span>
                    </ButtonContainer>  
                </Link>      
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform:capitalize;

}
`

export default Navbar;