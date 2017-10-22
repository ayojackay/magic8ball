// target your button and assign an ask function that outputs a random image to your page
// let questions = ["Are you awesome?", "Will that wish come true?", "Do you know what you're doing?"];
// console.log(questions);
//
// function magicQuestions() {
//     let quest = Math.floor(Math.random() * questions.length);
//   document.getElementById("magic-question").innerHTML = questions[quest];
//   }
// console.log(magicQuestions());

//adding image to randomize
let imagePic = ['img/magic8ball_1.png', 'img/magic8ball_2.png', 'img/magic8ball_3.png', 'img/magic8ball_4.png', 'img/magic8ball_5.png', 'img/magic8ball_6.png', 'img/magic8ball_7.png', 'img/magic8ball_8.png', 'img/magic8ball_9.png', 'img/magic8ball_10.png',
 'img/magic8ball_11.png', 'img/magic8ball_12.png', 'img/magic8ball_13.png', 'img/magic8ball_14.png', 'img/magic8ball_15.png', 'img/magic8ball_16.png', 'img/magic8ball_17.png', 'img/magic8ball_18.png', 'img/magic8ball_19.png', 'img/magic8ball_20.png'];
console.log(imagePic);

  function magicAnswer(button) {
    let diffPic = Math.floor(Math.random() * imagePic.length);
      document.getElementById("eightball").src= imagePic[diffPic];
  }

console.log(magicAnswer());
