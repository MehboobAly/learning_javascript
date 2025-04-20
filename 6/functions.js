 /*function student( marks , subject , classs){

    console.log(marks);
    console.log(subject);
    console.log(classs);
}
 student(34 , "physics" , 7);


 function sum( x,y){
    s=x+y;

    return s;
 }

 let val=sum(30,90);
 console.log(val);
 */



 function countVowel(str){

    let count = 0;
    for(const char of str){

        if(char==="a" || char==="e" || char==="i" || char ==="o" ||char==="u"){

            count++
        }

    }
    console.log(count);
 }

  countVowel("abcdefghhuouetbsmnkjuydgpoiuytrfs");

