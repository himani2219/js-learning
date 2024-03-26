// let mydate = new Date();
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());


//month index start from 0
let d = new Date(2023, 0, 23);
console.log(d.toLocaleString());
console.log(d.toLocaleString().substring(0,9).replaceAll('/','-'));

d.toLocaleString('default',{
    weekday: "long"
})