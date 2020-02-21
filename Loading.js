var submitBut = document.getElementById("submitButton");
var submit = document.getElementById("submiter");
var submitText = document.getElementById("submitText");

submitBut.addEventListener("click", function() {
   submit.classList.add("spinner-border");
   submit.classList.add("spinner-border-sm");
   submitText.textContent = " Processing...";
   setTimeout(function(){
    window.location.href = 'PostProcessing.html';
 }, 1800);
});

var uploadBut = document.getElementById("uploadBut");
var uploadText = document.getElementById("upload");

uploadBut.addEventListener("click", function(){
   setTimeout(function(){
      uploadText.textContent = "SampleContract.pdf uploaded";
   }, 2500);
});