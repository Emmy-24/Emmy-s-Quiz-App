// Selecting all Required Elements

const Rulesbox = document.querySelector(".Rules_box");
const exitbutton = Rulesbox.querySelector(".button .quit");
const continuebutton = Rulesbox.querySelector(".button .Start_quiz"); 
const Quizbox = document.querySelector(".Quiz_box");
const resultbox = document.querySelector(".Result_box");
const optionlist = document.querySelector("Options_list");
const timeline = document.querySelector("header .time_line");
const timetext = document.querySelector("header .timer .time_left_txt");
const timeCount = document.querySelector("header .timer .timer_sect");

let timeValue = 10;
let queCount = 0;
let queNumb = 1;
let userScore = 0;
let counter;
let counterline;
let widthValue = 0;

const quitQuizbtn = resultbox.querySelector(".button .quit");
const nextQuestion = document.querySelector(".button .next_question");
const bottomQuescounter = document.querySelector("footer .total_question");
