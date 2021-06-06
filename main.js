function setup()
{
canvas=createCanvas(400,400);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();
}

function draw()
{
image(video,0,0,400,400);
circle(30,30,50);
fill(252, 0, 105);
rect(55,20,300,20);
fill(13, 252, 0);
circle(370,30,50);
rect(55,350,300,20);
circle(30,360,50);
fill(252, 0, 105);
circle(370,360,50);
rect(20,70,20,250);
fill(0, 252, 193);
rect(360,70,20,250);
fill(210, 0, 252);
}

function take_snapshot()
{
save('My_pic.png');
}