//Gsap animations
const tl = gsap.timeline();
tl.from(".left", {
  opacity: 0,
  scale: 0,
  x: "-200px",
  duration: 1.2,
});

tl.from(".left_content", {
  opacity: 0,
  y: "100px",
  duration: 1,
});

tl.from(".right", {
  duration: 1,
  opacity: 0,
  scale: 0,
  x: "200px",
});

const enterBtn = document.getElementById("EnterBtn");
let rankers = [];
const quizData = {
  Chemistry: [
    {
      question: "Formula of Sodium?",
      options: ["A. Na", "B. Io", "C. Sa", "D. Fa"],
      answer: "A",
    },
    {
      question: "Formula of Sodium Chloride?",
      options: ["A. H2SO4", "B. NaCl", "C. Sa2o", "D. Fecl"],
      answer: "B",
    },
    {
      question: "What is the primary source of minerals in the soil?",
      options: [
        "A. Plants",
        "B. Animal",
        "C. Parent Rock",
        "D. All of the Above",
      ],
      answer: "C",
    },
    {
      question: "What is the source of coal formation?",
      options: ["A. Plants", "B. Animal", "C. Both", "D. All of the Above"],
      answer: "A",
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["A. Au", "B. Ag", "C. Fe", "D. Cu"],
      answer: "A",
    },
    {
      question: "How many electrons does a neutral oxygen atom have?",
      options: ["A. 6", "B. 7", "C. 8", "D. 9"],
      answer: "C",
    },
    {
      question: "What is the pH value of a neutral solution?",
      options: ["A. 5", "B. 7", "C. 9", "D. 12"],
      answer: "B",
    },
    {
      question: "Which gas is responsible for the greenhouse effect?",
      options: ["A. Oxygen", "B. Carbon dioxide", "C. Nitrogen", "D. Hydrogen"],
      answer: "B",
    },
    {
      question: "What is the chemical formula for water?",
      options: ["A. H2O2", "B. CO2", "C. H2O", "D. CH4"],
      answer: "C",
    },
    {
      question:
        "What is the process of converting a solid directly into a gas called?",
      options: [
        "A. Melting",
        "B. Sublimation",
        "C. Condensation",
        "D. Evaporation",
      ],
      answer: "B",
    },
  ],
  Math: [
    {
      question: "What is 2+2 equal",
      options: ["A. 3", "B. 4", "C. 5", "D. 1"],
      answer: "B",
    },
    {
      question: "Which one is an even number?",
      options: ["A. 2", "B. 3", "C. 4.1", "D. None of the Above"],
      answer: "A",
    },
    {
      question: "What is 7 multiplied by 9?",
      options: ["A. 56", "B. 63", "C. 72", "D. 81"],
      answer: "B",
    },
    {
      question: "If x + 5 = 12, what is the value of x?",
      options: ["A. 5", "B. 6", "C. 7", "D. 8"],
      answer: "B",
    },
    {
      question: "What is the square root of 144?",
      options: ["A. 10", "B. 12", "C. 14", "D. 16"],
      answer: "B",
    },
    {
      question:
        "If a rectangle has a length of 8 units and a width of 5 units, what is its area?",
      options: [
        "A. 20 square units",
        "B. 30 square units",
        "C. 35 square units",
        "D. 40 square units",
      ],
      answer: "B",
    },
    {
      question: "Solve the equation 3x - 7 = 11.",
      options: ["A. x = 4", "B. x = 6", "C. x = 5", "D. x = 8"],
      answer: "C",
    },
    {
      question: "What is the value of π (pi) to two decimal places?",
      options: ["A. 3.14", "B. 3.16", "C. 3.18", "D. 3.20"],
      answer: "A",
    },
    {
      question:
        "If a right-angled triangle has legs of length 6 units and 8 units, what is the length of the hypotenuse?",
      options: ["A. 10 units", "B. 11 units", "C. 12 units", "D. 14 units"],
      answer: "C",
    },
    {
      question: "Express 25% as a decimal.",
      options: ["A. 0.25", "B. 0.5", "C. 0.75", "D. 1.25"],
      answer: "A",
    },
  ],
  Physics: [
    {
      question: "What is the SI unit of force?",
      options: ["A. Newton", "B. Watt", "C. Joule", "D. Pascal"],
      answer: "A",
    },
    {
      question:
        "Which law of motion states that every action has an equal and opposite reaction?",
      options: [
        "A. Newton's First Law",
        "B. Newton's Second Law",
        "C. Newton's Third Law",
        "D. Kepler's Law",
      ],
      answer: "C",
    },
    {
      question: "What is the acceleration due to gravity on Earth?",
      options: ["A. 5 m/s²", "B. 9.8 m/s²", "C. 12 m/s²", "D. 15 m/s²"],
      answer: "B",
    },
    {
      question: "What is the formula for calculating kinetic energy?",
      options: ["A. KE = mv", "B. KE = 0.5mv²", "C. KE = mgh", "D. KE = Fd"],
      answer: "B",
    },
    {
      question:
        "Which type of energy is stored in an object due to its position?",
      options: [
        "A. Kinetic energy",
        "B. Potential energy",
        "C. Mechanical energy",
        "D. Thermal energy",
      ],
      answer: "B",
    },
    {
      question: "What is the speed of light in a vacuum?",
      options: [
        "A. 300,000 km/s",
        "B. 500,000 km/s",
        "C. 700,000 km/s",
        "D. 900,000 km/s",
      ],
      answer: "A",
    },
    {
      question:
        "Which law of thermodynamics states that energy cannot be created or destroyed, only transferred or converted?",
      options: [
        "A. Zeroth Law",
        "B. First Law",
        "C. Second Law",
        "D. Third Law",
      ],
      answer: "B",
    },
    {
      question: "What is the unit of electrical resistance?",
      options: ["A. Volt", "B. Ampere", "C. Ohm", "D. Watt"],
      answer: "C",
    },
    {
      question:
        "In which type of circuit are components connected in a single, continuous loop?",
      options: [
        "A. Parallel circuit",
        "B. Series circuit",
        "C. Combination circuit",
        "D. Complex circuit",
      ],
      answer: "B",
    },
    {
      question: "What is the conservation of momentum?",
      options: [
        "A. Momentum is always zero",
        "B. Momentum is conserved in an isolated system",
        "C. Momentum decreases over time",
        "D. Momentum increases with speed",
      ],
      answer: "B",
    },
  ],
};

