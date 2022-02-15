let array1 = [[1,2,3,][4,5,6]]

for(let i=0; i<=array1.length;  i++){

    for(let j=0; j<=array1[i].length; j++){
        console.log(array1[i][j])
        
    }
   
}


var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
var max_num=0;
for(var i=0; i<numbers.length ;i++){
        if (numbers[i]>max_num){
           max_num=numbers[i]
     
      }
}
console.log(max_num)


var numbers = [12,43,56,1,43,5,7]
var min_numbers=numbers[0];
for (var i=0; i<numbers.length;i++){
    if ((numbers[i]) < (min_numbers)){
        min_numbers = numbers[i]
    }
        
}
console.log(min_numbers)