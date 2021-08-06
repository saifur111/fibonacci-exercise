// program to generate fibonacci series up to n terms
// take input from the user
// Create by Md saifur Rahman
function fibonacciFunction() {
    const number = parseInt(document.getElementById("inputNumber").value);
    //const outputParragraph = document.getElementById("output");
    console.log('Fibonacci Series:'+ number);
    var arrayValues = [];
    for(var i=0;i<number;i++){
       arrayValues.push(fib(i));
    }
    document.write("<br >");
    document.write(arrayValues);
    document.write("<br >");
    document.write("<br >");
    var btn = document.createElement("BUTTON");
    btn.innerText="Reload";
    document.body.appendChild(btn).addEventListener("click", function (){
        location.reload();
      });
}

 function fib(n){
    if(n === 0){
      return 0;
   } else if(n === 1) {
      return 1;
   } else {
      return (fib(n-1) + fib(n-2));
   }
}

