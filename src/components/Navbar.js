import PropTypes from 'prop-types';
import { NavLink, Link } from "react-router";

export default function Navbar(props) {
    const redstyle = {
        height: '15px',
        width: '15px',
        backgroundColor: 'red',
        borderRadius: '50%',
        display: 'inline-block'
      }
      const greenstyle = {
        height: '15px',
        width: '15px',
        backgroundColor: 'green',
        borderRadius: '50%',
        display: 'inline-block'
      }
      const blackstyle = {
        height: '15px',
        width: '15px',
        backgroundColor: 'black',
        borderRadius: '50%',
        display: 'inline-block'
      }
      const purplestyle = {
        height: '15px',
        width: '15px',
        backgroundColor: 'purple',
        borderRadius: '50%',
        display: 'inline-block'
      }
      const yellowstyle = {
        height: '15px',
        width: '15px',
        backgroundColor: 'yellow',
        borderRadius: '50%',
        display: 'inline-block'
      }
      
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.aboutText}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about/contact">Contact</Link>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                        <span className="dot mx-1" style = {redstyle} onClick={()=> props.setColorPallete("red")}></span>
                        <span className="dot mx-1" style = {greenstyle} onClick={()=> props.setColorPallete("green")}></span>
                        <span className="dot mx-1" style = {blackstyle} onClick={()=> props.setColorPallete("black")}></span>
                        <span className="dot mx-1" style = {purplestyle} onClick={()=> props.setColorPallete("purple")}></span>
                        <span className="dot mx-2" style = {yellowstyle} onClick={()=> props.setColorPallete("yellow")}></span>
                        <div className={`form-check form-switch text-${(props.mode === 'light') ? 'dark' : 'light'}`}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
Navbar.propTypes = { title: PropTypes.string.isRequired, aboutText: PropTypes.string }

Navbar.defaultProps = { title: "Set title here", aboutText: "Set About text here" }