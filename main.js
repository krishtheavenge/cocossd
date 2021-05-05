img="";
status="";
objects=[];
function preload(){
    img = loadImage("hello.jpg");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model has been loaded.");
    status=true;
    objectDetector.detect(img,gotresult);
}

function gotresult(error,result){

if(error){
    console.error(error);
}
else{
    console.log(result);
    objects=result;
}

}

function draw(){
    image(img,0,0,600,500);
        if(status != ""){
            for(i=0; i<objects.length; i++){
                    document.getElementById("status").innerHTML="Status: Object Detected";
                    fill("red");
                    percent=floor(objects[i].confidence*100);
                    text(objects[i].label+" "+percent+"%", objects[i].x, objects[i].y);
                    noFill();
                    stroke("teal");
                    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
            }
        }



        
   // text("Dog",110,80);
    //noFill();
    //stroke("red");
    //rect(50,50,500,440);
    //rect(270,100,260,400);
    //text("Cat",370,140); 
}