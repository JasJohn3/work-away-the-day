let currentDate = document.querySelector('#currentDay');

function drawDate(){
  setInterval(()=>{
    currentDate.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
  }, 1000);
  
}
$(document).ready(function(){
drawDate();
});