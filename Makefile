# global setup

SRC_DIR := src

R20_HEADER := $(SRC_DIR)/rob20Header.js
R20_FOOTER := $(SRC_DIR)/rob20Footer.js

TABLES_DIR := $(SRC_DIR)/tables

BUILD_DIR := build

# code related
CLEANER = $(SRC_DIR)/cleaner.js
ROBS_PLAYER_ID = $(SRC_DIR)/robsPlayerId.js
RECURSIVE_TABLES = $(SRC_DIR)/recursiveTables.js
FOM = $(SRC_DIR)/findOrMakeObjector.js
RTM = $(SRC_DIR)/rollableTableManager.js
CODE_FILES := $(R20_HEADER) $(CLEANER) $(ROBS_PLAYER_ID) $(FOM) $(RTM) $(RECURSIVE_TABLES) $(R20_FOOTER)


# treasure related
CURRENCY_TREASURE := $(TABLES_DIR)/treasure/*.js
MUNDANE_ITEM_TREASURE := $(TABLES_DIR)/equipment/*.js
MAGIC_ITEM_TREASURE := $(TABLES_DIR)/magicItems/*.js
TREASURE_SOURCES := $(CURRENCY_TREASURE) $(MUNDANE_ITEM_TREASURE) $(MAGIC_ITEM_TREASURE)

all: $(TREASURE_SOURCES)
	cat $(R20_HEADER) $(TREASURE_SOURCES)


treasures: $(TREASURE_SOURCES)
	cat $(R20_HEADER) $(TREASURE_SOURCES) $(R20_FOOTER) > $(BUILD_DIR)/allTreasureTables.js


scriptor: $(CODE_FILES)
	cat $(CODE_FILES) > $(BUILD_DIR)/scriptor.js

