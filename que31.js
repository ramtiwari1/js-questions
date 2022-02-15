let array1 = [12,43,54,12,5,1,54];

let min1=array1[0]
for (let i=0; i<array1.length; i++){
    if (array1[i] < min1){
        min1 = array1[i]
    }
}
console.log(min1)