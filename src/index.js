import './assets/css/styles.css';

import generatePassword from './assets/modules/generatePassword.js';

(() => {
    const numCaracteres = document.querySelector('.numCaracteres');
    const maiusculasFlag = document.querySelector('.chk-maiusculas');
    const minusculasFlag = document.querySelector('.chk-minusculas');
    const digitosFlag = document.querySelector('.chk-digitos');
    const simbolosFlag = document.querySelector('.chk-simbolos');
    const bttGerar = document.querySelector('.generatePass-btt');
    const result = document.querySelector('.result');

    numCaracteres.addEventListener('input', () => {
        if(numCaracteres.value < 0) numCaracteres.value = 0;
        if(numCaracteres.value > 30) numCaracteres.value = 30;
    });

    bttGerar.addEventListener('click', () => {
        const valid = numCaracteres.value!=0 && (maiusculasFlag.checked || minusculasFlag.checked || digitosFlag.checked || simbolosFlag.checked);
        
        result.value = valid? generatePassword(
            numCaracteres.value, 
            maiusculasFlag.checked, 
            minusculasFlag.checked, 
            digitosFlag.checked, 
            simbolosFlag.checked
        ) : 'Parâmetros inválidos';
    });

})();