document.querySelectorAll(".typeSubject").forEach((el) => {
  el.addEventListener("click", function () {
    gsap.to(".typeSubject", {
      duration: 0.5,
      opacity: 0,
      stagger: 0.2,
      ease: "back.in",
      y: "-200px",
    });

    gsap.from(".questions", {
      delay: 0.2,
      duration: 0.8,
      opacity: 0,
      scale: "0.5",
      y: "100px",
    });
  });
});

//Enter button after Filling the Form
enterBtn.addEventListener("click", function () {
  gsap.from(".typeSubject", {
    duration: 1,
    rotation: 360,
    opacity: 1,
    delay: 0.5,
    stagger: 0.2,
    force3D: true,
  });
  let username = document.querySelector("#username").value;
  let userAge = document.querySelector("#Profession").value;
  if (username == "" || userAge === "") {
    alert("enter Details");
  } else {
    localStorage.setItem(
      "currentUser",
      JSON.stringify({ user: username, age: userAge })
    );
    console.log(userAge + "has name" + username);
    userDetailHide();
  }
});

//Hide UserDetails After Filling the user Form
function userDetailHide() {
  let userDetail = document.querySelector(".Verification");
  setTimeout(() => {
    userDetail.style.transition = "0.4s";
    userDetail.style.filter = "blur(10px)";
    userDetail.style.transform = "scale(0.6)";
    userDetail.style.opacity = "0";
    setTimeout(() => {
      userDetail.style.display = "none";
    }, 200);
  }, 500);
}

//////////////////////////
/////////////////////////////

//Hides All the Card while tapping on it
function hideCard() {
  let cards = document.querySelectorAll(".typeSubject");
  cards.forEach((el) => {
    el.style.transition = "0.4s";
    // el.style.opacity = "0";
  });
}

//Function to show all card
function showCard() {
  let cards = document.querySelectorAll(".typeSubject");
  cards.forEach((el) => {
    el.style.transition = "0.4s";
    el.style.opacity = "1";
  });
}
//Function to only show the tapped card
function cardSelect() {
  let cards = document.querySelectorAll(".typeSubject");
  cards.forEach((el, i) => {
    el.addEventListener("click", function () {
      hideCard();

      el.style.opacity = "1";
      displayQuestionBar(el);
      let indication = el.getAttribute("data-tag");
      displayQuestion(indication);
    });
  });
}
cardSelect();

