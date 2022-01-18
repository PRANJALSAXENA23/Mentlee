 //jshint esversion:6
const questions = [
    {
        question: "How do you feel most of the time?",
        optionA: "Happy",
        optionB: "Satisfied",
        optionC: "Sad",
        optionD: "Anxious",

    },

    {
        question: "How confident you have been feeling in your capabilities recently?",
        optionA: "Positive",
        optionB: "Sometimes doubt myself",
        optionC: "Not sure",
        optionD: "I doubt myself",

    },

    {
        question: "For how long you have a sound sleep(undisturbed)?",
        optionA: "Above 7",
        optionB: "5-6",
        optionC: "3-5",
        optionD: "Below 3",

    },
{
      question:"How many close friends are you in connect with ?",
      optionA:"More than 4",
      optionB:"2-3",
      optionC:"1",
      optionD:"I don’t have close friends",
},
{
  question:"How frequently have you been doing things that mean something to you or your life?",
  optionA:"Probably on weekends",
  optionB:"Whenever I get time",
  optionC:"Not often ",
  optionD:"I don’t like to do anything",
},
{
question:"How hopeful you are about life ?",
optionA: "Always see the positive side",
optionB: "I feel hopeful most of the times",
optionC: "Sometimes I feel hopelessness",
optionD: "I feel hopelessness all the times"
},
{
  question:"Do you feel like spending time with your family and friends but usually withdraw yourself ?",
optionA: "No",
optionB: "Maybe",
optionC: "At times",
optionD: "Yes"
},
{
  question:"Do you talk to people when you feel upset or cram up your feelings?",
optionA: "I talk it out usually",
optionB: "I don’t express much",
optionC: "I sometimes talk",
optionD: "No,I don’t share my feelings",
},
{
  question:"Feeling tired or having little energy?",
optionA:"No",
optionB: "Sometimes",
optionC: "Most of the time",
optionD: "Always",
},
{
  question:"Do you feel alone ?",
optionA: "No",
optionB: "Maybe",
optionC: "I don’t know",
optionD: "Yes"
},
{
  question:"What is your Deep work time ?",
optionA: "Minimum of 1-2 hrs",
optionB: "30 min",
optionC: "10 min",
optionD: "I can’t  concentrate"
},
{
  question:"Do you feel sudden outburst of anger ?",
optionA: "No",
optionB: "Not usually",
optionC: "Yes,sometimes",
optionD: "Yes,most of the time",
},
{
  question:"When feeling low what do you do to feel better?",
optionA: "Hangout with friends / family",
optionB: "Watch a series or use social media",
optionC: "Be alone ( read/ listen)",
optionD: "Consume  narcotic substances"
},
{
  question:"How do you feel when someone asks you for advice?",
optionA: "I am Happy",
optionB: "I get nervous",
optionC: "I don’t like to advice much",
optionD: "I get Irritated"
},
{
  question:"Are you easily bothered by other people's remark?",
optionA: "No, never",
optionB: "Yes,sometimes",
optionC: "usually",
optionD: "always",
},
{
  question:"When feeling low what do you do to feel better?",
optionA: "Talk to my close people ",
optionB: "Go for a stroll around",
optionC: "Do something I like",
optionD: "stay inside my room",
},
{
  question:"Do you ever feel emotionally unbalanced?",
optionA: "Yes, pretty much every day",
optionB: "No, Everything is just fine",
optionC: "Under certain circumstances",
optionD: "I don't really care"
},
{
question:  "How much do you think learning more about mental health would help improve your mental health? ",
optionA:  "Definitely will help",
optionB:  "Will probably help",
optionC:  "Might help",
optionD:  "Won’t help",
},

{

      question:"Feeling bad about yourself – or that you are a failure or have let yourself or your family down",
      optionA:"Not at all  ",
      optionB:"Sometimes  ",
      optionC:"Half of the time",
      optionD:"Everytime ",

},
{
    question:"Do you worry about things working out in the future? ",
    optionA:"Never  ",
    optionB:"Rarely  ",
    optionC:"Sometimes  ",
    optionD:"Often  ",
  },

//-----------------------------------------------------------------------------------------


];


