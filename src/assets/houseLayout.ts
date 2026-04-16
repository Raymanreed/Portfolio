export interface HouseLayout {
    entrance: {
        label: string;
        connectingRooms: Array<string>;
        hasItem: boolean;
        messages: Array<string>;
        actions: {
            search: {
                label: string;
                result: string;
            };
            use: {
                label: string;
                requiredItem: string|undefined;
                message: string;
            }
        };
        items: {
            itemNeeded: string;
            itemContained: string;
        }
    },
    backyard: {
        label: string;
        connectingRooms: Array<string>;
        hasItem: boolean;
        messages: Array<string>;
        actions: {
            search: {
                label: string;
                result: string;
            };
            use: {
                label: string;
                requiredItem: string|undefined;
                message: string;
            }
        };
        items: {
            itemNeeded: string;
            itemContained: string;
        }
    },
    parlor: {
        label: string;
        connectingRooms: Array<string>;
        hasItem: boolean;
        messages: Array<string>;
        actions: {
            search: {
                label: string;
                result: string;
            };
            use: {
                label: string;
                requiredItem: string|undefined;
                message: string;
            }
        };
        items: {
            itemNeeded: string;
            itemContained: string;
        }
    },
    basement: {
        label: string;
        connectingRooms: Array<string>;
        hasItem: boolean;
        messages: Array<string>;
        actions: {
            search: {
                label: string;
                result: string;
            };
            use: {
                label: string;
                requiredItem: string|undefined;
                message: string;
            }
        };
        items: {
            itemNeeded: string;
            itemContained: string;
        }
    },
    guestBedroom: {
        label: string;
        connectingRooms: Array<string>;
        hasItem: boolean;
        messages: Array<string>;
        actions: {
            search: {
                label: string;
                result: string;
            };
            use: {
                label: string;
                requiredItem: string|undefined;
                message: string;
            }
        };
        items: {
            itemNeeded: string;
            itemContained: string;
        }
    },
    attic: {
        label: string;
        connectingRooms: Array<string>;
        hasItem: boolean;
        messages: Array<string>;
        actions: {
            search: {
                label: string;
                result: string;
            };
            use: {
                label: string;
                requiredItem: string|undefined;
                message: string;
            }
        };
        items: {
            itemNeeded: string;
            itemContained: string;
        }
    },
    masterBathroom: {
        label: string;
        connectingRooms: Array<string>;
        hasItem: boolean;
        messages: Array<string>;
        actions: {
            search: {
                label: string;
                result: string;
            };
            use: {
                label: string;
                requiredItem: string|undefined;
                message: string;
            }
        };
        items: {
            itemNeeded: string;
            itemContained: string;
        }
    },
    foyer: {
        label: string;
        connectingRooms: Array<string>;
        hasItem: boolean;
        messages: Array<string>;
        actions: {
            search: {
                label: string;
                result: string;
            };
            use: {
                label: string;
                requiredItem: string|undefined;
                message: string;
            }
        };
        items: {
            itemNeeded: string;
            itemContained: string;
        }
    },
    livingRoom: {
        label: string;
        connectingRooms: Array<string>;
        hasItem: boolean;
        messages: Array<string>;
        actions: {
            search: {
                label: string;
                result: string;
            };
            use: {
                label: string;
                requiredItem: string|undefined;
                message: string;
            }
        };
        items: {
            itemNeeded: string;
            itemContained: string;
        }
    },
    kitchen: {
        label: string;
        connectingRooms: Array<string>;
        hasItem: boolean;
        messages: Array<string>;
        actions: {
            search: {
                label: string;
                result: string;
            };
            use: {
                label: string;
                requiredItem: string|undefined;
                message: string;
            }
        };
        items: {
            itemNeeded: string;
            itemContained: string;
        }
    },
    diningRoom: {
        label: string;
        connectingRooms: Array<string>;
        hasItem: boolean;
        messages: Array<string>;
        actions: {
            search: {
                label: string;
                result: string;
            };
            use: {
                label: string;
                requiredItem: string|undefined;
                message: string;
            }
        };
        items: {
            itemNeeded: string;
            itemContained: string;
        }
    },
    upstairs: {
        label: string;
        connectingRooms: Array<string>;
        hasItem: boolean;
        messages: Array<string>;
        actions: {
            search: {
                label: string;
                result: string;
            };
            use: {
                label: string;
                requiredItem: string|undefined;
                message: string;
            }
        };
        items: {
            itemNeeded: string;
            itemContained: string;
        }
    },
    masterBedroom: {
        label: string;
        connectingRooms: Array<string>;
        hasItem: boolean;
        messages: Array<string>;
        actions: {
            search: {
                label: string;
                result: string;
            };
            use: {
                label: string;
                requiredItem: string|undefined;
                message: string;
            }
        };
        items: {
            itemNeeded: string;
            itemContained: string;
        }
    }
}

