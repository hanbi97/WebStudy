//setInterval(fn,milsec): 정기적으로 실행
setInterval(()=>console.log('hello'),1000);

const printBye = () => console.log('bye');
setInterval(printBye,2000);

//setTimeout(fn,milsec): 일정시간 후에 실행하고 종료
setTimeout(()=>console.log('hello'),3000);

//clearInterval(fn): 정기적으로 실행 취소
const play =setInterval(()=>console.log('hi'),1000);
setTimeout(()=>{clearInterval(play);},5000);


