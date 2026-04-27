import { useState } from 'react';
import { HouseLayout } from '../../assets/houseLayout';
import { RoomTemplateComponent } from '../../components/rooms/roomTemplate';

export const HouseExploration = () => {
    const objectiveMessage = "You are looking for something, it's somewhere in this house. Explore the rooms and find it."

    const [currentLocation, setCurrentLocation] = useState<string>('entrance')
    const [currentInventory, setCurrentInventory] = useState<string[]>([])
    const [actionOutput, setActionOutput] = useState<string>(objectiveMessage)
    const [hasSearched, setSearched] = useState<boolean>(true)


    // Resets game state to it's original state.
    const resetAll = () => {
        setCurrentLocation('entrance')
        setCurrentInventory([])
        setActionOutput(objectiveMessage)
        setSearched(false)
        return;
    }

    // Changes room to the room chosen, clears action output, and resets searched state.
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

    const currentRoomLabel = currentRoomDynamic.label
    const currentRoomMessages = Object.values(currentRoomDynamic.messages);

    const handleSearchAction = (output: string) => {
        setActionOutput(output)
        setSearched(true)
        return
    }

    // Checks if the room has an item
    // Checks if the player has the item in the room already
    // Checks if you have the appropriate item to get the room's item
    // If you have the required ability to get the room's item, it gives it to you and displays the appropriate message
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

    // Checks if you have the appropriate items to complete the game and are in the correct location
    const checkComplete = () => {
        if (currentLocation != "entrance") return false;
        if (currentInventory.includes("Trunk") && currentInventory.includes("Trunk Key")) {
            return true
        }
        return false;
    }

    // Displays all the appropriate room connections as clickable buttons.
    const currentRoomConnections = Object.values(currentRoomDynamic.connectingRooms).map((connections) => {
        return (
            <button className="navigation-button" onClick={() => handleNavigation(connections)}>
                {`${HouseLayout[connections as keyof HouseLayout].label}`}
            </button>
        )
    })
    
    // Ends the game
    if (checkComplete()) {
        return (
            <div className="house-container">
                <h1>You leave the house with the trunk and the key. You found what you came for.</h1>
                <button onClick={resetAll}>Reset</button>
            </div>
        )
    }

    // Main gameplay functionality
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
                    {RoomTemplateComponent(currentRoomMessages[0], currentRoomMessages[1], currentLocation, currentRoomMessages[2])}
                </div>
                <div className={!hasSearched ? "hide-content" : "house-room-action-output"}>
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