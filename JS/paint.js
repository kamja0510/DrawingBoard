const canvas = document.querySelector(".canvas");
const colors = document.querySelectorAll(".controls__color");       // 색 바꾸는 요소를 불러옴.
const brushSize = document.querySelector(".controls .controls__brush input");
const mode = document.querySelector("#mode");

const ctx = canvas.getContext("2d");            // canvas의 context를 불러옴.

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);        // 배경색의 초기값을 설정하지 않으면, 저장했을 때 배경이 투명색으로 된다.
ctx.strokeStyle = "#2c2c2c";        // 선을 그을 때 색의 초기값.
ctx.lineWidth = 5;            // 선의 굵기 초기값.
ctx.fillStyle = "black";        // 색을 채울 때 색의 초기값.

let paintMode = false;
let fillMode = false;

function mouseMoveOnCanvas(event){              // 클릭했을 때 점이 그려지고 시작하려면 어떻게 해야할까?          
    const x = event.offsetX;    // 이벤트가 일어나는 공간안에서의 x좌표, window 상 x좌표는 clientX
    const y = event.offsetY;
    if(!paintMode){
        ctx.beginPath();        // 새로 선그리기가 시작되는 지점.         
    }
    else if(paintMode && !fillMode){        // 채우기모드 일때 그림이 그려지면 안돼므로
        ctx.lineTo(x, y);       // 잉크가 없는 펜으로 선을 그어놓음.
        ctx.stroke();           // 그어놓은 선을 채워줌.
    }
}

function stopPainting(){
    paintMode = false;
}

function startPainting(){
    paintMode = true;
}

function clickOnColor(event){
    ctx.strokeStyle = event.target.style.backgroundColor;
    ctx.fillStyle = ctx.strokeStyle;
}

function handleBrushSize(event){
    ctx.lineWidth = event.target.value;
}

function handleMode(){
    if(fillMode === false){
        fillMode = true;
        mode.innerText = "PAINT";
    }
    else{
        fillMode = false;
        mode.innerText = "FILL";

    }
}

function fillCanvas(){
    if(fillMode === true){
        ctx.fillRect(0, 0, canvas.width, canvas.height);        // 요소의 전체를 색으로 채우는 코드.
        ctx.closePath();
    }
}

canvas.addEventListener("mousemove", mouseMoveOnCanvas);            // 마우스 움직임을 감지하는 이벤트       
canvas.addEventListener("mousedown", startPainting);            // 마우스 클릭했을 때 이벤트          
canvas.addEventListener("mouseup", stopPainting);            // 마우스를 클릭했다가 땔 때
canvas.addEventListener("mouseleave", stopPainting);            // 마우스가 벗어낫을 때, 벗어낫다가 다시 들어왔을 때 마우스 클릭만 안떼면 그리기모드가 유지되게 어떻게 할까?
canvas.addEventListener("click", fillCanvas);

colors.forEach(color => color.addEventListener("click", clickOnColor));         // 모든 색바꾸기 버튼에 EventListener를 지정해줌.

brushSize.addEventListener("input", handleBrushSize);           // range input을 조종할 때 이벤트

mode.addEventListener("click", handleMode);

