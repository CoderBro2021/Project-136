  status = "";
  input_text = "";

function setup(){
    canvas = createCanvas(500, 530);
    canvas.center();  
    canvas.position(400,250);
    video = createCapture(VIDEO);
    video.hide();
    video.size(500,530);

}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status1").innerHTML = "Status : Detecting Objects";
    input_text = document.getElementById("input").value;
}
function modelLoaded(){
    console.log("Model_Loaded");
    status = true;
}



function draw(){
    image(video, 0, 0, 500, 530);
}