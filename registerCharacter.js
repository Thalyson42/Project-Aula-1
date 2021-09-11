async function registerCharacter(characterList) {
    const register = [];
    await new Promise(function (resolve, reject) {
        for(const character of characterList)
            register.push(character.characterName +' is registred');

        resolve(register)
    }).then(function ( result ) {
        result.forEach(element => {
            console.log(element)
        });
    })
}