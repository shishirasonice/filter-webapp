function preload() {
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
}

function draw() {
    image(video, 0, 0, 300, 300);

}

function take_snapshot(){
    save('MyFilterWebappPic.png');
}


function modelLoaded() {
    console.log('modelLoaded');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("lip x="+results[0].pose.lip.x);
        console.log("lip y="+results[0].pose.lip.y);
    }
}