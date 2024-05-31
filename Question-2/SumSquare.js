function SumSquares(array) {
    let sum = 0;

    function calculate(arr){
       for(let el of arr){
           if(Array.isArray(el)){
            calculate(el);
           }else{
               sum += (el*el);
           }
       }
    }
    calculate(array);
    return sum;
}


var l = [1, 2, 3];
console.log(SumSquares(l));  

l = [[1, 2], 3];
console.log(SumSquares(l)); 

l = [[[[[[[[[1]]]]]]]]];
console.log(SumSquares(l)); 

l = [10, [[10], 10], [10]];
console.log(SumSquares(l));



// second solution Using Array.falt Method

// function SumSquares1(array) {
//     return array.flat(Infinity).reduce(function(sSum,curr){
//         return sSum += curr*curr;
//     },0)

// }


// var l = [1, 2, 3];
// console.log(SumSquares1(l)); 

// l = [[1, 2], 3];
// console.log(SumSquares1(l)); 

// l = [[[[[[[[[1]]]]]]]]]; 
// console.log(SumSquares1(l)); 

// l = [10, [[10], 10], [10]];
// console.log(SumSquares1(l));