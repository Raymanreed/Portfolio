import { NavLink } from "react-router"

function Headband() {
    let tooltipDisplayStyle = {
        display: 'none'
    }

    const displayTooltip = () => {
        tooltipDisplayStyle = {
            display: 'block'
        }
        return
    }
    const hideTooltip = () => {
        tooltipDisplayStyle = {
            display: 'none'
        }
        return
    }

    return (
        <div className="headband-bar">
            <nav className="headband-item-container">
                <div className="headband-item-1 home-link headband-nav-item">
                    <NavLink to="/">
                        Projects Home
                    </NavLink>
                </div>
            </nav>
            <div className="tooltip-container">
                <div className="tooltip-icon" onClick={displayTooltip} onMouseLeave={hideTooltip}>Disclaimer</div>
                <div style={tooltipDisplayStyle} className="tooltip-display">Due to Github pages, refreshing will cause the page to break. You have been warned!</div>
            </div>
        </div>
    )
}

export default Headband