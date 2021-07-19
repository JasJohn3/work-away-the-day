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

}
$(document).ready(function(){
  $(".input-group").on("click", "p", function(){
      // get current text of p element
  var text = $(this)
  .text()
  .trim();
  var id = text.id;

  // replace p element with a new textarea
  var textInput = $("<textarea>").addClass("form-control").attr('id', id).val(text);
  $(this).replaceWith(textInput);

  // auto focus new element
  textInput.trigger("focus");
  });

  $(".input-group").on("click", "button", function(){
        // get current value of textarea
        var text = $(this).closest('textarea').val();
        var id = $(this).closest('textarea').id;
        console.log(text);
        console.log(id);
        // recreate p element
        var eventP = $("<p>").addClass("form-control").attr('id', id).val(text);
      
        // replace textarea with new content
        // $(this).replaceWith(eventP);

  })
drawDate();
drawTime();

});