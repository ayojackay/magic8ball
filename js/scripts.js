// target your button and assign an ask function that outputs a random image to your page
var questions = ["Are you awesome?", "Will that wish come true?", "Do you know what you're doing?"];
var imagePic = ["magic8ball_1.png", "magic8ball_2.png", "magic8ball_3.png"];
var diffQuestion = [Math.floor(Math.random() * questions.length)];
var diffPic = [Math.floor(Math.random() * imagePic.length)];

console.log(diffPic);
  function magicAnswer() {
      document.getElementById("eightball").getElementsByTagName("img").src = imagePic[diffPic];
  }
console.log(magicAnswer());

function magicQuestions() {
    var yo = document.getElementById("magic--question");
    yo.innerHTML = questions[diffQuestion];
  }
  console.log(magicQuestions);
