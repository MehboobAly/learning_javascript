let n = prompt("Enter a number");

let arr =[];

for(let i=0 ; i<=n ; i++){
    arr[i-1]=i;

}

console.log(arr);

let sum=arr.reduce ((prev , curr) =>{
             
    return prev+curr;

});
 console.log("sum = " , sum);

 let mul=arr.reduce((prev , curr)=>{

    return prev*curr;
 });

 console.log("multiply = " ,mul);


 