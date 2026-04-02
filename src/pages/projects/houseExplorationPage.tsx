import { useState } from 'react';

interface houseLayout {
    entrance: {
        connectingRooms: Array<string>;
    },
    backyard: {
        connectingRooms: Array<string>;
    },
    parlor: {
        connectingRooms: Array<string>;
    },
    basement: {
        connectingRooms: Array<string>;
    },
    guestBedroom: {
        connectingRooms: Array<string>
    },
    attic: {
        connectingRooms: Array<string>
    },
    masterBathroom: {
        connectingRooms: Array<string>
    },
    foyer: {
        connectingRooms: Array<string>
    },
    livingRoom: {
        connectingRooms: Array<string>
    },
    kitchen: {
        connectingRooms: Array<string>
    },
    diningRoom: {
        connectingRooms: Array<string>
    },
    upstairs: {
        connectingRooms: Array<string>
    },
    masterBedroom: {
        connectingRooms: Array<string>
    }
}

function HouseExploration() {
    const [currentLocation, setCurrentLocation] = useState<string>('foyer')

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

    const handleClick = (connector: string) => {
        setCurrentLocation(connector)
        return;
    }

    const roomAccess = Object.values(houseLayout[currentLocation as keyof houseLayout].connectingRooms).map((connections) => {
        return (
        <button onClick={() => handleClick(connections)}>
            {`${connections}`}
        </button>
        )
    })

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

    // const generateControls = (connectingRooms: Array<string>) => {
    //     const controlButton = (
    //         <div>
    //             <button className={``} />
    //         </div>
    //     )
    // }

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
                {roomAccess}
            </div>
        </div>
    )

}

export default HouseExploration;