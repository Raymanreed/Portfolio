import { useState } from 'react';
import { HouseLayout } from '../../assets/houseLayout';
import { RoomTemplateComponent } from '../../components/rooms/roomTemplate';

export const HouseExploration = () => {
    const [currentLocation, setCurrentLocation] = useState<string>('entrance')

    const handleClick = (connector: string) => {
        setCurrentLocation(connector)
        return;
    }

    const currentRoomLabel = HouseLayout[currentLocation as keyof HouseLayout].label

    const roomAccess = Object.values(HouseLayout[currentLocation as keyof HouseLayout].connectingRooms).map((connections) => {
        return (
            <button onClick={() => handleClick(connections)}>
                {`${HouseLayout[connections as keyof HouseLayout].label}`}
            </button>
        )
    })

    const roomMessages = Object.values(HouseLayout[currentLocation as keyof HouseLayout].messages) as string[];

    return (
        <div className="house-container">
            <div>
                <h2>{`You are currently in: ${currentRoomLabel}`}</h2>
            </div>
            <div className="house-room-display">
                {RoomTemplateComponent(roomMessages[0], roomMessages[1], roomMessages[2])}
            </div>
            <div className="house-room-choice-container">
                {roomAccess}
            </div>
        </div>
    )

}

export { HouseExploration as HouseExplorationComponent };