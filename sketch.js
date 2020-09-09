var dog, happyDog, database, foodStock, foodS, 
var feedPet, addFood;
var fedTime, lastFed;
var foodObj;

function preload()
{
	dog = loadImage("dogImg.png");
  	happyDog = loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  	dog = createSprite(100, 100, 10,10);
  	
  	database = firebase.database;
  	foodStock = database.ref('Food');
  	foodStock.on("Value", readStock);

    foodObj = new Food();

    feedPet = createButton("Feed the dog");
    feedPet.position(700 ,95);
    feedPet.mousePressed(feed);

    addFood = createButton("Add Food");
    addFood.position(800, 95);
    addFood.mousePressed(foodStock);
}


function draw() {  
  background(46, 139, 87);

  drawSprites();
  
  textSize(25);
  fill("blue");
  text(foodStock, 200, 200);
  text("Press UP arrow key to feed milk to the dog", 250 ,250);

  foodObj.display();

  fill(255, 255, 254);
  textSize(15);
  if(lastFed>=12){
    text("Last Fed"+lastFed%12, "PM", 350, 30);
  }else if(lastFed==0){
    text("Last Fed: 12AM", 350, 30);
  }else{
    text("Last Fed: "+lastFed + "AM", 350, 30);
  }
}

//function to write values in database;
function writeStock(x){
	if(x<=0){
		x = 0;
	}else{
		x = x-1;
	}
}

function feedDog(){
  dog.addImage(happyDog);
  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}

function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}









