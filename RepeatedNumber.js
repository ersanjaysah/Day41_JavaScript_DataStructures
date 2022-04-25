var arr=[];

for (var i=0;i<100;i++){
    if(i%11==0){
       arr[i]=i;
    }
}
console.log("All the repeated number till 100 is: ")
for (var j=0;j<arr.length;j++){
    console.log(arr[j]);
}