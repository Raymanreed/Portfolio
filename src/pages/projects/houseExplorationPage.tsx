import { useState } from 'react';
import { HouseLayout } from '../../assets/houseLayout';
import { RoomTemplateComponent } from '../../components/rooms/roomTemplate';

export const HouseExploration = () => {
    const [currentLocation, setCurrentLocation] = useState<string>('entrance')
    const [currentInventory, setCurrentInventory] = useState<string[]>([])
    const [actionOutput, setActionOutput] = useState<string>()
    const [hasSearched, setSearched] = useState<boolean>(false)

    const resetAll = () => {
        setCurrentLocation('entrance')
        setCurrentInventory([])
        setActionOutput('')
        setSearched(false)
        return;
    }

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

    const checkComplete = () => {
        if (currentLocation != "entrance") return false;
        if (currentInventory.includes("Trunk") && currentInventory.includes("Trunk Key")) {
            return true
        }
        return false;
    }

    const currentRoomConnections = Object.values(currentRoomDynamic.connectingRooms).map((connections) => {
        return (
            <button className="navigation-button" onClick={() => handleNavigation(connections)}>
                {`${HouseLayout[connections as keyof HouseLayout].label}`}
            </button>
        )
    })
    
    if (checkComplete()) {
        return (
            <div className="house-container">
                <h1>You leave the house with the trunk and the key. You found what you came for.</h1>
                <button onClick={resetAll}>Reset</button>
            </div>
        )
    }
    return (
        <div className="house-container">
            <div className="house-room-choice-container">
                <div className="house-room-current-room">
                    <p>{`You are currently in:`}</p>
                    <p>{`${currentRoomLabel}`}</p>
                </div>
                <div className="house-room-connections">
                    <p>You can go to:</p>
                    {currentRoomConnections}
                </div>
            </div>
            <div className="house-display-main">
                <div className="house-room-display">
                    {RoomTemplateComponent(currentRoomMessages[0], currentRoomMessages[1], currentRoomMessages[2])}
                </div>
                <div className="house-room-action-output">
                    {actionOutput}
                </div>
            </div>
            <div className="house-actions-inventory-container">
                <div className="house-room-actions">
                    <p>What would you like to do?</p>
                    <div className={`${currentLocation}-actions action-container`}>
                        <button className={`${currentLocation}-search-button action-button`} onClick={() => handleSearchAction(currentRoomDynamic.actions.search.result)}>
                            {currentRoomDynamic.actions.search.label}
                        </button>
                        {!(currentRoomDynamic.hasItem && hasSearched) ? <></>
                            :
                            <button className={`${currentLocation}-use-button action-button`} onClick={() => handleUseAction()}>
                                {currentRoomDynamic.actions.use.label}
                            </button>
                        }
                    </div>
                </div>
                <div className="inventory-display">
                    <p>Current Inventory:</p>
                    {currentInventory.join(", ")}
                </div>
            </div>
        </div>
    )

}

export { HouseExploration as HouseExplorationComponent };