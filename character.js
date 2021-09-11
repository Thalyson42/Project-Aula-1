class Character {
    constructor(characterName, characterClass, characterLevel, characterRace) {
        this.characterName = characterName;
        this.characterClass = characterClass;
        this.characterLevel = characterLevel;
        this.characterRace = characterRace;
    }

    Walk() {
        let walk = this.characterName+' is walking';
        return console.log(walk)
    }

    castingMagic(magic) {
        let casting = this.characterName+' is casting '+magic+' of '+this.characterClass+' class';
        return console.log(casting)
    }
    
}