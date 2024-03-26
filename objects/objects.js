const mySym = Symbol("key1")
//object literals
const JsUser = {
    name: "Himani",
    age: 21,
    [mySym]:"mykey",
    location: "Haryana",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.name)
console.log(JsUser["name"])
console.log(JsUser[mySym])

//Object.freeze(JsUser)
//no changes can be made to object

JsUser.greeting = function(){
    console.log(`Hello ${this.name}.`);
}

console.log(JsUser.greeting())