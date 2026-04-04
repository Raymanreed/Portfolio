export interface HouseLayout {
    entrance: {
        label: string;
        connectingRooms: Array<string>;
        messages: Array<string>;
    },
    backyard: {
        label: string;
        connectingRooms: Array<string>;
        messages: Array<string>
    },
    parlor: {
        label: string;
        connectingRooms: Array<string>;
        messages: Array<string>
    },
    basement: {
        label: string;
        connectingRooms: Array<string>;
        messages: Array<string>;
    },
    guestBedroom: {
        label: string;
        connectingRooms: Array<string>;
        messages: Array<string>;
    },
    attic: {
        label: string;
        connectingRooms: Array<string>;
        messages: Array<string>;
    },
    masterBathroom: {
        label: string;
        connectingRooms: Array<string>;
        messages: Array<string>;
    },
    foyer: {
        label: string;
        connectingRooms: Array<string>;
        messages: Array<string>;
    },
    livingRoom: {
        label: string;
        connectingRooms: Array<string>;
        messages: Array<string>;
    },
    kitchen: {
        label: string;
        connectingRooms: Array<string>;
        messages: Array<string>;
    },
    diningRoom: {
        label: string;
        connectingRooms: Array<string>;
        messages: Array<string>;
    },
    upstairs: {
        label: string;
        connectingRooms: Array<string>;
        messages: Array<string>;
    },
    masterBedroom: {
        label: string;
        connectingRooms: Array<string>;
        messages: Array<string>;
    }
}

export const HouseLayout: HouseLayout = {
    entrance: {
        label: "House Entrance",
        connectingRooms: ['foyer'],
        messages: ["You're standing at the entrance to the house.","What do you do?"]
    },
    backyard: {
        label: "Backyard",
        connectingRooms: ['livingRoom'],
        messages: ["You step out into the backyard. It's pretty spacious out here.", "Unfortunately, there isn't much else to see"]
    },
    parlor: {
        label: "Parlor",
        connectingRooms: ['foyer'],
        messages: ["You step into the parlor. It's pretty small and there is some seating.", "There is a small bar in the corner with some bottles of alcohol on top."]
    },
    basement: {
        label: "Basement",
        connectingRooms: ['kitchen'],
        messages: ["You descend the stairs into the basement. It's a bit dark and damp.", "The air smells dusty. A single light illuminates the space, casting harsh shadows on the boxes that line the edges.", "There is a safe in the far corner."]
    },
    guestBedroom: {
        label: "Guest Bedroom",
        connectingRooms: ['upstairs'],
        messages: ["You open the door to the guest bedroom. The bed is made and it smells unvisited.", "Some light shines in through the sheer curtains, casting light shadows around the room.", "Otherwise, there is nothing of note here."]
    },
    attic: {
        label: "Attic",
        connectingRooms: ['upstairs'],
        messages: ["You crawl up the ladder to the attic.", "There is a thin layer of dust over ignored furniture and boxes. Cobwebs adorn the rafters and insulation is visible at the far edges.", "What appears to be a mannequin covered in a sheet is in the far corner."]
    },
    masterBathroom: {
        label: "Master Bathroom",
        connectingRooms: ['masterBedroom'],
        messages: ["You open the door to the Master Bath.", "It's certainly a bathroom. Some toiletries sit next to a double sink. The shower is likewise adorned.", "Otherwise, there is nothing of importance here."]
    },
    foyer: {
        label: "Entryway",
        connectingRooms: ['entrance', 'livingRoom', 'kitchen', 'parlor'],
        messages: ["You step into the foyer of the house.", "It's a small modern home. Hardwood floor, a small table with a bowl for keys, and a few pairs of shoes sit underneath a bench. You can see a parlor to your left, the living room straight ahead, and the kitchen to your right.", "You can also walk out the door you just came in through."]
    },
    livingRoom: {
        label: "Living Room",
        connectingRooms: ['foyer', 'diningRoom', 'backyard', 'upstairs'],
        messages: ["You walk into the living room, the carpet is soft under your feet and smells clean.", "The entire room is very clean, there is a blanket folded on the back of the couch and the pillow's are all chopped. A large flatscreen television sits above a tiled fireplace. The entire room is very cozy inviting. You wouldn't mind spending some time here."]
    },
    kitchen: {
        label: "Kitchen",
        connectingRooms: ['foyer', 'diningRoom', 'basement'],
        messages: ["You enter the kitchen. It's relatively small compared to the rest of the house, sporting only two countertops and a range oven.", "The counters are clean. You spot some dishes behind a frosted glass cabinet door. A bowl of fruit sits out on the counter."]
    },
    diningRoom: {
        label: "Dining Room",
        connectingRooms: ['kitchen', 'livingRoom'],
        messages: ["You look into the dining room.", "A rectangular, wooden table sits in the center with six chairs around it. A hutch with fancy dishes and presumably china sits against one wall. A large window overlooking the backyard adorns another. The table is not set."]
    },
    upstairs: {
        label: "Upstairs Hallway",
        connectingRooms: ['livingRoom', 'guestBedroom', 'masterBedroom', 'attic'],
        messages: ["You climb the stairs and are standing in the upstairs hallway.", "A door to your left presumably leads to the guest bedroom, and a door at the end of the hall leads to the master bedroom. There is an attic door on the roof that you could pull down with the attached string.", "You see what appears to be a closet door as well."]
    },
    masterBedroom: {
        label: "Master Bathroom",
        connectingRooms: ['upstairs', 'masterBathroom'],
        messages: ["You step into the master bedroom.", "It is large and spacious with a king-sized bed sitting in the center, adorned by matching endtables with additional matching lamps. The bed is made. You can see a door to the master bathroom from where you stand."]
    }
};