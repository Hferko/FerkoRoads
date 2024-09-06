import logo from '../images/logo.png';
import { pageLinks, socialLinks } from '../data';
import {FaBars} from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="nav-logo" alt="FerkoRoads" />
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <FaBars/>
                    </button>
                </div>

                <ul className="nav-links" id="nav-links">
                    {pageLinks.map(link => {
                        return (
                            <li key={link.id}>
                                <a href={link.href} className="nav-link"> {link.text} </a>
                            </li>
                        )
                    })}
                </ul>

                <ul className="nav-icons">
                    {socialLinks.map(link => {
                        return (
                            <li key={link.id}>
                                <a href={link.href} target="_blank" rel="noreferrer" className="nav-icon">
                                    {/* <i className={link.icon}></i> */}
                                    {link.icon}
                                </a>
                            </li>
                        )
                    })}                  
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;