const canvas = document.querySelector(".canvas");

let paintMode = false;

function stopPainting(){
    paintMode = false;
}

function mouseMoveOnCanvas(event){          // 마우스 움직임을 감지하는 이벤트
    const x = event.offsetX;    // 이벤트가 일어나는 공간안에서의 x좌표, window 상 x좌표는 clientX
    const y = event.offsetY;
}

function mouseDownOnCanvas(){          // 마우스 클릭했을 때 이벤트
    paintMode = true;
}

function mouseUpOnCanvas(){          // 마우스를 클릭했다가 땔 때
    stopPainting();
}


canvas.addEventListener("mousemove", mouseMoveOnCanvas);       
canvas.addEventListener("mousedown", mouseDownOnCanvas);          
canvas.addEventListener("mouseup", mouseUpOnCanvas);
canvas.addEventListener("mouseleave", stopPainting);             