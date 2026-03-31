import { useState } from 'react';

function HouseExploration() {
    const [currentLocation, setCurrentLocation] = useState<string>('')

    const entranceRoom = (
        <div>
            <h2>You're standing at the entrance to the house.</h2>
            <h3>What do you do?</h3>
        </div>
    )

    const displayRoom = (location: string) => {
        let currentRoom;
        switch (location) {
            case 'entrance':
                currentRoom = entranceRoom;
                break;
            default:
                currentRoom = entranceRoom;
                break;
        }
        return currentRoom;
    }

    return (
        <div className="house-container">
            <div>
                <h2>{`You are currently in: ${currentLocation}`}</h2>
            </div>
            <div className="house-room-display">
                {displayRoom(currentLocation)}
            </div>
            <div className="house-room-choice-container">
                
            </div>
        </div>
    )

}

export default HouseExploration;