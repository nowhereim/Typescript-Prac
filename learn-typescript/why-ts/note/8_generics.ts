// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText()

// function logText<T>(text: T): T {
//     console.log(text);
//     return text;
// }

// logText<string>(1);

// function logText(text: string | number) {
//     console.log(text);
//     return text;
// }
// logText('a');

// const hehe = logText('1');

// hehe.split('');


function logText<T>(text: T):T {
    console.log(text);
    return text;
}

const abc = logText<string>('a');
abc.split('');

const def = logText<boolean>(false);
def.valueOf();

const Qwe = logText<number>(10);
Qwe.toString();