const arr = [1, 2, 3, 4, 5];
//console.log(arr[1]); 

const myarr = new Array(1, 2, 3, 4);
//console.log(myarr);
myarr.push(2);
myarr.push(22);
//console.log(myarr);
myarr.pop();
//console.log(myarr);
myarr.unshift(10);
//console.log(myarr);
//console.log(myarr.includes(2));

const a2 = myarr.join()
// console.log(myarr)
// console.log(a2)
// console.log(typeof(myarr))
// console.log(typeof(a2))

//slice and splice
console.log(myarr);
const n1 = myarr.slice(1,3);
const n2 = myarr.splice(1,3);
console.log(n1)
console.log(n2)
