canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

ladosArray = ["2.png","165.png", "963.png","37561.png","44375.png","transferir.png"];

randomNumber = Math.floor(Math.random()*6);

backgroundImage = ladosArray[randomNumber];





function add() {
	
	backgroundImgTag = new Image(); //definindo uma variável com uma nova imagem
	backgroundImgTag.onload = uploadBackground; // ajustando uma função, ao carregar essa variável
	backgroundImgTag.src = backgroundImage;   // carregar a i

	
	
	
	


}

function uploadBackground() {
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}





