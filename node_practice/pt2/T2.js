//for of: list에 있는 데이터 개수만큼 하나씩 뽑아서 반복문 실행
const userList=[
    {name: 'hanbi', age: 23, score: 100},
    {name: 'kim', age: 30, score: 0}
];

for(const user of userList){
    console.log('user: ',user);
}
//forEach(): 값을 하나씩 뽑아서 바로 함수에 넣어서 계산할 때 편함
userList.forEach(function(user){
    console.log(user);
});
userList.forEach(user=>console.log('user:',user));

//Date():날짜시간 정보 객체 생성
const today=new Date();
const tempdate=new Date(2019,11-1,3,19,15,23); //month 설정시 -1 해줘야함

console.log(today.toLocaleString());
console.log(tempdate.toLocaleString());

console.log('year: ',today.getFullYear());

//yyyy-mm-dd로 출력
const time=new Date();
const yyyy=time.getFullYear();
const mm=time.getMonth()<9 ? `0${time.getMonth()+1}` : `${time.getMonth()+1}`;
const dd=time.getDate()<10 ? `0${time.getDate()}` : `${time.getDate()}`;
console.log(`${yyyy}-${mm}-${dd}`);

//timestamp
const date = new Date();
const dateTotimestamp = date.getTime();
const timestampTodate = new Date(dateTotimestamp);
const initialTimestamp = new Date(1);
console.log(dateTotimestamp,timestampTodate, initialTimestamp);

//전역객체: 모듈 설치안하고 자유롭게 사용가능(process,console)
console.log(process.version);
