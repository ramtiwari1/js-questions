let n = 7;
let i = 2;
let count = 0;
while(i<=n-1){
    if (n%i==0){
        count++
        console.log("not prime")
        break
    }
    i++}
if (count==0){
    console.log("prime")
}