console.log('hi'); //node.js의 출력

console.log('name:%s math:%d science:%d','hanbi',100,80); //출력하는거 c랑 비슷

//backtick 스트링자체를 변수에 넣거나 리턴값으로 사용가능 직관적
const greeting1 = 'hi';
const greeting2 = 'hello';
const name1 = 'hanbi';
const name2 = 'kimhanbi';

const statement = `${greeting1}! my name is ${name2}`;

console.log(`${greeting1}! my name is ${name1}`);
console.log('statement: ',statement);

//isNaN(): is not a number
const isNan123 = isNaN(123);
const isNanHello = isNaN('hello');
console.log(`${isNan123}, ${isNanHello}`);

//.length: 문자열 개수
const str='hihihihihihiiiihih!';
console.log(str.length);
console.log(str[str.length-1]);

//indexOf(): 문자열에 특정문자열 있는지 검사(인덱스리턴)
const string = 'the method can select element';
console.log(string.indexOf('thod'));

//배열
let numbers = [1,2,3];
let numbers2 = new Array(1,2,3);
console.log(numbers, numbers2);

let emptyarr=[];
emptyarr.push('a','b','c');
emptyarr.push('d');
emptyarr.push('e');
emptyarr.push('f');
console.log(emptyarr);

//json: javascript object notation, js에서 객체 표현하는 방법
const user={};
user.name='hanbi'; user.age=23;
const user2={name: 'hanbi',age:23};
console.log(user,user2);
console.log(user.name);
const s='age';
console.log(user[s]);

//삼항연산자: 조건식?true:false