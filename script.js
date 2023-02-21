/* Declare variables below to save the different sections (divs) of your story*/
let storyOpening=document.querySelector(".story-opening");
let button1=document.querySelector(".option-one");
let button2=document.querySelector(".option-two");
let option1button=document.querySelector(".option-one-screen");
let option2button=document.querySelector(".option-one-screen");
let option1end=document.querySelector(".option-one-end");
let option2end=document.querySelector(".option-two-end");










// /* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables*/

button1.onclick=function(){
     option1button.style.display = "block";
     storyOpening.style.display = "none";

};

button2.onclick=function(){
     option2button.style.display = "block";
     storyOpening.style.display = "none";
    

};






