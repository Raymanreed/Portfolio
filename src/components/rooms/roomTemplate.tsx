export const RoomTemplate = (messageLocation: string, messageDescription: string, location: string, additionalMessage?: string) => {
    return (
        <div className="house-display-room-info">
            <text className="room-text-location">{messageLocation}</text>
            <text className="room-text-description">{messageDescription}</text>
            <br />
            {
                !messageDescription ?
                    <></> :
                    <text className="room-text-additional">{additionalMessage}</text>
            }
            <div className="location-image-container">
                <img src={`${location}-image.jpg`} alt={`${location}-img`} className="room-image"></img>
                <img src="/entrance-image.jpg" alt="testImage"></img>
            </div>
        </div>
    )
}

export { RoomTemplate as RoomTemplateComponent };
