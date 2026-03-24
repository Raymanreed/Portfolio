function DisclaimerComponent() {
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
    <div className="tooltip-container">
        <div className="tooltip-icon" onClick={displayTooltip} onMouseLeave={hideTooltip}>Disclaimer</div>
        <div style={tooltipDisplayStyle} className="tooltip-display">Due to Github pages, refreshing will cause the page to break. You have been warned!</div>
    </div>)
}

export default DisclaimerComponent;