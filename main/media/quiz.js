var quiz = {
  // (A) PROPERTIES 
  // (A1) QUESTIONS & ANSWERS
  // Q = QUESTION, O = OPTIONS, A = CORRECT ANSWER
  data: [
  {
    q : "<img src='behbudiy.jpg'>",
    o : [
      "1483-1530",
      "1809-1874",
      "1875-1919",
      "1859-1909"
    ],
    a : 2
  },
  {
    q : "<img src='beruniy.jpg'>",
    o : [
      "980-1037",
      "973-1048",
      "873-948",
      "1052-1109"
    ],
    a : 1
  },
  {
    q : "<img src='furkat.jpg'>",
    o : [
      "1678-1726",
      "1783-1847",
      "1859-1909",
      "1902-1956"
    ],
    a : 2
  },
  {
    q : "<img src='manguberdi.png'>",
    o : [
      "1174-1203",
      "1198-1231",
      "1192-1225",
      "1203-1235"
    ],
    a : 1
  },
  {
    q : "<img src='navoiy.jpg'>",
    o : [
      "1441-1501",
      "1478-1523",
      "1482-1547",
      "1441-1511"
    ],
    a : 0
  },
  {
    q : "<img src='ogahiy.jpg'>",
    o : [
      "1811-1882",
      "1783-1847",
      "1859-1909",
      "1809-1874"
    ],
    a : 3
  },
  {
    q : "<img src='sino.jpg'>",
    o : [
      "1013-1178",
      "873-946",
      "980-1037",
      "992-1056"
    ],
    a : 2
  },
  {
    q : "<img src='temur.jpg'>",
    o : [
      "1336-1405",
      "1478-1531",
      "1278-1336",
      "1902-1956"
    ],
    a : 0
  },
  {
    q : "<img src='ulugbek.jpg'>",
    o : [
      "1678-1726",
      "1394-1449",
      "1859-1909",
      "1902-1956"
    ],
    a : 1
  },
  {
    q : "<img src='xorazmiy.jpg'>",
    o : [
      "873-950",
      "980-1037",
      "783-850",
      "973-1048"
    ],
    a : 2
  },
  {
    q : "<img src='bobur.jpg'>",
    o : [
      "1375-1431",
      "1441-1501",
      "1875-1919",
      "1483-1530"
    ],
    a : 3
  }
  ],

  // (A2) HTML ELEMENTS
  hWrap: null, // HTML quiz container
  hQn: null, // HTML question wrapper
  hAns: null, // HTML answers wrapper
  now: 0, 
  score: 0, 

  // (B) INIT QUIZ HTML
  init: function(){
    // (B1) WRAPPER
    quiz.hWrap = document.getElementById("quizWrap");

    // (B2) QUESTIONS SECTION
    quiz.hQn = document.createElement("div");
    quiz.hQn.id = "quizQn";
    quiz.hWrap.appendChild(quiz.hQn);

    // (B3) ANSWERS SECTION
    quiz.hAns = document.createElement("div");
    quiz.hAns.id = "quizAns";
    quiz.hWrap.appendChild(quiz.hAns);

    // (B4) GO!
    quiz.draw();
  },

  // (C) DRAW QUESTION
  draw: function(){
    // (C1) QUESTION
    quiz.hQn.innerHTML = quiz.data[quiz.now].q;

    // (C2) OPTIONS
    quiz.hAns.innerHTML = "";
    for (let i in quiz.data[quiz.now].o) {
      let radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "quiz";
      radio.id = "quizo" + i;
      quiz.hAns.appendChild(radio);
      let label = document.createElement("label");
      label.innerHTML = quiz.data[quiz.now].o[i];
      label.setAttribute("for", "quizo" + i);
      label.dataset.idx = i;
      label.addEventListener("click", quiz.select);
      quiz.hAns.appendChild(label);
    }
  },
  
  // (D) OPTION SELECTED
  select: function(){
    // (D1) DETACH ALL ONCLICK
    let all = quiz.hAns.getElementsByTagName("label");
    for (let label of all) {
      label.removeEventListener("click", quiz.select);
    }

    // (D2) CHECK IF CORRECT
    let correct = this.dataset.idx == quiz.data[quiz.now].a;
    if (correct) { 
      quiz.score++; 
      this.classList.add("correct");
    } else {
      this.classList.add("wrong");
    }
  
    // (D3) NEXT QUESTION OR END GAME
    quiz.now++;
    setTimeout(function(){
      if (quiz.now < quiz.data.length) { quiz.draw(); } 
      else {
        quiz.hQn.innerHTML = `Siz ${quiz.data.length} savoldan ${quiz.score}tasiga to'g'ri javob berdingiz.`;
        quiz.hQn.style = "font-weight: 600; font-size: 5rem; color: #cdcdcd; text-align: center; background-color: #00000061; text-shadow: 1px 1px #000; padding: 0.5rem; margin-bottom: 1rem;";
        quiz.hWrap.style = "flex-direction: column;";
        quiz.hAns.innerHTML = "<a class='btns' href='../../index.html'>Orqaga</a><button class='btns' type='button' onclick='location.reload()'>Qayta ishlash</button>";
        quiz.hAns.style = "background: none; flex-direction: row; justify-content: space-between; width: 100%; padding: 0;"
      }
    }, 1000);
  }
};
window.addEventListener("load", quiz.init);