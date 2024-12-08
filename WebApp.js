let img;
let img1;
let img2;
let img3;
function setup() {
	createCanvas(600, 400);
	background("White");
	image(img,10,20,35,40);
	image(img1,10,55,35,40)
	image(img2,10,100,35,40)
  image(img3,11,150,35,40)

}

function draw() {
	//ellipse(mouseX, mouseY, 20, 20);
	text('Saved',10, 95)
	text('Ingredients',1, 145)
	text('News',10, 195)

}
function preload() {
img = loadImage('menu-icon-three-horizontal-lines-260nw-2117996588.webp');	
img1 = loadImage('Save-icon.jpg')
img2 = loadImage('add.jpg')	
img3 = loadImage('mail.png')	
	
}
