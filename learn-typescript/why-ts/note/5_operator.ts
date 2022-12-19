// function logMessage(value: string){
//     console.log(value);
// }
// logMessage('hello');
// logMessage('100');


// let taehwane: string | number | boolean; //union type 유니온타입 별거없음
// function logMessage(value: string | number) { //union type 유니온타입 별거없음
//      if(typeof value === 'number') {
//          value.toLocaleString(); //any에서는 이렇게 넘버로 인식 못함. 유니온의 장점 
//      }
//      if(typeof value === 'string') {
//          value.toString();
//      }
// }
// logMessage('hello');
// logMessage(100);

interface Developerq {
    name: string;
    skills: string[];
}

interface Personq {
    name: string;
    age: number;
}

// function askSomeone(someone: Developerq | Personq) {
//     // someone.skills; //에러가 난다. 왜냐하면 Developer와 Person에는 skills가 없기 때문이다.
//     // someone.name; //에러가 나지 않는다. 왜냐하면 Developer와 Person에는 name이 있기 때문이다.
//     // someone.skills; //error
// }

// askSomeone({
//     name: '항', skills: ['javascript']
// });
// askSomeone({name:'항',age:100});

function askSomeone(someone: Developerq & Personq) { //Developer와 Person의 교집합
    someone.skills;
    someone.name; 
    someone.age;
}

askSomeone({
    name: '항', skills: ['javascript'],
    age: 0
});
askSomeone({
    name: '항', age: 100,
    skills: []
});

// &는 intersection type이다. 두개의 타입을 합쳐준다.
let test: string | number | boolean
let test2: string & number & boolean