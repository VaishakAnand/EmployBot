var submitBut = document.getElementById("submitButton");
var submit = document.getElementById("submiter");
var submitText = document.getElementById("submitText");
submitBut.addEventListener("click", function() {
   submit.classList.add("spinner-border");
   submit.classList.add("spinner-border-sm");
   submitText.textContent = " Processing...";
   setTimeout(function(){
    window.location.href = 'PostProcessing.html';
 }, 1500);
});
