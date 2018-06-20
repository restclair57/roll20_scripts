# global setup

SRC_DIR := src

R20_HEADER := $(SRC_DIR)/rob20Header.js
R20_FOOTER := $(SRC_DIR)/rob20Footer.js

TABLES_DIR := $(SRC_DIR)/tables
DMG_TABLES_DIR := $(TABLES_DIR)/dmg
TEST_DIR := $(SRC_DIR)/tests

BUILD_DIR := build

# code related
CLEANER := $(SRC_DIR)/cleaner.js
ROBS_PLAYER_ID := $(SRC_DIR)/robsPlayerId.js
RECURSIVE_TABLES := $(SRC_DIR)/recursiveTable.js
FOM := $(SRC_DIR)/findOrMakeObjector.js
RTM := $(SRC_DIR)/rollableTableManager.js
MACROS := $(SRC_DIR)/macros.js
TREASURE_ROLLER := $(SRC_DIR)/treasureRoller.js

CODE_FILES := $(CLEANER) $(ROBS_PLAYER_ID) $(FOM) $(RTM) $(RECURSIVE_TABLES) $(MACROS) $(TREASURE_ROLLER)

# tests
TESTER_FILES := $(TEST_DIR)/tableTester.js

# treasure related
DMG_CURRENCY_TREASURE := $(DMG_TABLES_DIR)/treasure/*.js
DMG_MUNDANE_ITEM_TREASURE := $(DMG_TABLES_DIR)/equipment/*.js
DMG_MAGIC_ITEM_TREASURE := $(DMG_TABLES_DIR)/magicItems/*.js
DMG_TREASURE_SOURCES := $(DMG_CURRENCY_TREASURE) $(DMG_MUNDANE_ITEM_TREASURE) $(DMG_MAGIC_ITEM_TREASURE)



FULL_APP_FILE = $(BUILD_DIR)/main.js
TEST_SUITE_FILE = $(BUILD_DIR)/testers.js

dmg: $(DMG_TREASURE_SOURCES)
	cat $(R20_HEADER) $(CODE_FILES) $(DMG_TREASURE_SOURCES) $(R20_FOOTER) > $(FULL_APP_FILE)

all: $(DMG_TREASURE_SOURCES)
	cat $(R20_HEADER) $(CODE_FILES) $(DMG_TREASURE_SOURCES) $(R20_FOOTER) > $(FULL_APP_FILE)


treasures: $(DMG_TREASURE_SOURCES)
	cat $(R20_HEADER) $(DMG_TREASURE_SOURCES) $(R20_FOOTER) > $(BUILD_DIR)/allTreasureTables.js


scriptor: $(CODE_FILES)
	cat $(R20_HEADER) $(CODE_FILES) $(R20_FOOTER) > $(BUILD_DIR)/scriptor.js

testers: $(TESTER_FILES)
	cat $(TESTER_FILES) > $(TEST_SUITE_FILE)

