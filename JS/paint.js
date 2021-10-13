const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");            // canvas의 context를 불러옴.

ctx.strokeStyle = "#2c2c2c";        // 선을 그을 때 색의 초기값.
ctx.lineWidth = 2.5;            // 선의 굵기 초기값.

let paintMode = false;

function mouseMoveOnCanvas(event){          
    const x = event.offsetX;    // 이벤트가 일어나는 공간안에서의 x좌표, window 상 x좌표는 clientX
    const y = event.offsetY;
    if(!paintMode){
        ctx.beginPath();        // 새로 선그리기가 시작되는 지점.         
    }
    else{
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

canvas.addEventListener("mousemove", mouseMoveOnCanvas);            // 마우스 움직임을 감지하는 이벤트       
canvas.addEventListener("mousedown", startPainting);            // 마우스 클릭했을 때 이벤트          
canvas.addEventListener("mouseup", stopPainting);            // 마우스를 클릭했다가 땔 때
canvas.addEventListener("mouseleave", stopPainting);            // 마우스가 벗어낫을 때            