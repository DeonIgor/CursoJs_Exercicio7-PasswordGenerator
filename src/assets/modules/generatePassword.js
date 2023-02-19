const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const simbols = '!@#$%&?';

export default (numCaracteres, maiusculasFlag, minusculasFlag, digitosFlag, simbolosFlag) => {
    let password = [];

    for(let i = 0; i < numCaracteres; i++){
        const passwordCaracter = [];

        maiusculasFlag && passwordCaracter.push(String.fromCharCode(rand(65, 90)));
        minusculasFlag && passwordCaracter.push(String.fromCharCode(rand(97, 122)));
        simbolosFlag && passwordCaracter.push(simbols[rand(0, simbols.length-1)]);
        digitosFlag && passwordCaracter.push(String.fromCharCode(rand(48, 57)));

        password.push(passwordCaracter[rand(0, passwordCaracter.length-1)]);
    }

    return password.join('');
}