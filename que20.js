let n = 12;
let count = 0;
for (let i=2; i<=n-1; ){
    if (n%i==0){
        count++
        console.log("not prime")
        break
    }
    i++}
if(count==0){
    console.log("prime")
}
