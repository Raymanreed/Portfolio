import { useState } from 'react';

export interface houseLayout {
    entrance: {
        connectingRooms: Array<string>;
        messages: Array<string>
    },
    backyard: {
        connectingRooms: Array<string>;
        messages: Array<string>
    },
    parlor: {
        connectingRooms: Array<string>;
        messages: Array<string>
    },
    basement: {
        connectingRooms: Array<string>;
        messages: Array<string>;
    },
    guestBedroom: {
        connectingRooms: Array<string>;
        messages: Array<string>;
    },
    attic: {
        connectingRooms: Array<string>;
        messages: Array<string>;
    },
    masterBathroom: {
        connectingRooms: Array<string>;
        messages: Array<string>;
    },
    foyer: {
        connectingRooms: Array<string>;
        messages: Array<string>;
    },
    livingRoom: {
        connectingRooms: Array<string>;
        messages: Array<string>;
    },
    kitchen: {
        connectingRooms: Array<string>;
        messages: Array<string>;
    },
    diningRoom: {
        connectingRooms: Array<string>;
        messages: Array<string>;
    },
    upstairs: {
        connectingRooms: Array<string>;
        messages: Array<string>;
    },
    masterBedroom: {
        connectingRooms: Array<string>;
        messages: Array<string>;
    }
}

function HouseExploration() {
    const [currentLocation, setCurrentLocation] = useState<string>('entrance')

    const houseLayout: houseLayout = {
        entrance: {
            connectingRooms: ['foyer'],
            messages: ["You're standing at the entrance to the house.","What do you do?"]
        },
        backyard: {
            connectingRooms: ['livingRoom'],
            messages: ["You step out into the backyard. It's pretty spacious out here.", "Unfortunately, there isn't much else to see"]
        },
        parlor: {
            connectingRooms: ['foyer'],
            messages: ["You step into the parlor. It's pretty small and there is some seating.", "There is a small bar in the corner with some bottles of alcohol on top."]
        },
        basement: {
            connectingRooms: ['kitchen'],
            messages: []
        },
        guestBedroom: {
            connectingRooms: ['upstairs'],
            messages: []
        },
        attic: {
            connectingRooms: ['upstairs'],
            messages: []
        },
        masterBathroom: {
            connectingRooms: ['masterBedroom'],
            messages: []
        },
        foyer: {
            connectingRooms: ['entrance', 'livingRoom', 'kitchen', 'parlor'],
            messages: ["You step into the foyer of the house.", "It's a small modern home. Hardwood floor, a small table with a bowl for keys, and a few pairs of shoes sit underneath a bench. You can see a parlor to your left, the living room straight ahead, and the kitchen to your right.", "You can also walk out the door you just came in through."]
        },
        livingRoom: {
            connectingRooms: ['foyer', 'diningRoom', 'backyard', 'upstairs'],
            messages: []
        },
        kitchen: {
            connectingRooms: ['foyer', 'diningRoom', 'basement'],
            messages: []
        },
        diningRoom: {
            connectingRooms: ['kitchen', 'livingRoom'],
            messages: []
        },
        upstairs: {
            connectingRooms: ['livingRoom', 'guestBedroom', 'masterBedroom', 'attic'],
            messages: []
        },
        masterBedroom: {
            connectingRooms: ['upstairs', 'masterBathroom'],
            messages: []
        }
    }

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

    const roomMessages = Object.values(houseLayout[currentLocation as keyof houseLayout].messages) as string[];

    // const displayRoom = (location: string) => {
    //     let currentRoom;
    //     switch (location) {
    //         case 'entrance':
    //             currentRoom = entranceRoom;
    //             break;
    //         default:
    //             currentRoom = entranceRoom;
    //             break;
    //     }
    //     return currentRoom;
    // }

    const RoomTemplate = (messageLocation: string, messageDescription: string, additionalMessage?: string) => {
        console.log(messageLocation)
        console.log(messageDescription)
        return (
                <div>
                    <h2>{messageLocation}</h2>
                    <h3>{messageDescription}</h3>
                    <br />
                    {
                        !additionalMessage ?
                            <></> :
                            <h3>{additionalMessage}</h3>
                    }
                </div>
    )};

    return (
        <div className="house-container">
            <div>
                <h2>{`You are currently in: ${currentLocation}`}</h2>
            </div>
            <div className="house-room-display">
                {/* {displayRoom(currentLocation)} */}
                {RoomTemplate(roomMessages[0], roomMessages[1], roomMessages[2])}
            </div>
            <div className="house-room-choice-container">
                {roomAccess}
            </div>
        </div>
    )

}

export default HouseExploration;