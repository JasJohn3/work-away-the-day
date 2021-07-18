let currentDate = document.querySelector('#currentDay');
let currentDay = moment().format('MMMM Do YYYY');

function drawDate(){
  currentDate.textContent = moment().format('MMMM Do YYYY');
  // setInterval(()=>{
    
  // }, 1000); 
}
function drawTime(){
  let timeArr =Array.from(document.querySelectorAll('#time'));
  let hour = 9;
  for (i = 0; i < timeArr.length; i++) {
    const element = timeArr[i];
    if(hour < 12 && hour >= 9){
      element.textContent = hour +' am'
    }else if (hour === 12) {
      element.textContent = hour +' pm'
    }else if(hour > 12){
      hour = 1;
      element.textContent = hour +' pm'
    }else if(hour < 9){
      element.textContent = hour +' pm'
    }
    hour+=1;
  }
}
$(document).ready(function(){
drawDate();
drawTime();
});