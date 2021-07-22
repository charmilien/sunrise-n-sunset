const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var date,hour,hh;

function preload() {  getBackgroundImg(); }

function setup(){
    var canvas = createCanvas(1200,900);
    engine = Engine.create();
    world = engine.world;
}

function draw(){
    
    if (backgroundImg)
        background(backgroundImg);
        Engine.update(engine);
        textSize(30)
        text("Time: "+hh, 50, 50); 
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson = await response.json()
    console.log(responseJson)
    
     date = responseJson.datetime;
     hour = date.slice(11, 13);
     hh=date.slice(11,16)


    if (hour >= 04 && hour <= 06)
    {
        backgroundImg = loadImage("sunrise1.png");
    }
    else if (hour >=6 && hour <=10)
    {
        backgroundImg = loadImage("sunrise2.png");
    } 
    else if (hour >=10 && hour <=13)
    {
        backgroundImg = loadImage("sunrise4.png");
    } 
    else if (hour >=13 && hour <=17)
    {
        backgroundImg = loadImage("sunrise6.png");
    } 
    else if(hour >= 17 && hour <= 18)
    {
        backgroundImg = loadImage('sunset7.png')
    }
    else if(hour >= 18 && hour <= 20)
    {
        backgroundImg = loadImage('sunset11.png')
    }else{
        backgroundImg = loadImage('sunset12.png')
    }
}