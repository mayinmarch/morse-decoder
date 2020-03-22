const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let contaier = [];
    for(let i = 0; i < expr.length; i += 10){
        let subStr = expr.substring(i, i + 10);
        if(subStr === '**********'){
            contaier.push(' ');
        } else {
            let result = '';
            for(let j = 0; j < subStr.length; j += 2){
                let targetStr = subStr.substring(j, j + 2);
                if(targetStr === '10'){
                    result += '.';
                }
                if (targetStr === '11'){
                    result += '-';
                }
    
            }
            contaier.push(result);
        }
    }
    
    let resultStr = '';
    contaier.forEach((el) => {
        if(el === ' '){
            resultStr += el;
        } else {
            resultStr += MORSE_TABLE[el];
        }
    })
    return resultStr;
}

module.exports = {
    decode
}