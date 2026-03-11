import { NavLink } from "react-router"

function Headband() {
    return (
        <div className="headband-bar">
            <nav className="headband-item-container">
                <div className="headband-item-1 home-link headband-nav-item">
                    <NavLink to="/">
                        Home
                    </NavLink>
                </div>
                <div className="headband-item-2 headband-nav-item">
                    <NavLink to="test">
                        Test Page
                    </NavLink>
                </div>
                <div className="headband-item-3 headband-nav-item">
                    <NavLink to="nested">
                        Nested Page
                    </NavLink>
                </div>
                <div className="headband-item-4 stories-link headband-nav-item">
                    <NavLink to="stories">
                        Stories
                    </NavLink>
                </div>
                <div className="headband-item-5 project-link headband-nav-item">
                    <NavLink to="projects">
                        Projects
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Headband