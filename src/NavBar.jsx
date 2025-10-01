import Logo from './assets/logo.svg'
import { Link } from 'react-router-dom'
import downarrow from './assets/arrow-down.svg'
import globe from './assets/icon-global.svg'


function NavBar() {
    return (
        <nav className="navbar-wrapper navbar navbar-expand-lg mt-3">
            <div className="container">
                <div>
                    <Link className="navbar-brand" to="/"><img src={Logo}/></Link>
                </div>
                <div>
                    <button className="navbar-toggler" type="button" 
                        data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="lan gap-2 flex d-flex flex-row align-items-center">
                    <img src={downarrow} className=""/>
                    <span>EN</span>
                    <img src={globe}/>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
