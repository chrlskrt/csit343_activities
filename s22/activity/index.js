// console.log("Hello World");

/*
1. In the S22 folder, create an activity folder and an index.html and index.js file inside of it.
    - Create an index.html file to attach our index.js file
    - Copy the template provided by your Instructor and paste it in an index.js file.
    - Update your local sessions git repository and push to git with the commit message of Add template code s31.
    - Console log the message Hello World to ensure that the script file is properly associated with the html file.
*/

/**********************************************
 * TASK ASSIGNMENT FOR MEMBERS - Dungeon Quest
 **********************************************/

/**********************************************
 * Member 1: Adventurer Object
 **********************************************/
/*
INSTRUCTIONS:
2. Create an object for the Adventurer with properties such as: 
    - name => A string representing the adventurer's name.
    - health => A number representing the adventurer’s experience level.
    - level => A number representing how much health the adventurer has.
    - attack => A number representing how much damage the adventurer deals when attacking.
    - inventory => An empty array to store items and loot the adventurer collects during quests.
3. Add "attackMonster" method with an argument of a monster.
    - The method will subtract the adventurer’s attack power from the monster’s health.
    - If the monster's health reaches 0 or less, 
        - The monster will drop a loot. (there is a loot method in the monster object)
        - return: <adventurer> attacks <monster>! + <monster> has been defeated! + <loot>.
    - Else, return: <adventurer> attacks <monster>! + Monster's health is now <monster's health>.
*/

let adventurer = {
  // Properties
  // Method to attack a monster
};

/**********************************************
 * Member 5: Monster Object
 **********************************************/
/*
INSTRUCTIONS:
10. Create a Monster object using the Object Construtor with properties such as:
    - name => A string representing the monster's name.
    - level => A number representing the monster's level (used to calculate its attack power).
    - health => A number representing how much health the monster has.
    - attack => A number representing how much damage the monster can deal to the adventurer (calculated as level * 2).
    - loot => A string representing the item(s) that the monster drops when defeated (e.g., 'Wolf Fur').
11. Add an "attackTarget" method for attacking another character:
    - The method will take target(another character, like the adventurer) as an argument.
    - It should subtract the monster’s attack power from the adventurer's health.
    - return: <monster> attacks <target>! + <target> has been defeated!
    - If the target’s health reaches 0 or less, return: <monster> attacks <target>! + <target>'s health is now is <target's health>
12. Add a "dropLoot" method to drop loot when the monster is defeated.
    - Add the loot to the adventurer’s inventory.
    - Return: <monster> drops <loot>. + <adventurer>'s inventory: <inventory>
    - Create a new instance for the monster (ex. Fenrir the Wolf, level 30, health 100, loot 'Wolf Fur')
*/

function Monster() {
  // Method for the monster to attack the target
  // Method for the monster to drop loot when defeated
  // Add item to adventurer's inventory
}

// Create a new instance for the monster (e.g., Fenrir the Wolf, level 30, health 100, loot 'Wolf Fur')
