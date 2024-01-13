const el = document.getElementById("container");
const colorbtn = document.getElementById("colorbtn")
const arr = ["green","red","yellow","blue","cyan","gold"];

const newColor = () => {
    let a = Math.floor(Math.random()*6)
  el.style.backgroundColor = arr[a]
  colorbtn.innerText = arr[a]
};
