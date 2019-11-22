//문자열에서 필요한 부분만 골라내는 것
//.replace() 이용해서 고치기
let string = '<h1>:::특별가 - 99,000원:::</h1>'

// /<expression>/g : 문자열 전체에서 expression 부분 찾을 수 있음
//escape (\) : 연산자, 특수문자, 예약어 앞에 써서 문자열이라고 알려줌(/ 앞에 써서 일반문자열로 인식하게함(escape))
const result1 = string.replace(/<h1>/g, '');
console.log('result1: ',result1);
const result2 = string.replace(/<h1>/g, '').replace(/<\/h1>/g,'');
console.log('result2: ',result2);

//.
let string1 = '<h1>특별가 - </h1><h2>99,000원</h2>';
const result11 = string1.replace(/<..>/g,'');
const result12 = string1.replace(/<.../g,'');

console.log('<..>',result11); console.log('<...: ',result12);

//{}
let string2 = '<h1>특별가 - </h1><h2>99,000원</h2>';
let stringdiv = '<div>특별가 - </div><h2>99,000원</h2>';
const replaceh1 = string2.replace(/<.{0,1}h1>/g,''); //<로 시작하고 . 어떤 글자가 0~1개 있고 >로 끝나는 패턴 의미
const replacetags = stringdiv.replace(/<.{0,4}>/g,'');

console.log(replaceh1);
console.log(replacetags);

//[] 대괄호 안쪽에 넣은 문자를 모두 찾아서 바꾸는 예제
let string3 = '(<h1>:::특별가 - 99,000원:::</h1>)';
const replacebracket = string3.replace(/[()]/g,''); 
const result = string3.replace(/[()/\-,]/g,''); //()랑 /랑 -을 매치해서 없앰
console.log(replacebracket);
console.log(result);

//match(): 특정 패턴을 찾는 정규식
let string4 = 'hello my name is hanbi';
const match = string4.match(/[a-l]{1,3}/g); //a-l까지 1개이상 3개 이하 문자열 추출
console.log(match);

