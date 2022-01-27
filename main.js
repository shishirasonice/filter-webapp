lipsX = 0;
lipsY = 0;

function preload() {
    lipstick_lips = loadImage('https://i.postimg.cc/gctYTD6F/l1.png');

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function draw() {
    image(video, 0, 0, 300, 300);
    image(lipstick_lips, lipsX, lipsY, 80, 80);

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
        lipsX = results[0].pose.lips.x - 10;
        lipsY = results[0].pose.lips.y - 10;
    }
}