//Function to show the questions and question bar based on selecting specific card
function displayQuestionBar(el) {
  let questionBar = document.querySelector(".question_bar");
  let dashbar = document.querySelector(".dashboard");
  let ranking = document.querySelector(".rankingBoard");
  ranking.style.opacity = "1";
  questionBar.style.opacity = "1";
  questionBar.style.transition = "0.4s";
  dashbar.style.opacity = "1";
  dashbar.style.transition = "0.4s";
}

function hiddenQuestionBar(el) {
  let questionBar = document.querySelector(".question_bar");
  let dashbar = document.querySelector(".dashboard");
  questionBar.style.opacity = "0";
  questionBar.style.transition = "0.4s";
  dashbar.style.opacity = "0";
  dashbar.style.transition = "0.4s";
}

//Function to display questions
function displayQuestion(el) {
  console.log(el);
  let subject = document.querySelector(".subjectDashboard");
  subject.textContent = el;
  let data = quizData[el];
  let i = 0;
  let question = document.querySelector(".questionDisplay");
  let submit = document.querySelector(".questionSubmit");
  let optionA = document.querySelector("#A");
  let optionB = document.querySelector("#B");
  let optionC = document.querySelector("#C");
  let optionD = document.querySelector("#D");
  question.textContent = data[i].question;
  optionA.textContent = data[i].options[0];
  optionB.textContent = data[i].options[1];
  optionC.textContent = data[i].options[2];
  optionD.textContent = data[i].options[3];
  let count = 0;
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    let value = document.querySelector('input[name="options"]:checked');
    let result = value.getAttribute("value");
    console.log(result);
    console.log(data[i].answer);
    if (result) {
      if (result == data[i].answer) {
        dashboard(1);
        count++;
        totalScoreShow(count);
      } else {
        dashboard(0);
      }
      if (i < data.length - 1) {
        // console.log(data.length);
        i++;
        // console.log(i);
        let que = data[i];
        question.textContent = que.question;
        optionA.textContent = data[i].options[0];
        optionB.textContent = data[i].options[1];
        optionC.textContent = data[i].options[2];
        optionD.textContent = data[i].options[3];
        document.querySelector(".form").reset();
      } else {
        let userData = JSON.parse(localStorage.getItem("currentUser"));
        let userFinalScore = {
          username: userData.user,
          age: userData.age,
          score: count,
        };

        let userScores = JSON.parse(localStorage.getItem("userScores")) || [];
        userScores.push(userFinalScore);
        localStorage.setItem("userScores", JSON.stringify(userScores));

        setTimeout(hideQuestionBar, 400);
      }
    }
  });
}

//Funtion to display Rankers
function displayRankers() {
  let data = JSON.parse(localStorage.getItem("userScores")) || [];
  data.forEach((el) => {
    let html = `
  <div class="ranker ${el.score < 5 ? "lessThanFive" : "moreThanFive"}">
    <div class="left_rank">
      <div class="name">${el.username}</div>
      <div class="age">${el.age}</div>
    </div>
    <div class="rank_score">${el.score}</div>
</div>
  `;
    let ranker = document.querySelector(".rankingBoard");
    ranker.insertAdjacentHTML("beforeend", html);
  });
}
displayRankers();

//Function to add right wrong questions to the dashboard
function dashboard(el) {
  let answerKeys = document.querySelector(".rightWrong");
  let counter = el === 0 ? "🔴" : "🟢";
  answerKeys.textContent += counter;
}

//Function to show total Score board
function totalScoreShow(score) {
  let totalScore = document.querySelector(".totalScore");
  totalScore.textContent = `Total Score : ${score}`;
}

//Function to hide question bar on completing
function hideQuestionBar() {
  let questionBar = document.querySelector(".question_bar");
  questionBar.style.opacity = "0";
  let dashboard = document.querySelector(".dashboard_card");
  dashboard.classList.add("final");
  let ranker = document.querySelector(".rankingBoard");
  ranker.style.opacity = "0";
  const reload = document.querySelector(".reload");
  reload.classList.remove("reloadHide");
}

//Function to reload the game content
const reload = document.querySelector(".reload");
reload.addEventListener("click", function () {
  location.reload();
});
//////////////
// QUESTIONS
