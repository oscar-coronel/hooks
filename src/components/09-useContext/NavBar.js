import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    
    return <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">
                    useContext
                </NavLink>

                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <NavLink to="/" activeclassname="active" className="nav-link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink to="/about" activeclassname="active" className="nav-link">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/login" activeclassname="active" className="nav-link">
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div> 
        </nav>       
    </>

}