import { useState } from 'react';

function HouseExploration() {
    const [currentLocation, setCurrentLocation] = useState<string>('')

    const houseLayout = {
        entrance: {
            connectingRooms: ['foyer']
        },
        backyard: {
            connectingRooms: ['livingRoom']
        },
        parlor: {
            connectingRooms: ['foyer']
        },
        basement: {
            connectingRooms: ['kitchen']
        },
        guestBedroom: {
            connectingRooms: ['upstairs']
        },
        attic: {
            connectingRooms: ['upstairs']
        },
        masterBathroom: {
            connectingRooms: ['masterBedroom']
        },
        foyer: {
            connectingRooms: ['entrance', 'livingRoom', 'kitchen', 'parlor']
        },
        livingRoom: {
            connectingRooms: ['foyer', 'diningRoom', 'backyard', 'upstairs']
        },
        kitchen: {
            connectingRooms: ['foyer', 'diningRoom', 'basement']
        },
        diningRoom: {
            connectingRooms: ['kitchen', 'livingRoom']
        },
        upstairs: {
            connectingRooms: ['livingRoom', 'guestBedroom', 'masterBedroom', 'attic']
        },
        masterBedroom: {
            connectingRooms: ['upstairs', 'masterBathroom']
        }
    }

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

    // const changeRoom = () => {
    //     setCurrentLocation()
    // }

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