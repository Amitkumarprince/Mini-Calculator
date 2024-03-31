let buttons = document.querySelectorAll(".sign")
// console.log(buttons)
// let string = ""

let input = document.querySelector("#data")
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click", (e)=>{
    if(e.target.innerHTML == "="){
        data = document.querySelector("#data").value
        data = eval(data)
        // data.value = data
        // console.log(data)
        document.querySelector("#data").value = data
        
    }else{
        // console.log("hi")
        data = document.querySelector("#data").value
        data = data + e.target.innerHTML
        document.querySelector("#data").value = data
        // console.log(data)
    }
    })
})