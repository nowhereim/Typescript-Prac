let str: string = "hello";

let num: number = 10;

let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ["Capt", "Thor", "Hulk", "Ironman"];
let items: number[] = [1, 2, 3];

let address: [string, number] = ["gangnam", 100];
// TS 객체
let obj: object = {};

// let person: object = {
//   name: "capt",
//   age: 100,
// };

//위와같이하면 각각의 요소들에 타입을 지정해줄수 없어서 아래와 같이 해야함.

let person: { name: string; age: number } = {
  name: "쇼발",
  age: 100,
};

//TS 진위값

let show: boolean = true;

//TS 함수 반환값을 정의하는 방식
function sum(): number {
  return 10;
}

sum();

// 함수에 타입을 정의하는 방식
let sum2 = function (a: number, b: number): number {
  return a + b;
};

// TS 함수의 옵셔널 파라미터
let corn = (a: number, b: number) => a + b;
// corn(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
let corn2 = (a: string, b?: string, c?: string) => a + b + c;
corn2("a", "b");
