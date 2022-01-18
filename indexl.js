//jshint esversion:6

const gaugeElement = document.querySelector(".gauge");
var a = JSON.parse( localStorage.getItem('grade-percentage') );

function setGaugeValue(gauge, value) {
  if (value < 40 || value >100 ) {
    return;
  }

  gauge.querySelector(".gauge__fill").style.transform = `rotate(${
    value/200
  }turn)`;
  gauge.querySelector(".gauge__cover").textContent = `${value}%`;
}

setGaugeValue(gaugeElement, a);

if(a>=40&&a<=55)
{

   document.querySelector("p").innerHTML="Broken times may have turned you and appear as if there is no hope.Life may have thrown its worst at you, making it appear as if there is no chance of recovering so much pain. But when you do feel like giving up there is always people who can help pick up the pieces and move forward. There is always a good phase after a bad one. Believe in yourself! ";
}
else if (a>55&&a<=70) {
  document.querySelector("p").innerHTML="You have been in your little shell for a period really long. In times of trouble you try to escape it and try to wait out the storm. But there is a storm inside your mind which prevents you from feeling free most of your days you spend being dissatisfied and when you do feel happy you think it won't last. ";
}
else if(a>71&&a<=85){

  document.querySelector("p").innerHTML="While most of the times you are quite content with the things around you .There are moments when life takes a little bit of toll on you. It's completely natural to feel this way at times and it's completely okay to not feel okay. Give yourself a small break to see your growth ";

}
else
{
  document.querySelector("p").innerHTML="You are pretty extroverted and enjoy spending time with your loved ones.You find happiness in small things and feel confident of your planning. Sometimes there can be moments when you like to have your alone time and that only makes you a more secure person.In your mind you are in safe hands.";

}
