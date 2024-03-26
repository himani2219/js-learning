const user = {}
user.id = "neha411"
user.name = "Neha"
user.isLoggedIn = true
//console.log(user)

const user2 = {
    email : "abc@gmail.com",
    fullname: {
        userfullname:{
            firstname: "abc",
            lastname : "xyz"
        }
    }
}

//console.log(user2.fullname.userfullname.firstname)

const ob1 = {1:"a", 2:"b"}
const ob2 = {3:"c", 4:"d"}
const ob3 = {5:"e", 6:"f"}
// const ob4 = Object.assign({}, ob1, ob2, ob3)
const ob4 = {...ob1, ...ob2, ...ob3}
//console.log(ob4)

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))
// console.log(user.hasOwnProperty('isLoggedIn'))

const course = {
    coursename : "javascript",
    price : "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor: ins}=course
// console.log(ins)