let limit = 1000;

let promise = new Promise ( function(reject, resolve){
    if(limit<10){
        reject("10보다 값이 작습니다.");
    }
    s = 0;
    for(i=1; i<=limit; i++)
    s+=i;
    resolve(s);
}).then((res)=>{
    console.log(res); // 나중에 출력된다.
}).catch((error)=>{
    console.log(error);
});
console.log("end...") //먼저 출력된다.