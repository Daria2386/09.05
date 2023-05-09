// const p = document.getElementById('para')
// console.log(p.classList)
// console.log(p.classList.contains('in'));
// if (p.classList.contains('in')){
//   console.log('if sta im not adding class');
// } else {
//   p.classList.add('in')
//   console.log("if ,not ,I m adding")
// }
// console.log(p.classList)

// console.log(p.classList)
// p.classList.remove('toRemove');
// console.log(p.classList)

// console.log(p.class)

// const p = document.getElementById("para")
// const but1 = document.getElementById('appear')
// const but2 = document.getElementById('disapp')
// but1.addEventListener('click',(appear1))
// function appear1 (){
//   p.classList.add("invisib")
// }
// but2.addEventListener('click',(disapp2))
// function disapp2(){
//   p.classList.remove("invisib")
// }
 

// to switch it on and off by pressing the same button

 
// const p = document.getElementById("para")
// const but1 = document.getElementById('appear')
// const but2 = document.getElementById('disapp')
// function  appear1 () {
//   p.classList.toggle("invisib")
// }
// but1.addEventListener("click", appear1)


// const p = document.getElementById("para")
// const but1 = document.getElementById('appear')
// function  appear1 () {
//   p.classList.toggle("invisib")

//   if (p.classList.contains("invisib")){ 
//     but1.textContent = "Appear"

//   } else{
//     but1.textContent = "Disappear"
//   }
//   } 
   
//    but1.addEventListener("click", appear1)
    
let number = document.getElementById("number")
let n = 0
number.textContent = n


let b1 = document.getElementById("addingN")
b1.addEventListener('click',addNum)
function addNum() {
  n = n + 1
  number.textContent = n
}



let b2 = document.getElementById("reset")
b2.addEventListener('click', reset1)
function reset1(params) {
  n = 0
  number.textContent = n
}



let b3 = document.getElementById("minusN")
b3.addEventListener('click',minusN)
function minusN() {
  n = n - 1
  number.textContent = n
}