let shuffledQuestions = [] ;//empty array to hold shuffled selected questions

function handleQuestions() {
    //function to shuffle and push no of  questions to shuffledQuestions array
    while (shuffledQuestions.length <= 19) {
        const random = questions[Math.floor(Math.random() * questions.length)];
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random);
        }
    }
}

let questionNumber = 1;
let playerScore = 0;

let indexNumber = 0;

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions();
    const currentQuestion = shuffledQuestions[index];

    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] ;

    const options = document.getElementsByName("option");


    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex";
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {

        if (option.checked === true && option.value === "1") {
            playerScore=playerScore+5;
            indexNumber++;
            setTimeout(() => {
                questionNumber++;
            }, 1000);
        }
      else if (option.checked === true && option.value === "2") {
            playerScore=playerScore+4;
            indexNumber++;
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++;
            }, 1000);
        }
      else if (option.checked === true && option.value === "3") {
            playerScore=playerScore+3;
            indexNumber++;
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++;
            }, 1000);
        }
        else if (option.checked === true && option.value === "4") {
            playerScore=playerScore+2;
            indexNumber++;
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++;
            }, 1000);
        }
    });
}
var number = 0;

//called when the next button is called
function handleNextQuestion() {
    checkForAnswer();
    unCheckRadioButtons();
    move();


    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 19) {   //total no of questions
            NextQuestion(indexNumber);
        }
        else {
            handleEndGame();
        }
        resetOptionBackground();
    }, 1000);

}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = "";
    });
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null;
    let remarkColor = null;

      localStorage.setItem('grade-percentage',JSON.stringify(playerScore));
    document.location.href="indexl.html";

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1;
    playerScore = 0;
    indexNumber = 0;
    shuffledQuestions = [];
    NextQuestion(indexNumber);
    document.getElementById('score-modal').style.display = "none";
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none";
}
function move() {
  var elem = document.getElementById("myBar");
  number++;

  if (number === 1&&indexNumber===1) {
    elem.style.width = 5+ '%';

  }

  if (number === 2&&indexNumber===2) {
    elem.style.width = 10+ '%';

  }
  if (number ===3&&indexNumber===3) {
    elem.style.width = 15 + '%';

  }
  if (number ===4&&indexNumber===4) {
    elem.style.width =20 + '%';
  }
  if (number ===5&&indexNumber===5) {
    elem.style.width = 25 + '%';

  }
  if (number ===6&&indexNumber==6) {
    elem.style.width = 30 + '%';

  }if (number ===7&&indexNumber===7) {
    elem.style.width = 35 + '%';

  }if (number ===8&&indexNumber===8) {
    elem.style.width = 40 + '%';

  }if (number ===9&&indexNumber===9) {
    elem.style.width = 45 + '%';

  }if (number ===10&&indexNumber===10) {
    elem.style.width = 50 + '%';

  }if (number ===11&&indexNumber===11) {
    elem.style.width = 55 + '%';

  }if (number ===12&&indexNumber===12) {
    elem.style.width = 60 + '%';

  }if (number ===13&&indexNumber===13) {
    elem.style.width = 65 + '%';

  }if (number ===14&&indexNumber===14) {
    elem.style.width = 70 + '%';

  }if (number ===15&&indexNumber===15) {
    elem.style.width = 75 + '%';

  }if (number ===16&&indexNumber===16) {
    elem.style.width = 80 + '%';

  }if (number ===17&&indexNumber===17) {
    elem.style.width = 85 + '%';

  }if (number ===18&&indexNumber===18) {
    elem.style.width = 90 + '%';

  }if (number ===19&&indexNumber===19) {
    elem.style.width = 95 + '%';

  }if (number ===20&&indexNumber===20) {
    elem.style.width = 100 + '%';

  }
}
