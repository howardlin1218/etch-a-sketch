//display slider values
const slider = document.getElementById("myRange");
const gridSize = document.querySelector(".grid-size");
var num1 = +slider.value;
gridSize.textContent = "grid size: " + slider.value + "x" + slider.value;
var isDown = false;
//loop to see how many grids to generate 
const outerBox = document.querySelector(".grid");
var marginOrNo = false;
function generateGrid (num){
    const widthAndHeight = ((650-(num-1)*2)/num) + "px";
    console.log(widthAndHeight);
    num *= num;
    if(num <= 100){
        marginOrNo = true;
    }
    while (num > 0){
        const insideGrid = document.createElement("div");
        insideGrid.classList.add("c");
        if(marginOrNo){
            insideGrid.style.marginLeft = "-1px";
        }
        outerBox.appendChild(insideGrid);
        insideGrid.style.height = widthAndHeight;
        insideGrid.style.width = widthAndHeight;
        num--;
    }
    marginOrNo = false;
}
generateGrid(num1);


slider.oninput = function() {
    const allBoxes = document.getElementsByClassName("c");
    const arrayLength = allBoxes.length;
    for(let i = 0; i < arrayLength; i++){
        allBoxes[0].remove();
    }
    gridSize.textContent = "grid size: " + this.value + "x" + slider.value;
    num1 = +this.value;
    generateGrid(num1);
}

//buttons
const rButton = document.getElementById("red");
const gButton = document.getElementById("green");
const bButton = document.getElementById("blue");
const eButton = document.getElementById("clear");
const eraserButton = document.getElementById("eraser");
const rainbowButton = document.getElementById("rainbow");

function rainbow() {
    const allBoxes = document.getElementsByClassName("c");
    const arrayLength = allBoxes.length;
    for(let i = 0; i < arrayLength; i++){
        //const randomColor = Math.floor(Math.random()*16777215).toString(16);
        allBoxes[i].addEventListener("mouseover", event=> {
            if (event.buttons === 1) {
                allBoxes[i].style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            }
        });
        allBoxes[i].addEventListener("mousedown", ()=>allBoxes[i].style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16));
    }
}
function eraser() {
    const allBoxes = document.getElementsByClassName("c");
    const arrayLength = allBoxes.length;
    for(let i = 0; i < arrayLength; i++){
        allBoxes[i].addEventListener("mouseover", event=> {
            if (event.buttons === 1) {
                allBoxes[i].style.backgroundColor = "antiquewhite";
            }
        });
        allBoxes[i].addEventListener("mousedown", ()=>allBoxes[i].style.backgroundColor = "antiquewhite");
    }
}

function eraseAll (){
    const allBoxes = document.getElementsByClassName("c");
    const arrayLength = allBoxes.length;
    for(let i = 0; i < arrayLength; i++){
        allBoxes[i].style.backgroundColor = 'antiquewhite';
    }
}

function changeToGreen(){
    const allBoxes = document.getElementsByClassName("c");
    const arrayLength = allBoxes.length;
    for(let i = 0; i < arrayLength; i++){
        allBoxes[i].addEventListener("mouseover", event=> {
            if (event.buttons === 1) {
                allBoxes[i].style.backgroundColor = "green";
            }
        });
        allBoxes[i].addEventListener("mousedown", ()=>allBoxes[i].style.backgroundColor = "green");
    }
}

function changeToRed(){
    const allBoxes = document.getElementsByClassName("c");
    const arrayLength = allBoxes.length;
    for(let i = 0; i < arrayLength; i++){
        allBoxes[i].addEventListener("mouseover", event=> {
            if (event.buttons === 1) {
                allBoxes[i].style.backgroundColor = "red";
            }
        });
        allBoxes[i].addEventListener("mousedown", ()=>allBoxes[i].style.backgroundColor = "red");
    }
}

function changeToBlue(){
    const allBoxes = document.getElementsByClassName("c");
    const arrayLength = allBoxes.length;
    for(let i = 0; i < arrayLength; i++){
        allBoxes[i].addEventListener("mouseover", event=> {
            if (event.buttons === 1) {
                allBoxes[i].style.backgroundColor = "blue";
            }
        });
        allBoxes[i].addEventListener("mousedown", ()=>allBoxes[i].style.backgroundColor = "blue");
    }
}


gButton.addEventListener("click", changeToGreen);
rButton.addEventListener("click", changeToRed);
bButton.addEventListener("click", changeToBlue);
eButton.addEventListener("click", eraseAll);
eraserButton.addEventListener("click", eraser);
rainbowButton.addEventListener("click", rainbow);