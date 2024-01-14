const countTxt = document.getElementById("count")
let a = 0


const decrease = ()=>{
    a--
    if(a==0){
        countTxt.style.color = 'black'
    }
    if(a < 0){
        countTxt.style.color = 'red'
        countTxt.innerText = a
    }else{
        countTxt.innerText = a
    }
}

const reset = () =>{
    countTxt.style.color = 'black'
    countTxt.innerText = 0
    a = 0
}

const  increase = ()=>{
    a++
    if(a==0){
        countTxt.style.color = 'black'
    }
    if(a > 0){
        countTxt.style.color = 'blue'
        countTxt.innerText = a
    }else{
        countTxt.innerText = a
    }
}

