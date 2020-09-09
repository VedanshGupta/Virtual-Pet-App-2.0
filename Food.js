class Food(){
	constructor(x, y){
		var options={
			static:false
			var FoodStock,
			var lastFed
		}
	this.x = x;
	this.y = y;
	this.image = loadImage("Milk.png");
	this.body = Bodies.rectangle(this.x, this.y, options);

}

	display(){
		var x = 80, y = 100;

		imageMode(CENTER);
		image(this.image, 720, 220, 70, 70);

		if(this.FoodStock!==0){
			for(var i=0, i<this.FoodStock, i++){
				if(i%10===0){
					x = 80;
					y = y+50;
				}
				image(this.image, x, y, 50, 50);
				x = x+30;
			}
		}
	}
}

