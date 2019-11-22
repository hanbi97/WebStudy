//기본선언(function declaration)
function printHello(msg){
    console.log(msg);
}
printHello('hi');

//function expression, 익명함수: 이름없는함수
const printWelcome = function(){
    console.log('welcome');
}
printWelcome();

//arrow function,lambda expression (function 빼고 ()=>로 씀)
const printBye = () =>{
    console.log('bye');
}
printBye();

//이거 함수임(함수 변수에 넣기 가능)
const pm=printHello;
pm('hi');

//그래서 함수를 다른함수의 인자로 넣을수 있다(js에서 function은 first-class citizens, 변수에 넣거나 함수의 파라미터로 전달 가능)
function plus(a,b){
    return a+b;
}

function calc(a,b,func){
    return func(a,b);
}

console.log(calc(10,20,plus));

//arrow function 예제
function sumAndprint(a,b){
    const res=a+b;
    return `result is ${res}`;
}

let str = (a,b) =>{
    const r=a+b;
    return `arrow result is ${r}`;
}

console.log(sumAndprint(1,2));
console.log(str(1,2));

const userList=[
    {name: 'hanbi', age: 23, score: 100},
    {name: 'kim', age: 30, score: 0}
];

let plussss = (a,b)=>a+b;
userList.forEach(user=>console.log(`${user.name} total:${plussss(user.score,user.age)}`));

//callback function: 특정 함수에 파라미터로 전달된 함수
const sum = (a,b) => a+b;
const printResult = (result) => {
    console.log(`result is: ${result}`);
};

const calcAndprint = (calc,callback) => { //callback==printResult
    callback(calc);
};

calcAndprint(sum(1,2),printResult);

