/*functional programming: 함수를 파라미터로 넘길 수 있음-> for문과 변수의 사용을 줄이고 for 대신 재귀를 쓴다
병렬처리, 비동기: 사용하는 값들이 불변성,순수성 가져야함
비동기 실행 할 때 return value 없고 callback 인자로 넘겨서 사용
*/

//재귀함수
const countdown =(value)=>{
    console.log('value: ',value);
    if(value==0){
        return value;
    }
    else{
        return countdown(value-1);
    }
};
console.log('result: ', countdown(5));

let add = (start, end, result)=>{
    if(start>end){
        return result;
    }
    else{
        return add(start,end-1,result+end);
    }
};
console.log('result: ',add(1,5,0));

let fac = (num) =>{
    if(num==0){
       return 1;
    }
    else{
        return num*fac(num-1);
    }
}

console.log("fac:",fac(5));

let fibo = (val) =>{
    if(val==1 || val==2){
        return 1;
    }
    else{
        return fibo(val-1)+fibo(val-2);
    }
}

console.log('fibo: ',fibo(4));

const list=[80,90,100];
let sumlist = (list,total,len) =>{
    if(len==list.length){
        return total;
    }
    else{
        return sumlist(list,total+list[len],len+1);
    }
}
console.log('sumlist: ',sumlist(list,0,0));

/*closure: 자신이 생성되었을때 환경을 기억하는 함수, 현재상태를 기억하고 변경된 최신 상태를 유지함
함수 내부에 작성된 함수*/
function outerFunction () {
    const outer = 'I see the outer variable!'
    
    return function innerFunction() {
      console.log(outer)
    }
  }
  outerFunction()();
  
  /*curring: 파라미터를 여러개 가지는 함수가 있을 때 그 중 일부 파라미터만 필요로 하는 함수를 만드는 방법 
  이거 이용해서 중복 최소화 하면서 코딩가능
  인자 부족 == 함수가 반환
  인자 충분 == 값을 반환
  */
let addcur=x=>y=>x+y;
let add10=addcur(10);

console.log(addcur(10,20));
console.log(add10(20));
console.log(addcur(10)(20));

let coffeMachine = liquid => espresso => `${liquid}+${espresso}`;
let americanoMachine = coffeMachine('water');
let latteMachine = coffeMachine('milk');

const americano = americanoMachine('coffee bean');
const latte = latteMachine('coffee bean');

console.log(americanoMachine+','+americano);
console.log(latteMachine+','+latte);

//filter(): .filter(item => 조건)
//map(): .map(item=>item*10) 아이템에 10 다 곱해줌
//.reduce(): 해당 배열의 첫번째 인덱스~마지막 인덱스 값 누적 계산해서 하나로 내보내줌


/*promise: callback 중첩 쉽게 작성할라고 사용 */
/*const promiseResult = new Promise((resolve)=>{
    resolve(1);
}).then(result=>{});*/

const promiseFirst = new Promise(resolve => resolve(1))
.then(result=>`${result+20}`);

const promiseSecond = new Promise(resolve => resolve(1))
.then(result=>`${result+20}`);

Promise.all([promiseFirst,promiseSecond]).then(result=>console.log(result)); 
//비동기 처리 여러개 끝내고 특정 로직 실행하고 싶을 때 Promise.all([promise들]).then(()=>{뒤에 할 작업}) 사용

/*exports: 모듈 분리 할 때 사용
->exports.함수이름 = 위에서 쓴 함수
require: 분리한 모듈 가져올때 사용
->const 이름 = require('경로');
*/