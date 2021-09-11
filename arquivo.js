const characterList = [];

createCharacter('Froko', 'Druid', 2, 'Elf')
createCharacter('Tokki', 'Rogue', 2, 'half-elf')
createCharacter('Pipi', 'Rogue', 2, 'Kobold')
createCharacter('Tiguita', 'Sorcerer', 2, 'Aasimar')
createCharacter('Sthef', 'Witch', 2, 'Tiefling')

registerCharacter(characterList);

for(const character of characterList)
    character.Walk();


function createCharacter(name, className, level, race) {
    let character = new Character(name, className, level, race);

    characterList.push(character);
}