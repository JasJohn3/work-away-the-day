let currentDate = document.querySelector('#currentDay');
let currentDay = moment().format('MMMM Do YYYY');
let currentHour = moment().format('LT');

function drawDate(){
  currentDate.textContent = moment().format('MMMM Do YYYY');

}
function drawTime(){
  let timeArr =Array.from(document.querySelectorAll('#time'));
  let hour = 9;
  for (i = 0; i < timeArr.length; i++) {
    let setHour = moment().hour(hour).minute(0).format('LT');
    const element = timeArr[i];
    element.textContent = setHour;  
    hour+=1;
  }
}
function loadSaved(){

}
function hourCheck(){
setInterval(function(){}, 1000);
}
$(document).ready(function(){
  $(".input-group").on("blur", "textarea", function(){

      let element = $(this);
      let text = element.val();
      let id = element.id;
      console.log(id);

      let eventP = $("<p>").addClass("form-control").attr('id', id).val(text);
      
      
      $(this).replaceWith(eventP);
  });

$(".list-group").on("click", "p", function() {
  let text = $(this)
    .text()
    .trim();
  let textInput = $("<textarea>").addClass("form-control").val(text);
  $(this).replaceWith(textInput);
  textInput.trigger("focus");
});


$(".list-group").on("blur", "textarea", function() {
  let text = $(this).val();
  let taskP = $("<p>")
    .addClass("form-control")
    .text(text);
  $(this).replaceWith(taskP);
});
$(".input-group").on("click", "button", function(){
 console.log('Save Button Clicked!');
})
drawDate();
drawTime();

});