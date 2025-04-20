let array =[34,36,54,53,56,55,43];

 let i=0;

for(let val of array){

    console.log(val);

    let offer = val/10;

    array[i]=array[i]-offer;

    console.log(array[i]);

    i++;

   
}
    

