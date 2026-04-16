export const RoomTemplate = (messageLocation: string, messageDescription: string, additionalMessage?: string) => {
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
        </div>
    )
}

export { RoomTemplate as RoomTemplateComponent };
