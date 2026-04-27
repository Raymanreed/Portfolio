export const RoomTemplate = (messageLocation: string, messageDescription: string, location: string, additionalMessage?: string) => {
    return (
        <div className="house-display-room-info">
            <p className="room-text">{messageLocation}</p>
            <p className="room-text">{messageDescription}</p>
            {
                !messageDescription ?
                    <></> :
                    <p className="room-text">{additionalMessage}</p>
            }
            <div className="location-image-container">
                <img src={`./${location}-image.jpg`} alt={`${location}-img`} className="room-image"></img>
            </div>
        </div>
    )
}

export { RoomTemplate as RoomTemplateComponent };
