noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(530, 530);

    canvas = createCanvas(530, 490);
    canvas.position(560,20);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#ffd9ed');

    document.getElementById("square_side").innerHTML = "Width and Height of a Square will be = "+ difference+"px";
    fill('pink');
    stroke('#ff179a')
    square(noseX, noseY, difference);
}

function modelLoaded() {
    console.log('PoseNet Is initialized!');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
      console.log(results);
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      console.log("noseX = " + noseX +" noseY = " + noseY);

      leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
      difference = floor(leftWristX - rightWristX);

      console.log("leftWristX = " + leftWristX + "right WristX= "+ rightWristX + "difference = "+ difference);
  }
}