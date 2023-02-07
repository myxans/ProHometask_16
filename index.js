const characters = 'abcdefghijklmnopqrstuvwxyz012345789';

function generateKey(item, characters) {
    let generate = '';
    for (let i = 0; i < item; i++) {
        generate += characters[Math.round(Math.random() * (characters.length - 1))];
    }
    return generate;
};

console.log(generateKey(2, characters))