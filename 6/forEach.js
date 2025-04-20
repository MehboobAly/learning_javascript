
//  for each method
let arr=[1,3,5,6,7,8];

arr.forEach(function printval(val){

    console.log(val);
});

  // filter method
let  array = [2,3,45,6,666,78,99,0,5,23,24]

   Evenarray = array.filter((val)  =>{


    return val % 2 === 0;
   })

   console.log(Evenarray);


   //reduce method
    const a =[1,4,5,6,88];

    const output = a.reduce((prev , curr)=>{

      return prev > curr ? prev : curr ;



    });

console.log(output);



