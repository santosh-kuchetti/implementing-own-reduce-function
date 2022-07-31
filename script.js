/*
    const arr = [1, 2, 3];
    const sum = arr.reduce((acc, item) => {  
        acc = acc + item;
        return acc;
    }, 0)

    console.log(sum);
*/
/*
    we can see two challenges here,
    1.  a function that actually performs the reduce operation - 'reducer'. It need two parameters such as accumulator and initialValue.
    2.  actual reduce function. It needs three parameters such as callback reducer function to perform the operation, initialValue, array.
*/

const arr = [1, 2, 3];
Array.prototype.myreduce = function (reducer, initialValue, arr) {   // 'myreduce' function parameters are callback function reducer, initialValue, arr
    let acc = initialValue;   //initially our accumulator will be 0
    for (let i = 0; i < arr.length; i++){   //  to get each element in the array as our current value 
        let currentValue = arr[i]
        acc = reducer(acc, currentValue);  //  storing the returned value fron the function into the accumulator
    }
    return acc;   // finally returning the accumulator
}
const sumReducer = function (accumulator, initialValue) {  // this is the reducer function that is performing operations
    return accumulator + initialValue;    //  it returns the value
}
 
console.log(arr.myreduce(sumReducer, 0, arr));  // calling 'myreduce' function and passing the arguments such as function sumReducer will be reducer, 0 will be initialValue, our arr will be arr