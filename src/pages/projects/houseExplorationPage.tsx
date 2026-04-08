import { useState } from 'react';
import { HouseLayout } from '../../assets/houseLayout';
import { RoomTemplateComponent } from '../../components/rooms/roomTemplate';

export const HouseExploration = () => {
    const [currentLocation, setCurrentLocation] = useState<string>('entrance')

    const handleClick = (connector: string) => {
        setCurrentLocation(connector)
        return;
    }

    const handleActions = (action: string) => {
        console.log(action)
        return;
    }

    // Gets the current room's properties from the HouseLayout object.
    // Shortened to a variable to make easier to read.
    const currentRoomDynamic = HouseLayout[currentLocation as keyof HouseLayout]

    const currentRoomLabel = currentRoomDynamic.label
    const currentRoomMessages = Object.values(currentRoomDynamic.messages);

    const currentRoomConnections = Object.values(currentRoomDynamic.connectingRooms).map((connections) => {
        return (
            <button onClick={() => handleClick(connections)}>
                {`${HouseLayout[connections as keyof HouseLayout].label}`}
            </button>
        )
    })
    const currentRoomActions = Object.values(currentRoomDynamic.actions).map((actions) => {
        return (
            <button onClick={() => handleActions(actions[1])}>
                {actions[0]}
            </button>
        )
    })
    return (
        <div className="house-container">
            <div>
                <h2>{`You are currently in: ${currentRoomLabel}`}</h2>
            </div>
            <div className="house-room-display">
                {RoomTemplateComponent(currentRoomMessages[0], currentRoomMessages[1], currentRoomMessages[2])}
            </div>
            <div className="house-room-actions">
                {currentRoomActions}
            </div>
            <div className="house-room-choice-container">
                {currentRoomConnections}
            </div>
        </div>
    )

}

export { HouseExploration as HouseExplorationComponent };