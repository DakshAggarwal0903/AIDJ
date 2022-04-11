song="";
function preload(){
  song=loadSound("music.mp3");
}
rightWristX=0;
leftWristX=0;
rightWristY=0;
leftWristY=0;
scoreRight=0;
scoreLeft=0;
function setup(){
   canvas= createCanvas(600,500);
   canvas.center();
  capture= createCapture(VIDEO);
  capture.hide();
  x=ml5.poseNet(capture,Loaded);
  x.on('pose',Pose);
}
function draw(){
    image(capture,0,0,600,500);
    fill("red");
    stroke("red");
    if(scoreRight>0.2){
      circle(rightWristX,rightWristY,20);
    if(rightWristY>0 && rightWristY<=100){
    song.rate(0.5);
    document.getElementById("h32").innerHTML="Speed is 0.5x";
    }
    if(rightWristY>100 && rightWristY<=200){
      document.getElementById("h32").innerHTML="Speed is 1x";
      song.rate(1);
    
    }
    if(rightWristY>200 && rightWristY<=300){
      document.getElementById("h32").innerHTML="Speed is 1.5x";
      song.rate(1.5);
    }
    if(rightWristY>300 && rightWristY<=400){
      document.getElementById("h32").innerHTML="Speed is 2x";
      song.rate(2);
}
if(rightWristY>400){
  document.getElementById("h32").innerHTML="Speed is 2.5x";
  song.rate(2.5);
    }
  }
      if(scoreLeft>0.2){
        circle(leftWristX,leftWristY,20);
        lny=Number(leftWristY);
        lnyf=floor(lny);
        anyvar=lny/500;
        document.getElementById("h33").innerHTML="Volume is: "+anyvar;
        song.setVolume(anyvar);
      }
}
function Loaded(){
 console.log("ML5 is Loaded");
}
function Pose(aa){
if(aa.length>0){
  console.log(aa);
  scoreRight=aa[0].pose.keypoints[10].score;
  scoreLeft=aa[0].pose.keypoints[9].score;
  console.log("ScoreRight and ScoreLeft: "+scoreRight+scoreLeft);
  leftWristX=aa[0].pose.leftWrist.x;
  leftWristY=aa[0].pose.leftWrist.y;
  rightWristX=aa[0].pose.rightWrist.x;
  rightWristY=aa[0].pose.rightWrist.y;
  console.log("Right wrist x and y: "+ rightWristX+rightWristY);
  console.log("Left wrist x and y: "+leftWristX+leftWristY);
}
}
function play(){
  song.play();
  song.setVolume(1);
  song.rate(1);
}

