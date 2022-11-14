canvas = document.getElementById("a");
ctx= canvas.getContext("2d");

color = "blue";
width_xd = "1"; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.width_xd = "1";
ctx.arc(500, 300, 40 ,0 , 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_xd = document.getElementById("width").value;
    console.log(color);
    
     mouse_x = e.clientX - canvas.offsetLeft;
     mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    circle(mouse_x , mouse_y);    
}

function circle(mouse_x , mouse_y)
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_xd;
ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);
ctx.stroke();
}


function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}