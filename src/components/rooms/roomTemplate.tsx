export const RoomTemplate = (messageLocation: string, messageDescription: string, additionalMessage?: string) => {
    return (
        <div>
            <h2>{messageLocation}</h2>
            <h3>{messageDescription}</h3>
            <br />
            {
                !messageDescription ?
                    <></> :
                    <h3>{additionalMessage}</h3>
            }
        </div>
    )
}

export { RoomTemplate as RoomTemplateComponent };
