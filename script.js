
let btn = document.getElementById("btn")
let range = document.getElementById("range")
let ms = document.getElementById("ms")

range.addEventListener("change",function(){
  console.log(range.value)
  ms.innerHTML=range.value
})

btn.addEventListener("click",function(){


let redValue,greenValue,blueValue

  setInterval(() => {
    let redValue =Math.floor(Math.random()*255)
    let greenValue =Math.floor(Math.random()*255)
    let blueValue =Math.floor(Math.random()*255)
   document.body.style.backgroundColor ="rgb("+ redValue+ ", "+ greenValue + ", " + blueValue +")"
    
  },range.value);

  
})
