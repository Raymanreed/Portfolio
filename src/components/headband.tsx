import { NavLink } from "react-router"

function Headband() {
    return (
        <div className="headband-bar">
            <nav className="headband-item-container">
                <div className="headband-item-1 home-link headband-nav-item">
                    <NavLink to="/Projects">
                        Projects Home
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Headband