// let age = 10;
// result = age >= 16 ? "greater" : "less";
// console.log(result);


// num = prompt("enter the number");
// if(num % 5 == 0){
//     console.log(num,"num is a multiple of 5 ");
// }
// else{
//     console.log(num,"num is a not multiple of 5 ");
// }

// let marks =  83;
// let grade;

//     if(marks >= 80 && marks <= 100){
//         grade = "A";
//     }
//     else if(marks >= 70 && marks <= 89){
//         grade = "B";
//     }
//     else if(marks >= 60 && marks <= 69){
//         grade = "C";
//     }
//     else if(marks >= 50 && marks <= 59){
//         grade = "D";
//     }
//     else if(marks >= 0 && marks <= 49){
//         grade = "D";
//     }
//     console.log(grade);


//while loop
// let i = 1;
// while(i <= 5){
//     console.log("i = ",i);
//     i++;
// }


// do while loop
// let i = 1;
// do{
//     console.log("i = ",i);
//     i++;
// }while(i<=10);


// for in loop
// let student = {
//     name : "Rishabh",
//     age : 21,
//     cgpa : 7.5,
//     ispass : true
// };
// for(let key in student){
//     console.log("key = ",key,"values = ",student[key]);
// }

// prac-1
// for (let i = 0; i<=100; i++){
//     if(i % 2 == 0){
//         console.log("i =",i);
//     }
// }


// prac-2
// let gamenum = 20;
// let username = prompt("number that you want to try");
// while(username != gamenum){
//    username = prompt("plese guess the right number");
// }
// console.log("congratulation you won the game");


//temperal literals
// let obj = {
//     name : "pen",
//     price : 10,
// }
// let output = `the cost of this ${obj.name} is ${obj.price}`
// console.log(output);


// stringmethods

// let str = "Hello"
// str = str.toLowerCase()
// console.log(str)

// let str = "hello"
// console.log(str.slice(2))

// let str = "rishabh";
// console.log(str.charAt(3));


// practice -1 
// let username = prompt("enter full name");
// console.log("full name of the user is:",username);
// let str = ("@");
// let str2 = username.length;
// console.log(str + username + str2);  

// array
// let marks = [45, 23, 48, 59, 95, 60]
// for(let i = 0; i<marks.length; i++)
// console.log(marks[i]);

// for(let hero of marks){
//     console.log(hero);
// }

// practice lecture4
// let marks = [85, 97, 44, 37, 76, 60]
// let sum = 0;
// for(let val of marks){
// sum = sum + val;
// }
// console.log(sum);
// let avg = sum/marks.length;
// console.log(avg)