export const HouseLayout: HouseLayout = {
    entrance: {
        label: "House Entrance",
        connectingRooms: ['foyer'],
        hasItem: false,
        messages: ["You're standing at the entrance to the house.","What do you do?"],
        actions: {
            search: {
                label: "Look Around",
                result: "You see the front of the house.",
            },
            use: {
                label: "Use",
                requiredItem: undefined,
                message: "There is nothing for you to use."
            },
        },
        items: {
            itemNeeded: '',
            itemContained: ''
        }
    },
    backyard: {
        label: "Backyard",
        connectingRooms: ['livingRoom'],
        hasItem: true,
        messages: ["You step out into the backyard. It's pretty spacious out here.", "Unfortunately, there isn't much else to see"],
        actions: {
            search: {
                label: "Look Around",
                result: "You look around the backyard. It's nice out here, there is a patch of dirt that looks recently disturbed and out of place. Perhaps something was buried here?"
            },
            use: {
                label: "Dig",
                requiredItem: "Shovel",
                message: "You plunge the shovel into the dirt. After a few minutes of digging, you hear a loud thump and hit something solid. Clearing the dirt away, you see that it is an old trunk with a padlock on the front."
            },
        },
        items: {
            itemNeeded: "Shovel",
            itemContained: "Trunk"
        }
    },
    parlor: {
        label: "Parlor",
        connectingRooms: ['foyer'],
        hasItem: false,
        messages: ["You step into the parlor. It's pretty small and there is some seating.", "There is a small bar in the corner with some bottles of alcohol on top."],
        actions: {
            search: {
                label: "Look Around",
                result: "You look around the parlor. The bottles look mostly full and a thin layer of dust covers them. It's obvious that this room is not used very often and you doubt there is much more to see here."
            },
            use: {
                label: "Use",
                requiredItem: undefined,
                message: ""
            },
        },
        items: {
            itemNeeded: '',
            itemContained: ''
        }
    },
    basement: {
        label: "Basement",
        connectingRooms: ['kitchen'],
        hasItem: true,
        messages: ["You descend the stairs into the basement. It's a bit dark and damp.", "The air smells dusty. A single light illuminates the space, casting harsh shadows on the boxes that line the edges.", "There is a safe in the far corner."],
        actions: {
            search: {
                label: "Look Around",
                result: "You glance around at the boxes that populate the space, a layer of dust covers them. You turn your attention towards the safe in the corner. There is a small keyhole."
            },
            use: {
                label: "Unlock Safe",
                requiredItem: "Safe Key",
                message: "You insert the key into the lock and open the safe. Inside you find various papers, documents, a gun, some cash, and an old skeleton-style key."
            },
        },
        items: {
            itemNeeded: "Safe Key",
            itemContained: "Attic Key"
        }
    },
    guestBedroom: {
        label: "Guest Bedroom",
        connectingRooms: ['upstairs'],
        hasItem: false,
        messages: ["You open the door to the guest bedroom. The bed is made and it smells unvisited.", "Some light shines in through the sheer curtains, casting light shadows around the room.", "Otherwise, there is nothing of note here."],
        actions: {
            search: {
                label: "Look Around",
                result: "You glance around the room, noting the interesting shadows that the light casts on the wall. Aside from being visually pleasing, there is nothing else of note here."
            },
            use: {
                label: "Use",
                requiredItem: undefined,
                message: ""
            },
        },
        items: {
            itemNeeded: '',
            itemContained: ''
        }
    },
    attic: {
        label: "Attic",
        connectingRooms: ['upstairs'],
        hasItem: true,
        messages: ["You crawl up the ladder to the attic.", "There is a thin layer of dust over ignored furniture and boxes. Cobwebs adorn the rafters and insulation is visible at the far edges.", "What appears to be a mannequin covered in a sheet is in the far corner."],
        actions: {
            search: {
                label: "Look Around",
                result: "You step over to the mannequin and remove the sheet. The form underneath is female and appears to be an art piece of some sort. Various magazine clippings and other graphics are pasted all over it. You notice that there is a large keyhole in the center of it's face that would fit an old-timey key."
            },
            use: {
                label: "Insert Key",
                requiredItem: "Attic Key",
                message: "You insert the key into the mannequin's head and turn. The head opens like a clamshell revealing a small, faded photo of two people you don't recognize. You can only assume that these were the owners of the house. You stare at the photo for a few minutes before putting it in your pocket. You notice a small key that looks like it would fit a padlock underneath the photo. You also place this in your pocket."
            },
        },
        items: {
            itemNeeded: "Attic Key",
            itemContained: "Trunk Key"
        }
    },
    masterBathroom: {
        label: "Master Bathroom",
        connectingRooms: ['masterBedroom'],
        hasItem: false,
        messages: ["You open the door to the Master Bath.", "It's certainly a bathroom. Some toiletries sit next to a double sink. The shower is likewise adorned.", "Otherwise, there is nothing of importance here."],
        actions: {
            search: {
                label: "Look Around",
                result: "You look around the master bathroom. It's a bathroom and you don't see anything of note here."
            },
            use: {
                label: "Use",
                requiredItem: undefined,
                message: ""
            },
        },
        items: {
            itemNeeded: '',
            itemContained: ''
        }
    },
    foyer: {
        label: "Entryway",
        connectingRooms: ['entrance', 'livingRoom', 'kitchen', 'parlor'],
        hasItem: false,
        messages: ["You step into the foyer of the house.", "It's a small modern home. Hardwood floor, a small table with a bowl for keys, and a few pairs of shoes sit underneath a bench. You can see a parlor to your left, the living room straight ahead, and the kitchen to your right.", "You can also walk out the door you just came in through."],
        actions: {
            search: {
                label: "Look Around",
                result: "You are standing in the entryway of the house. The living room, kitchen, and parlor are visible from where you stand. A small table with a bowl for keys sits against the wall. It is empty."
            },
            use: {
                label: "Use",
                requiredItem: undefined,
                message: ""
            },
        },
        items: {
            itemNeeded: '',
            itemContained: ''
        }
    },
    livingRoom: {
        label: "Living Room",
        connectingRooms: ['foyer', 'diningRoom', 'backyard', 'upstairs'],
        hasItem: true,
        messages: ["You walk into the living room, the carpet is soft under your feet and smells clean.", "The entire room is very clean, there is a blanket folded on the back of the couch and the pillow's are all chopped. A large flatscreen television sits above a tiled fireplace. The entire room is very cozy inviting. You wouldn't mind spending some time here."],
        actions: {
            search: {
                label: "Look Around",
                result: "You look at the living room. It's a bit dated judging by the floral pattern on the couch. You notice a short shovel in the corner of the room."
            },
            use: {
                label: "Pick Up Shovel",
                requiredItem: undefined,
                message: "You walk over to the shovel and pick it up."
            },
        },
        items: {
            itemNeeded: "",
            itemContained: "Shovel"
        }
    },
    kitchen: {
        label: "Kitchen",
        connectingRooms: ['foyer', 'diningRoom', 'basement'],
        hasItem: true,
        messages: ["You enter the kitchen. It's relatively small compared to the rest of the house, sporting only two countertops and a range oven.", "The counters are clean. You spot some dishes behind a frosted glass cabinet door. A bowl of fruit sits out on the counter."],
        actions: {
            search: {
                label: "Look Around",
                result: "You look at the kitchen. It's a bit small, but tidy and clean. You briefly look through the drawers. In one of them you spot a small key."
            },
            use: {
                label: "Pickup Key",
                requiredItem: undefined,
                message: "You pick up the small key and stick it in your pocket. You never know when it might be useful!"
            },
        },
        items: {
            itemNeeded: "",
            itemContained: "Master Bedroom Key"
        }
    },
    diningRoom: {
        label: "Dining Room",
        connectingRooms: ['kitchen', 'livingRoom'],
        hasItem: false,
        messages: ["You look into the dining room.", "A rectangular, wooden table sits in the center with six chairs around it. A hutch with fancy dishes and presumably china sits against one wall. A large window overlooking the backyard adorns another. The table is not set."],
        actions: {
            search: {
                label: "Look Around",
                result: "You look around the small dining room. The table is not set, but the surface is clean. The china and tableware looks dusty. There isn't anything here."
            },
            use: {
                label: "Use",
                requiredItem: undefined,
                message: ""
            },
        },
        items: {
            itemNeeded: '',
            itemContained: ''
        }
    },
    upstairs: {
        label: "Upstairs Hallway",
        connectingRooms: ['livingRoom', 'guestBedroom', 'masterBedroom', 'attic'],
        hasItem: false,
        messages: ["You climb the stairs and are standing in the upstairs hallway.", "A door to your left presumably leads to the guest bedroom, and a door at the end of the hall leads to the master bedroom. There is an attic door on the roof that you could pull down with the attached string.", "You see what appears to be a closet door as well."],
        actions: {
            search: {
                label: "Look Around",
                result: "You look at the small hallway. It's mostly doors. You briefly open the closet only to find that it is packed with blankets."
            },
            use: {
                label: "Use",
                requiredItem: undefined,
                message: ""
            },
        },
        items: {
            itemNeeded: '',
            itemContained: ''
        }
    },
    masterBedroom: {
        label: "Master Bedroom",
        connectingRooms: ['upstairs', 'masterBathroom'],
        hasItem: true,
        messages: ["You step into the master bedroom.", "It is large and spacious with a king-sized bed sitting in the center, adorned by matching endtables with additional matching lamps. The bed is made. You can see a door to the master bathroom from where you stand."],
        actions: {
            search: {
                label: "Look Around",
                result: "You look around the spacious room. It is neat and tidy. You notice that one of the end table drawers is locked. It looks like a small key could fit it."
            },
            use: {
                label: "Unlock Nightstand",
                requiredItem: "Master Bedroom Key",
                message: "You insert the key you found in the kitchen and the drawer unlocks easily. Inside you see some medicine bottles and another small key. You pick up the key and place it in your pocket."
            },
        },
        items: {
            itemNeeded: "Master Bedroom Key",
            itemContained: "Safe Key"
        }
    }
};