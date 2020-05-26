import React, { Component } from 'react'
//Step 1 Import Logo
import logo from '../images/logo.svg';
//Step 2 Icon
import {FaAlignRight} from 'react-icons/fa';
//Step 3 Link from react router dom
import  {Link} from 'react-router-dom';




export default class Navbar extends Component {

    //Step 1 for nav bar close open
    state={
        isOpen: false
    }
    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }

    render() {
        return (
            //navbar
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to ="/">
                            <img src={logo}  alt="Beach Resort" />  
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon"/>
                        </button>
                    </div>
                    <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                        <li>
                           <Link to='/'>Home</Link> 
                        </li>
                        <li>
                           <Link to='/rooms'>Rooms</Link> 
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