// practice lecture4 -2
// let items = [250, 645, 300, 900, 50]
// let i = 0;
// for(let val of items){
//     console.log(`value before the offer = ${val}`)
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after the offer = ${items[i]}`)
//     i++;
// }


// array methods
// let arr = [20,40,10,45,65,98,49]
// let array = arr.pop()
// console.log(arr);

//examples
// let fruits = ["banana", "apple","strawberry", "mangoes", "pineapple"]
// console.log(fruits);
// let f = fruits.reverse();
// console.log(f);

//functions in javascript
// function sum(x,y){
//     console.log(x + y);
// }
// sum(298, 1000);


//arrow functions
// let arrow = (a, b) =>{
//     console.log(a + b);
// }

// function mul(x,y){
//     return x*y;
// }
// let arrowmul = (x,y) =>{
//     return x*y;
// }


//practice -1 lec-5
// function countvowels(str){
//     let count = 0;
//     for(let char of str){
//         if(
//             char === "a" || char ==="e" || char ==="i" || char ==="o" || char ==="u"
//         )
//         count++
//     }
//     return count; 
// }

// for each in functions (higher order function)  // only three variables we are 
// let arr = [20, 34, 12, 94, 49]
// arr.forEach((val,idx,arr)=>{
//     console.log(val,idx,arr);
// })

// squer a number using foreach method
// let nums = [3, 4, 5, 6, 7, 8] 
// nums.forEach((num) =>{
//     console.log(num * num);
// })

//filter method in array
// let arr = [2,3,4,5,6,7,8,9];
// let arrfilter = arr.filter((val) => {
//     return val % 2 == 0;
// })
// console.log(arrfilter);

//reduce method in array
// let arr = [1,2,3,4,5,6]
// const output = arr.reduce((prev,curr) => {
//     return prev + curr;
// });
// console.log(output);

// practiceset last
// let n = prompt("enter a number:");
// let arr = [];
// for (let i = 1; i<=n; i++){  
//     arr[i-1] = i;
// }
// console.log(arr);


//Dom part2
// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);


//                                       event handling
// let newbtn = document.createElement("button");
// newbtn.innerText = "click me!!";
// console.log(newbtn);

// let div = document.querySelector("div");
// div.appn(newbtn)

// let newbtn = document.createElement("button");
// newbtn.innerText = "click Me!!";
// console.log(newbtn);

// let body = document.querySelector("body");
// body.prepend(newbtn);

// let para = document.querySelector("p")
// para.classList.remove("newclass");


//                               LIGHT MODE AND DARK MODE
// let modebtn = document.querySelector("#mode");
// let body = document.querySelector("body");
// let currmode = "light";
// modebtn.addEventListener("click", () => {
//     if(currmode == "light"){
//         currmode = "dark"
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }
//     else{
//         currmode = "light"
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currmode);
// })



//                                 class and objects
// class toyotacar{
//     constructor(brand,mileage){
//         console.log("creating new object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop")
//     }
//     setbrand(brand){
//         this.brand = brand;
//     }
// }

// let fortuner = new toyotacar("fortuner",15);
// fortuner.setbrand("fortuner");
// let lexus = new toyotacar("lexus",10);
// lexus.setbrand("lexus");


//                                       inheritance
// class person{
//     constructor(name){
//         this.species = "homo sapiens";
//         this.name = name;
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep")
//     }
// }
// class engineer extends person{
//     constructor(name){
//         super(name);
//     }
//     work(){
//         super.eat();
//         console.log("solve problems, build something");
//     }
// }

// let rishabhobj = new engineer("rishabh");



//                                    SET TIMEOUT FUNCTION
// console.log("one");

// console.log("two");
// setTimeout(() => {
//     console.log("five");
// }, 5000);
// console.log("three");
// console.log("four");


//                                   promises in javascript

// let promise = new Promise((resolve,reject) => {
//     // console.log("i am a promise");
//     resolve("succeed");
//     // reject("some error occupied");
// })



// const getpromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("i am a promise");
//         // resolve("succeed");
//         reject("due to network error");
//     });
// };
// let promise = getpromise();

// promise.then((res) => {
//     console.log("promise fullfilled",res);
// });

// promise.catch((err) => {
//     console.log("rejected",err);
// });




// function asyncfun1(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("succeed");
//         }, 4000);
//     });
// };
// function asyncfun2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("succeed");
//         }, 4000);
//     });
// };
// console.log("fetching the data...");
// let p1 = asyncfun();
// p1.then((res) => {
//     console.log(res);
// })

// console.log("fetching the data1...");
// asyncfun1().then((res) => {
//     console.log("fetching the data2...");
//     asyncfun2().then((res) => {});
// });




//                               PROMISE CHAIN

// function getdata(dataid){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("data", dataid);
//             resolve("succeed");
//         }, 2000);
//     })
// }
// getdata(1)
// .then((res) => {
//     return getdata(2);
// })
// .then((res) => {
//     return getdata(3);
// })
// .then((res) => {
//     console.log(res);
// });


//                                Async-await   
// function api(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 2000);
//     })
// }
// async function getweatherdata(){
//     await api();
//     await api();
// }

// ------------------------------------------------------------------------

//                         Fetch Api with project
// const URL = "https://cat-fact.herokuapp.com/facts";
// const factpara = document.querySelector("#fact");
// const btn = document.querySelector("#btn");

// const getfacts = async () =>{
//     console.log("getting data...");
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     factpara.innerText = data[0].text;
// };

// function getfacts(){
//     fetch(URL)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data);
//             factpara.innerText = data[2].text;
//         });
// };

// btn.addEventListener("click",getfacts);

// ----------------------------------------------------------------------------


function myDisplayer(something){            // myDisplayer is the name of the Function
    document.getElementById("demo").innerHTML = something;
}
function myFunction(num1, num2, mycallback){
    let sum = num1 + num2;
    mycallback(sum);
}
myFunction(5, 5, myDisplayer);          //It myDIsplayer Fuction pass as an argument to the myFunction



