export interface HouseLayout {
    entrance: {
        label: string;
        connectingRooms: Array<string>;
        messages: Array<string>;
        actions: {
            search: Array<string>;
            use: {
                label: string;
                requiredItem: string;
                message: string;
            }
        }
    },
    backyard: {
        label: string;
        connectingRooms: Array<string>;
        messages: Array<string>;
        actions: {
            search: Array<string>;
            use: {
                label: string;
                requiredItem: string;
                message: string;
            }
        };
        items: {
            hasItem: boolean;
            itemNeeded: string;
            itemContained: string;
        }
    },
    parlor: {
        label: string;
        connectingRooms: Array<string>;
        messages: Array<string>;
        actions: {
            search: Array<string>;
            use: {
                label: string;
                requiredItem: string;
                message: string;
            }
        }
    },
    basement: {
        label: string;
        connectingRooms: Array<string>;
        messages: Array<string>;
        actions: {
            search: Array<string>;
            use: {
                label: string;
                requiredItem: string;
                message: string;
            }
        }
    },
    guestBedroom: {
        label: string;
        connectingRooms: Array<string>;
        messages: Array<string>;
        actions: {
            search: Array<string>;
            use: {
                label: string;
                requiredItem: string;
                message: string;
            }
        }
    },
    attic: {
        label: string;
        connectingRooms: Array<string>;
        messages: Array<string>;
        actions: {
            search: Array<string>;
            use: {
                label: string;
                requiredItem: string;
                message: string;
            }
        }
    },
    masterBathroom: {
        label: string;
        connectingRooms: Array<string>;
        messages: Array<string>;
        actions: {
            search: Array<string>;
            use: {
                label: string;
                requiredItem: string;
                message: string;
            }
        }
    },
    foyer: {
        label: string;
        connectingRooms: Array<string>;
        messages: Array<string>;
        actions: {
            search: Array<string>;
            use: {
                label: string;
                requiredItem: string;
                message: string;
            }
        }
    },
    livingRoom: {
        label: string;
        connectingRooms: Array<string>;
        messages: Array<string>;
        actions: {
            search: Array<string>;
            use: {
                label: string;
                requiredItem: string;
                message: string;
            }
        }
    },
    kitchen: {
        label: string;
        connectingRooms: Array<string>;
        messages: Array<string>;
        actions: {
            search: Array<string>;
            use: {
                label: string;
                requiredItem: string;
                message: string;
            }
        }
    },
    diningRoom: {
        label: string;
        connectingRooms: Array<string>;
        messages: Array<string>;
        actions: {
            search: Array<string>;
            use: {
                label: string;
                requiredItem: string;
                message: string;
            }
        }
    },
    upstairs: {
        label: string;
        connectingRooms: Array<string>;
        messages: Array<string>;
        actions: {
            search: Array<string>;
            use: {
                label: string;
                requiredItem: string;
                message: string;
            }
        }
    },
    masterBedroom: {
        label: string;
        connectingRooms: Array<string>;
        messages: Array<string>;
        actions: {
            search: Array<string>;
            use: {
                label: string;
                requiredItem: string;
                message: string;
            }
        }
    }
}

