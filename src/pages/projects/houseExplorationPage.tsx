import { useState } from 'react';
import { HouseLayout } from '../../assets/houseLayout';
import { RoomTemplateComponent } from '../../components/rooms/roomTemplate';

export const HouseExploration = () => {
    const [currentLocation, setCurrentLocation] = useState<string>('entrance')
    const [currentInventory, setCurrentInventory] = useState<string[]>([])
    const [actionOutput, setActionOutput] = useState<string>()
    const [hasSearched, setSearched] = useState<boolean>(false)

    const handleNavigation = (connector: string) => {
        setCurrentLocation(connector)
        setActionOutput('')
        setSearched(false)
        console.log(currentInventory)
        return;
    }

    // Gets the current room's properties from the HouseLayout object.
    // Shortened to a variable to make easier to read.
    const currentRoomDynamic = HouseLayout[currentLocation as keyof HouseLayout]

    const handleSearchAction = (output: string) => {
        setActionOutput(output)
        setSearched(true)
        return
    }

    const handleUseAction = () => {
        if (!currentRoomDynamic.hasItem) {
            setActionOutput("You don't think that there is anything here.")
            return;
        };
        if (currentInventory.includes(currentRoomDynamic.items.itemContained)) {
            setActionOutput("There isn't anything else to do here.")
            return;
        }
        if (currentRoomDynamic.actions.use.requiredItem === undefined && currentRoomDynamic.items.itemContained != "") {
            setCurrentInventory([...currentInventory, currentRoomDynamic.items.itemContained])
            setActionOutput(currentRoomDynamic.actions.use.message)
            console.log(currentInventory)
            return;
        }
        if (!currentInventory.includes(currentRoomDynamic.actions.use.requiredItem as string)) {
            setActionOutput("There is something here, but you are missing something needed to get it.")
            return;
        }
        if (currentInventory.includes(currentRoomDynamic.actions.use.requiredItem as string)) {
            setCurrentInventory([...currentInventory, currentRoomDynamic.items.itemContained])
            setActionOutput(currentRoomDynamic.actions.use.message)
            return;
        }
        return;
    }

    const currentRoomLabel = currentRoomDynamic.label
    const currentRoomMessages = Object.values(currentRoomDynamic.messages);

    const currentRoomConnections = Object.values(currentRoomDynamic.connectingRooms).map((connections) => {
        return (
            <button onClick={() => handleNavigation(connections)}>
                {`${HouseLayout[connections as keyof HouseLayout].label}`}
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
            <div className="house-room-action-output">
                {actionOutput}
            </div>
            <div className="house-room-actions">
                <div className={`${currentLocation}-search`}>
                    <button className={`${currentLocation}-search-button`} onClick={() => handleSearchAction(currentRoomDynamic.actions.search.result)}>
                        {currentRoomDynamic.actions.search.label}
                    </button>
                </div>
                {!(currentRoomDynamic.hasItem && hasSearched) ? <></>
                    :
                    <div className={`${currentLocation}-use`}>
                        <button className={`${currentLocation}-use-button`} onClick={() => handleUseAction()}>
                            {currentRoomDynamic.actions.use.label}
                        </button>
                    </div>
                }
            </div>
            <div className="house-room-choice-container">
                {currentRoomConnections}
            </div>
        </div>
    )

}

export { HouseExploration as HouseExplorationComponent };