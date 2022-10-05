
	//RequestAnimationFrame for the Browsers
(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();
		var canvas = document.getElementById("canvas_1");
		var ctx = canvas.getContext("2d");
		var craft_x=50;
		var craft_y=410;
		var counter=0;
		var imageObj = new Image();
		var enemy = new Image();
		var explosion= new Image();
		var hit = new Audio();
		var enemy_hit=new Audio();
		var energy=100;
		var score=0;
		// Welcome message
	  ctx.font = '50pt Calibri';
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'green';
      ctx.strokeText('Welcome to Virus Fighter', 50, 200);
	  ctx.font = '30pt Calibri';
	  ctx.strokeText('Press arrow key and then spacebar to start', 50, 250);

// addEventListener keyup
canvas.addEventListener('keyup', function(event2) {
	craft = event2.keyCode;
	if (craft==37|| craft==38 || craft==39) {
	move=craft;}
	if (craft==32) {
	fire=craft;}
});		
		
// Create a multidimensional array bullet for virus bullets
var bullet = new Array(50); // 50 rows 
for(var i = 0; i < 50; i++)
bullet[i] = new Array(3); //  3 columns
// Initialize the array
for(i = 0; i <50; i++) {
for(j = 0; j <3; j++) {
bullet[i][j] = 0;
}

}

// Create a multidimensional array east
var east = new Array(50); // 50 rows 
for(var i = 0; i < 50; i++)
east[i] = new Array(3); //  3 columns
// Initialize the array
for(i = 0; i <50; i++) {
for(j = 0; j <3; j++) {
east[i][j] = 0;
}
}
		
// Create a multidimensional array west
var west = new Array(50); // 50 rows 
for(var i = 0; i < 50; i++)
west[i] = new Array(3); // 3 columns
// Initialize the array
for(i = 0; i <50; i++) {
for(j = 0; j <3; j++) {
west[i][j] = 0;
}
}

        
// Create a multidimensional array north
var north = new Array(50); // 50 rows of the table
for(var i = 0; i < 50; i++)
north[i] = new Array(3); // Each row has 3 columns
// Initialize the array
for(i = 0; i <50; i++) {
for(j = 0; j <3; j++) {
north[i][j] = 0;
}

}


// Create a multidimensional array south
var south = new Array(50); // 10 rows of the table
for(var i = 0; i < 50; i++)
south[i] = new Array(3); // Each row has 3columns
// Initialize the array
for(i = 0; i <50; i++) {
for(j = 0; j <3; j++) {
south[i][j] = 0;
}
}
	
// Create a multidimensional array for virus
var virus = new Array(50); // 10 rows of the table
for(var i = 0; i < 50; i++)
virus[i] = new Array(3); // Each row has 10 columns
// Initialize the array
for(i = 0; i <50; i++) {
for(j = 0; j <3; j++) {
virus[i][j] = 0;
}

}
        
// function select start
function select() {
			//left
			if (move == 37) {
				craft_x = craft_x - 2;
			}
			//right
			if (move == 39) {
						craft_x = 	craft_x + 2;
			}
			if (energy<=0){
			ctx.font = '100pt Calibri';
      ctx.lineWidth = 3;
      // stroke color
      ctx.strokeStyle = 'green';
      ctx.strokeText('GAME OVER', 90, 400);}
			if (energy>0){
			requestAnimationFrame(draw);
			}
}


// function draw start
		function draw()  {	
		//reverse direction	
	if (craft_x> 750){
	move=37;}
	if (craft_x< 20){
	move=39;}

ctx.clearRect(0, 0, 800,600 );

// pick color for power bar
if (energy>30){
	   ctx.fillStyle = 'green';}
	   if (energy<=30){
	   ctx.fillStyle = 'red';}
       ctx.fillRect(380, 5, energy, 15);
       ctx.font = '20pt Calibri';
      ctx.lineWidth = 3;
      // stroke color
      ctx.strokeStyle = 'green';
      ctx.strokeText('POWER', 290, 20);
	  ctx.strokeText('SCORE  '+score, 100, 20);
	  ctx.strokeStyle = 'green';
// pick  image for every direction
	  if (move==37) {
	  imageObj.src = 'sprites/left_characters for game-01.png';}
	  
	  if (move==38) {
	  imageObj.src = 'sprites/top_characters for game-02.png';}
	  
	  if (move==39) {
	  imageObj.src = 'sprites/right_characters for game-03.png';}

// new bullet for human
	  if (fire == 32) {
	  // sound for new bullet
	  hit.src = "sound/35678__jobro__laser10.wav";
      hit.play();
      hit.volume = 0.8;
// pick array to store the data of new bullet	  	  
	  if (move==39) {
		var flag=0;
		while (flag==0) {
		for(i = 0; i <50; i++) {
if (east[i][0] == 0 && flag==0)
{
east[i][0]=1;
east[i][1]=craft_x+80;
east[i][2]=craft_y+80;
flag=1;
fire=30;
}
}
}
}

if (move==37) {
		var flag=0;
		while (flag==0) {
		for(i = 0; i <50; i++) {
if (west[i][0] == 0 && flag==0)
{
west[i][0]=1;
west[i][1]=craft_x+10;
west[i][2]=craft_y+80;
flag=1;
fire=30;
}

}
}
}

if (move==38) {
		var flag=0;
		while (flag==0) {
		for(i = 0; i <50; i++) {

if (north[i][0] == 0 && flag==0)
{

north[i][0]=1;
north[i][1]=craft_x+40;
north[i][2]=craft_y;

flag=1;
fire=30;
}
}
}
}


}
counter++;
// new enemy virus
	if (counter==50) {
	    var flag=0;
		while (flag==0) {
		for(i = 0; i <50; i++) {
if (virus[i][0] == 0 && flag==0)
{
virus[i][0]=1;
virus[i][1]=800;
virus[i][2]= Math.floor((Math.random() * 600) + 1);
flag=1;
var flag2=0;
		while (flag2==0) {
		for(j = 0; j <50; j++) {
if (bullet[j][0] == 0 && flag2==0)
{
bullet[j][0]=1;
bullet[j][1]=virus[i][1];
bullet[j][2]=virus[i][2]+25;
flag2=1;
}
}
}
}
}
}	
counter=1;
}

// draw human
ctx.drawImage(imageObj, craft_x,craft_y, 80,190);	  
craft_x2=craft_x+50 ;
craft_y2=craft_y  ;
craft_x3= craft_x+50 ;
craft_y3=craft_y+50  ;
craft_x4=craft_x  ;
craft_y4= craft_y+50 ;
for(i = 0; i <50; i++) {
if (virus[i][0]==1) {

//collision between human and virus
if ( (craft_x>=virus[i][1] &&  craft_x<=virus[i][1]+50 &&  craft_y>=virus[i][2] &&  craft_y<=virus[i][2]+50)||
(craft_x2>=virus[i][1] &&  craft_x2<=virus[i][1]+50 &&  craft_y2>=virus[i][2] &&  craft_y2<=virus[i][2]+50)||
(craft_x3>=virus[i][1] &&  craft_x3<=virus[i][1]+50 &&  craft_y3>=virus[i][2] &&  craft_y3<=virus[i][2]+50)||
(craft_x4>=virus[i][1] &&  craft_x4<=virus[i][1]+50 &&  craft_y4>=virus[i][2] &&  craft_y4<=virus[i][2]+50) )
  {
virus[i] [0]=0;
energy=energy-10;
hit.src = "sound/107788__leviclaassen__hit-001.wav";
hit.play();
hit.volume = 0.8;
score+=10;
break;
}
}
}

for(i = 0; i <50; i++) {

for(k = 0; k <50; k++) {
if (virus[k] [0]==1) {

// hit virus from human
if ((east[i][1]<= virus[k] [1]+50 && east[i][1]>=virus[k] [1] && east[i][2]<= virus[k] [2]+50 && east[i][2]>=virus[k] [2] && east[i][0]==1)||
(west[i][1]<=virus[k] [1]+50 && west[i][1]>=virus[k] [1] && west[i][2]<= virus[k] [2]+50 && west[i][2]>=virus[k] [2] && west[i][0]==1)||
(north[i][1]<= virus[k] [1]+50 && north[i][1]>=virus[k] [1] && north[i][2]<= virus[k] [2]+50 && north[i][2]>=virus[k] [2] && north[i][0]==1)||
(south[i][1]<= virus[k] [1]+50 && south[i][1]>=virus[k] [1] && south[i][2]<= virus[k] [2]+50 && south[i][2]>=virus[k] [2] && south[i][0]==1))
{
// play sound for hit
hit.src = "sound/107788__leviclaassen__hit-001.wav ";
hit.play();
hit.volume = 0.7;
score+=10;
counter_explosion=0;
explosion_x=virus[k] [1];
explosion_y=virus[k] [2];

// deactivation of virus and bullet
if (east[i][1]<= virus[k] [1]+50 && east[i][1]>=virus[k] [1] && east[i][2]<= virus[k] [2]+50 && east[i][2]>=virus[k] [2] && east[i][0]==1) {
virus[k][0]=0;
east[i][0]=0;}
 

if (west[i][1]<= virus[k] [1]+50 && west[i][1]>=virus[k] [1] && west[i][2]<= virus[k] [2]+50 && west[i][2]>=virus[k] [2] && west[i][0]==1) {
virus[k][0]=0;
west[i][0]=0;
}

if (north[i][1]<= virus[k] [1]+50 && north[i][1]>=virus[k] [1] && north[i][2]<= virus[k] [2]+50 && north[i][2]>=virus[k] [2] && north[i][0]==1){
virus[k][0]=0;
north[i][0]=0;}

}
}
}
}

// draw the bullets
for(i = 0; i <50; i++) {

if (west[i][0] == 1)
{

ctx.beginPath();
				ctx.arc(west[i] [1],west[i] [2],4,0,2*Math.PI);  
                  ctx.stroke();
                  ctx.fillStyle="blue";
                  ctx.fill(); 
                  ctx.closePath();
west[i] [1]=west[i] [1]-4;


if (west[i][1] < 20){
west[i][0] = 0;
}
}


if (north[i][0] == 1)
{
ctx.beginPath();
				  ctx.arc(north[i] [1],north[i] [2],4,0,2*Math.PI);  
                  ctx.stroke();
                  ctx.fillStyle="blue";
                  ctx.fill(); 
                  ctx.closePath();	
                  north[i] [2]=north[i] [2]-4;

if (north[i][2] < 20){
north[i][0] = 0;
}
}

if (east[i][0] == 1)
{
ctx.beginPath();
				ctx.arc(east[i] [1],east[i] [2],4,0,2*Math.PI);  
                  ctx.stroke();
                  ctx.fillStyle="blue";
                  ctx.fill(); 
                  ctx.closePath();

east[i] [1]=east[i] [1]+4;

if (east[i][1] > 800){
east[i][0] = 0;
}
}				  
// draw virus
if (virus[i][0] == 1)
{
enemy.src = 'sprites/virus for game-01.png';
 ctx.drawImage(enemy, virus[i] [1],virus[i] [2], 60,60);
virus[i] [1]=virus[i] [1]-2;
if (virus[i][1] <30){
virus[i][0] = 0;
}
}
}

for(i = 0; i <50; i++) {
// draw virus bullets 
if (bullet[i][0] == 1)
{
ctx.beginPath();
				ctx.arc(bullet[i] [1],bullet[i] [2],4,0,2*Math.PI);  
                  ctx.stroke();
                  ctx.fillStyle="MediumOrchid";
                  ctx.fill(); 
                  ctx.closePath();
				  if (bullet[i] [1]<craft_x+50 && bullet[i] [1]>craft_x && bullet[i] [2]>craft_y && bullet[i] [2]<craft_y+50  ) {
				  energy=energy-10;
				  bullet[i] [0]=0;
				  enemy_hit.src = "sound/474811__soaringaaronjohnson51397__space-ship-landing.m4a";
enemy_hit.play();
hit.volume = 0.8;			  }
bullet[i] [1]=bullet[i] [1]-4;
if (bullet[i][1] < 20){
bullet[i][0] = 0;
}
}	
}
explosion.src = 'images/pngegg.png';
//draw explosion 
if (counter_explosion<=15) {
 ctx.drawImage(explosion, explosion_x,explosion_y, 100,100);
 counter_explosion++;
 }
}

setInterval(select, 40);
        
//I was trying to make enemies - virus come from above but something went wrong, they disappeared or they appeared in random on the canvas, so I left them to come from the right.        
        

