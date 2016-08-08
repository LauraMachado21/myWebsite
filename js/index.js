showContact = function(){
  document.getElementById('contact').innerHTML= "<h1>Contact Me<\/h1>";
}

showPhoneIcon = function(){
  document.getElementById('contact').innerHTML = "<i class=\"fa fa-phone\"><\/i>";
}

showResume = function(){
  document.getElementById('resume').innerHTML="<h1>Resume<\/h1>";
}

showFileIcon = function(){
  document.getElementById('resume').innerHTML = "<i class=\"fa fa-file-text-o\"><\/i>";
}

$('resume').hover(showFileIcon(),showResume());