export const HouseLayout: HouseLayout = {
    entrance: {
        label: "House Entrance",
        connectingRooms: ['foyer'],
        messages: ["You're standing at the entrance to the house.","What do you do?"],
        actions: {
            search: ["Look Around", "You see the front of the house."],
            use: {
                label: "Use",
                requiredItem: "None",
                message: "There is nothing for you to use."
            },
        },
    },
    backyard: {
        label: "Backyard",
        connectingRooms: ['livingRoom'],
        messages: ["You step out into the backyard. It's pretty spacious out here.", "Unfortunately, there isn't much else to see"],
        actions: {
            search: [],
            use: {
                label: "Use",
                requiredItem: "Shovel",
                message: "You plunge the shovel into the dirt. After a few minutes of digging, you hear a loud thump and hit something solid. Clearing the dirt away, you see that it is an old trunk with a padlock on the front."
            },
        },
        items: {
            hasItem: true,
            itemNeeded: "Shovel",
            itemContained: "Trunk"
        }
    },
    parlor: {
        label: "Parlor",
        connectingRooms: ['foyer'],
        messages: ["You step into the parlor. It's pretty small and there is some seating.", "There is a small bar in the corner with some bottles of alcohol on top."],
        actions: {
            search: [],
            use: {
                label: "Use",
                requiredItem: "None",
                message: ""
            },
        }
    },
    basement: {
        label: "Basement",
        connectingRooms: ['kitchen'],
        messages: ["You descend the stairs into the basement. It's a bit dark and damp.", "The air smells dusty. A single light illuminates the space, casting harsh shadows on the boxes that line the edges.", "There is a safe in the far corner."],
        actions: {
            search: [],
            use: {
                label: "Use",
                requiredItem: "None",
                message: ""
            },
        }
    },
    guestBedroom: {
        label: "Guest Bedroom",
        connectingRooms: ['upstairs'],
        messages: ["You open the door to the guest bedroom. The bed is made and it smells unvisited.", "Some light shines in through the sheer curtains, casting light shadows around the room.", "Otherwise, there is nothing of note here."],
        actions: {
            search: [],
            use: {
                label: "Use",
                requiredItem: "None",
                message: ""
            },
        }
    },
    attic: {
        label: "Attic",
        connectingRooms: ['upstairs'],
        messages: ["You crawl up the ladder to the attic.", "There is a thin layer of dust over ignored furniture and boxes. Cobwebs adorn the rafters and insulation is visible at the far edges.", "What appears to be a mannequin covered in a sheet is in the far corner."],
        actions: {
            search: [],
            use: {
                label: "Use",
                requiredItem: "None",
                message: ""
            },
        }
    },
    masterBathroom: {
        label: "Master Bathroom",
        connectingRooms: ['masterBedroom'],
        messages: ["You open the door to the Master Bath.", "It's certainly a bathroom. Some toiletries sit next to a double sink. The shower is likewise adorned.", "Otherwise, there is nothing of importance here."],
        actions: {
            search: [],
            use: {
                label: "Use",
                requiredItem: "None",
                message: ""
            },
        }
    },
    foyer: {
        label: "Entryway",
        connectingRooms: ['entrance', 'livingRoom', 'kitchen', 'parlor'],
        messages: ["You step into the foyer of the house.", "It's a small modern home. Hardwood floor, a small table with a bowl for keys, and a few pairs of shoes sit underneath a bench. You can see a parlor to your left, the living room straight ahead, and the kitchen to your right.", "You can also walk out the door you just came in through."],
        actions: {
            search: [],
            use: {
                label: "Use",
                requiredItem: "None",
                message: ""
            },
        }
    },
    livingRoom: {
        label: "Living Room",
        connectingRooms: ['foyer', 'diningRoom', 'backyard', 'upstairs'],
        messages: ["You walk into the living room, the carpet is soft under your feet and smells clean.", "The entire room is very clean, there is a blanket folded on the back of the couch and the pillow's are all chopped. A large flatscreen television sits above a tiled fireplace. The entire room is very cozy inviting. You wouldn't mind spending some time here."],
        actions: {
            search: [],
            use: {
                label: "Use",
                requiredItem: "None",
                message: ""
            },
        }
    },
    kitchen: {
        label: "Kitchen",
        connectingRooms: ['foyer', 'diningRoom', 'basement'],
        messages: ["You enter the kitchen. It's relatively small compared to the rest of the house, sporting only two countertops and a range oven.", "The counters are clean. You spot some dishes behind a frosted glass cabinet door. A bowl of fruit sits out on the counter."],
        actions: {
            search: [],
            use: {
                label: "Use",
                requiredItem: "None",
                message: ""
            },
        }
    },
    diningRoom: {
        label: "Dining Room",
        connectingRooms: ['kitchen', 'livingRoom'],
        messages: ["You look into the dining room.", "A rectangular, wooden table sits in the center with six chairs around it. A hutch with fancy dishes and presumably china sits against one wall. A large window overlooking the backyard adorns another. The table is not set."],
        actions: {
            search: [],
            use: {
                label: "Use",
                requiredItem: "None",
                message: ""
            },
        }
    },
    upstairs: {
        label: "Upstairs Hallway",
        connectingRooms: ['livingRoom', 'guestBedroom', 'masterBedroom', 'attic'],
        messages: ["You climb the stairs and are standing in the upstairs hallway.", "A door to your left presumably leads to the guest bedroom, and a door at the end of the hall leads to the master bedroom. There is an attic door on the roof that you could pull down with the attached string.", "You see what appears to be a closet door as well."],
        actions: {
            search: [],
            use: {
                label: "Use",
                requiredItem: "None",
                message: ""
            },
        }
    },
    masterBedroom: {
        label: "Master Bathroom",
        connectingRooms: ['upstairs', 'masterBathroom'],
        messages: ["You step into the master bedroom.", "It is large and spacious with a king-sized bed sitting in the center, adorned by matching endtables with additional matching lamps. The bed is made. You can see a door to the master bathroom from where you stand."],
        actions: {
            search: [],
            use: {
                label: "Use",
                requiredItem: "None",
                message: ""
            },
        }
    }
};