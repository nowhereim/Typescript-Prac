interface sex {
    name: string;
    age: number;
}
//인터페이스는 {}로 타입을 정의하는 것인거같다?

//변수에 인터페이스 활용
let hey: sex = {
    name: "쇼발",
    age: 100,
}

// 함수에 인터페이스 적용

const 할램 = {
    name: "할램",
    age: 100,
};

function getUser(user: sex) {
    console.log(user);
}

getUser(할램);



// 함수의 형식까지 정의할 수 있다.
interface sumfunction {
    (a: number, b: number): number;
}

let som: sumfunction;

som = function (a: number, b: number): number {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

let arrr: StringArray = [ "a", "b", "c"];
// arrr[1] = "d";

//딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
    //RegExp는 정규표현식을 의미한다.
}

let objj: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

// objj["cssFile"] = '헤아';

Object.keys(objj).forEach(function (value) {}); //이건 뭐지?
//Object.keys는 객체의 키값을 배열로 반환한다.
//forEach는 배열의 각 요소에 대해 함수를 실행한다.
//즉, objj의 키값을 배열로 반환하고 그 배열의 각 요소에 대해 함수를 실행한다는 뜻이다.

//인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person { //Person을 상속받는다.
    language: string;
}

let capt: Developer = {
    name: "캡틴",
    age: 100,
    language: "ts",
}